importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyALB3JyAqRzcKoyxn0HdfI1supIOhFSCuE",
    authDomain: "reactfirebase-9237c.firebaseapp.com",
    projectId: "reactfirebase-9237c",
    storageBucket: "reactfirebase-9237c.appspot.com",
    messagingSenderId: "381601118252",
    appId: "1:381601118252:web:5748c7f5c91a6dc0b83989",
    measurementId: "G-P8HFNNXY07"
  };


firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
