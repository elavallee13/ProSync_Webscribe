const installButton = document.getElementById('buttonInstall');
let deferredInstallPrompt;

// PWA installation logic
// Set up an event listener for the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  installButton.classList.remove('hidden');
});

// Implement a click event handler for the install button
installButton.addEventListener('click', async () => {
  if (!deferredInstallPrompt) {
    return;
  }
  deferredInstallPrompt.prompt();
  
  const { outcome } = await deferredInstallPrompt.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);

  deferredInstallPrompt = null;

  installButton.classList.add('hidden');
});

// Set up an event listener for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('App installation successful');
});
