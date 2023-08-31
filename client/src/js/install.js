const installButton = document.getElementById('buttonInstall');

// Logic for installing the PWA/


// Add an event handler to the `beforeinstallprompt` event.


window.addEventListener('beforeinstallprompt', (event) => {

  // Prevent the mini-infobar from appearing on mobile


  event.preventDefault();

  // Stash the event so it can be triggered later

  window.deferredPrompt = event;

  // Remove the 'hidden' class from the install button container

  installButton.classList.remove('hidden');
});




// Implement a click event handler on the `installButton` element



installButton.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }


  // Show the install prompt
  promptEvent.prompt();
  window.deferredPrompt = null;




  // Hide the install button
  installButton.classList.add('hidden');
});



// Add a handler for the `appinstalled` event

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});
