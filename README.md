# Uptime Tracker & Web Dashboard

A lightweight, serverless uptime monitoring tool built entirely using Google Sheets and Google Apps Script. It automatically checks your URLs, logs performance data, and serves a clean, responsive web dashboard—all without needing external hosting or paid infrastructure.


## Google Sheets Setup

Create a new Google Sheet and set up two tabs with the following column structures:

### 1. `Monitors` Tab
| Column A (ID) | Column B (URL) | Column C (Status) | Column D (Response Time) | Column E (Last Checked) |
| :--- | :--- | :--- | :--- | :--- |
| `1` | `https://example.com` | *(Auto-filled)* | *(Auto-filled)* | *(Auto-filled)* |

### 2. `Historical` Tab
| Column A (ID) | Column B (Status) | Column C (Response Time) | Column D (Timestamp) |
| :--- | :--- | :--- | :--- |
| `1` | `UP (200)` | `145` | *(Auto-filled)* |

---

## Installation & Setup

1. Open your Google Sheet, click on **Extensions** > **Apps Script**.
2. Create or replace your script file with the backend code (`Code.gs`).
3. Create a new HTML file named `Index` and paste the frontend template (`Index.html`).
4. Save the project.

### Running the Tracker Automatically
To run the checks on a schedule (e.g., every 10 or 15 minutes):
1. In the Apps Script editor, click on the **Triggers** icon (clock symbol) on the left sidebar.
2. Click **Add Trigger**.
3. Choose `Check` as the function to run.
4. Select event source as **Time-driven** and choose your preferred interval (e.g., Every 15 minutes).

---

## Deploying the Web Dashboard

1. In the Apps Script editor, click **Deploy** > **New deployment**.
2. Click **Select type** and choose **Web app**.
3. Fill in the details:
   - **Description:** Uptime Dashboard v1
   - **Execute as:** *Me*
   - **Who has access:** *Anyone* (or restrict to specific accounts)
4. Click **Deploy** and open the provided Web App URL.

# AI Usage

AI was used for Readme, HTML, and CSS
