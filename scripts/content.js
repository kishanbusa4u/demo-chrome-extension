// content.js
console.log('Content script loaded');
chrome.runtime.onConnect.addListener((port) => {
  console.log('Content script connected');
  port.onMessage.addListener((msg) => {
    if (msg.message === 'getTitle') {
      // Send the page title to background.js
      const title = document.title;
      console.log('Sending title:', title); // Log the title being sent
      port.postMessage({ title });
    }
  });
});
