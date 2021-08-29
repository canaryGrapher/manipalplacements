/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js')

firebase.initializeApp({
    apiKey: "AIzaSyDNe5YdeEFBknrx-fO-TbGBLWpnygnE_fs",
    projectId: "college-placement-ae65d",
    messagingSenderId: "232543850019",
    appId: "1:232543850019:web:8da6100c322fb7282a2b96",
    measurementId: "G-L88MHJBHKC"
})

firebase.messaging()