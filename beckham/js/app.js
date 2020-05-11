if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
  .then((reg) => console.log('registered!',reg))
  .catch((err) =>  console.log('not registered',err));
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
});
