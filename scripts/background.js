// background.js
chrome.runtime.onConnect.addListener((port) => {
    console.log('Content script connected');
    port.postMessage({ message: 'getTitle' });
  
    port.onMessage.addListener((msg) => {
      if (msg.title) {
        console.log('Page title received:', msg.title);
      }
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getData') {
      const data = {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false
      };
      sendResponse({ data });
    }
  });
  