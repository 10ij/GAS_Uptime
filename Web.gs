function doGet() {
  var template = HtmlService.createTemplateFromFile("Index");
  
  var monitorsSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Monitors");
  template.monitorsData = monitorsSheet.getDataRange().getValues();
  
  var historicalSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Historical");
  var historicalData = historicalSheet.getDataRange().getValues();
  // Optional: Reverse historical data so newest entries show up top
  var headers = historicalData.shift();
  historicalData.reverse();
  historicalData.unshift(headers);
  template.historicalData = historicalData;

  return template.evaluate()
    .setTitle("Uptime Dashboard")
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
}
