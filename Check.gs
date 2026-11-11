// Uptime tracker in GAS

function Check() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Monitors");

  var lastRow = sheet.getLastRow();
  var totalRowsToCheck = lastRow - 1;
  var totalColumns = 5;

  var dataRange = sheet.getRange(2, 1, totalRowsToCheck, totalColumns);
  var tableValues = dataRange.getValues();

  var historicalSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Historical");
  var historicalRowsToAppend = [];

  for (var rowIndex = 0; rowIndex < tableValues.length; rowIndex++) {
    var currentRow = tableValues[rowIndex];
    var targetId = currentRow[0];
    var targetUrl = currentRow[1];

    var responseTimeMs = 0;
    var finalStatusString = "";
    var startTime = new Date().getTime();

    var reqOptions = {
      "muteHttpExceptions": true,
      "followRedirects": true,
      "method": "get"
    };

    var httpResponse = UrlFetchApp.fetch(targetUrl, reqOptions);
    var statusCode = httpResponse.getResponseCode();
    
    var endTime = new Date().getTime();
    responseTimeMs = endTime - startTime;

    if (statusCode >= 200 && statusCode < 500) {
      finalStatusString = "UP (" + statusCode + ")";
    } else {
      finalStatusString = "DOWN (" + statusCode + ")";
    }

    currentRow[2] = finalStatusString;
    currentRow[3] = responseTimeMs;
    currentRow[4] = new Date();

    historicalRowsToAppend.push([
      targetId,
      finalStatusString,
      responseTimeMs,
      new Date()
    ]);
      
  }

  dataRange.setValues(tableValues);

  var nextAvailableRow = historicalSheet.getLastRow() + 1;

  var historicalRange = historicalSheet.getRange(nextAvailableRow, 1, historicalRowsToAppend.length, 4);

  historicalRange.setValues(historicalRowsToAppend);
}
