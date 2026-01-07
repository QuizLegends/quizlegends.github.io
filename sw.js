importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-sw.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyC4dm0KoyJswhyCY7tgbF4D2nmuZl84X8E",
    projectId: "quizlegends-f58fc",
    messagingSenderId: "1050463164018",
    appId: "1:1050463164018:web:91de002b8afc8e678f54eb"
});

const messaging = firebase.messaging();

// Esta parte gerencia a notificação quando o app está fechado
messaging.onBackgroundMessage((payload) => {
    console.log('Recebido mensagem em segundo plano: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'icone-admin.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
