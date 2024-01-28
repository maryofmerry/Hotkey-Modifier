// background.js
const myFunction = () => {
  console.log("Hello from background.js");
};

module.exports = myFunction;

let hotkeyEnabled = false;

function toggleHotkey() {
  hotkeyEnabled = !hotkeyEnabled;
  alert(`Hotkey is ${hotkeyEnabled ? 'enabled' : 'disabled'}.`);
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.commands.onCommand.addListener((command) => {
    if (command === 'toggle-hotkey') {
      toggleHotkey();
    }
  });
});
