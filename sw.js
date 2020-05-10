self.addEventListener('install', evt =>{
  console.log('bitch is installed');
});


self.addEventListener('activate',evt =>{
console.log('Im ALIVE BITCH!!');
});

self.addEventListener('fetch',evt=>{
  console.log('fetch event',evt);
})
