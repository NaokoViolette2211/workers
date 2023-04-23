console.log('worker started!');

self.addEventListener('message', (e) => {
  console.log('worker received a message:', e.data);
});

self.postMessage('hello');