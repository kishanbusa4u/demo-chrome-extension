# Demo Chrome Extension

This is a demo Chrome extension that fetches data from an external API (JSONPlaceholder) and displays it in a popup window. The extension allows users to click a button to fetch data and view it in a table format.

![Extension Preview](https://github.com/kishanbusa4u/demo-chrome-extension/blob/master/extension-preview.png)

## Features

- Fetches data from a public API (`https://jsonplaceholder.typicode.com/todos/1`).
- Displays data in a table format.
- Shows basic details such as User ID, ID, Title, and Completion status.
- Handles fetching, displaying data, and error handling.

## Files in the Repository

- `manifest.json`: Contains metadata and settings for the Chrome extension.
- `popup.html`: The HTML structure for the popup window displayed when the extension icon is clicked.
- `popup.js`: JavaScript to handle fetching data from the API and displaying it in the popup.
- `background.js`: Background script for handling long-running tasks.
- `content.js`: Content script to interact with the current web page (optional, for interaction with content).
- `styles.css`: Styling for the popup window (included inline in the HTML for simplicity).

## Steps to Run the Extension

1. **Clone or Download the Repository**
   - Clone the repository to your local machine using:
     ```bash
     git clone https://github.com/kishanbusa4u/demo-chrome-extension.git
     ```
   - Or download the ZIP and extract it.

2. **Load the Extension in Chrome**
   - Open Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** at the top right.
   - Click **Load unpacked** and select the folder where you extracted or cloned the repository.

3. **Use the Extension**
   - After loading the extension, click the extension icon in the Chrome toolbar.
   - Click the **"Fetch Data"** button in the popup to load data.
   - The data will be displayed in a table format in the popup.

## Troubleshooting

- If you see a **"Loading..."** message indefinitely:
  - Ensure you have an active internet connection.
  - Check if the API (`https://jsonplaceholder.typicode.com/todos/1`) is working and accessible.

- If the extension doesn't work as expected:
  - Open the **Developer Tools** (F12) in Chrome, go to the **Console** tab, and look for any error messages.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributions

Feel free to fork this repository, make changes, and submit pull requests. All contributions are welcome!
