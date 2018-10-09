const SERVICE_WORKER_API = 'serviceWorker';
const SERVICE_WORKER_FILE_PATH = 'service-worker.js';

const isSupportServiceWorker = () => SERVICE_WORKER_API in navigator;
// const sendMessageToSW = msg => navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(msg);

const sendMessageToSW = msg => new Promise((resolve, reject) => {
    const messageChannel = new MessageChannel();
    messageChannel.port1.onmessage = event => {
        if (event.data.error) {
            reject(event.data.error);
        } else {
            resolve(event.data);
        }
    };

    navigator.serviceWorker.controller && navigator.serviceWorker.controller.postMessage(msg, [messageChannel.port2]);
});


if (isSupportServiceWorker()) {
    const sw = navigator.serviceWorker;

    sw.register(SERVICE_WORKER_FILE_PATH)
        .then(() => console.log('Load service worker Success.'))
        .catch(() => console.error('Load service worker fail'))
        .then(() => sendMessageToSW('Hello, service worker.'))
        .then(console.log)
        .catch(() => console.error('Send message error.'));
} else {
    console.info('Browser not support Service Worker.');
}