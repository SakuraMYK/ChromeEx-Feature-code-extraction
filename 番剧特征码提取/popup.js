document.addEventListener('DOMContentLoaded', function () {
  const runScriptButton = document.getElementById('runScript')

  runScriptButton.addEventListener('click', async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    })
    window.close()
  })
})
