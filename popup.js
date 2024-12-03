document.addEventListener('DOMContentLoaded', () => {
  const fetchDataButton = document.getElementById('fetchData');
  
  if (fetchDataButton) {
    fetchDataButton.addEventListener('click', async () => {
      try {
        chrome.runtime.sendMessage({ action: 'getData' }, (response) => {
          if (response && response.data) {
            const data = response.data;
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = ''; // Clear any previous content

            // Create a table to display the fetched data
            const table = document.createElement('table');
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const headers = ['User ID', 'ID', 'Title', 'Completed'];
            
            headers.forEach(headerText => {
              const th = document.createElement('th');
              th.textContent = headerText;
              headerRow.appendChild(th);
            });
            thead.appendChild(headerRow);
            table.appendChild(thead);

            const tbody = document.createElement('tbody');
            const row = document.createElement('tr');
            const dataCells = [
              data.userId,
              data.id,
              data.title,
              data.completed ? 'Yes' : 'No',
            ];
            dataCells.forEach(cellData => {
              const td = document.createElement('td');
              td.textContent = cellData;
              row.appendChild(td);
            });
            tbody.appendChild(row);
            table.appendChild(tbody);

            resultDiv.appendChild(table);
          }
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    });
  }

  // Send message to background.js to get the page title
  const port = chrome.runtime.connect();
  port.postMessage({ message: 'getTitle' });

  port.onMessage.addListener((msg) => {
    console.log('Received title:', msg.title);  // Log the title
    if (msg.title) {
      document.getElementById('pageTitle').textContent = `Page Title: ${msg.title}`;
    }
  });
});
