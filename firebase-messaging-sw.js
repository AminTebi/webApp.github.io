importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const firebaseConfig = {
      apiKey: "AIzaSyDDKSpT_g_mS5_CT1epcHq_URXy3U9CVlw",
      authDomain: "ziluck.firebaseapp.com",
      projectId: "ziluck",
      storageBucket: "ziluck.appspot.com",
      messagingSenderId: "755537997341",
      appId: "1:755537997341:web:e739780fc9fb3bff6360f4",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
      };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
