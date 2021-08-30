import 'firebase/messaging'
import firebase from 'firebase/app';
import localforage from 'localforage'

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        return localforage.getItem('fcm_token')
    },

    init: async function () {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: `${process.env.FIREBASE_API_KEY}`,
                projectId: `${process.env.FIREBASE_PROJECT_ID}`,
                messagingSenderId: `${process.env.FIREBASE_MESSAGING_SENDER_ID}`,
                appId: `${process.env.FIREBASE_APP_ID}`,
                measurementId: `${process.env.FIREBASE_MEASUREMENT_ID} `
            })
        }
        try {
            if ((await this.tokenInlocalforage()) !== null) {
                return false
            }

            const messaging = firebase.messaging()
            await Notification.requestPermission()
            const token = await messaging.getToken()

            localforage.setItem('fcm_token', token)
            console.log('fcm_token', token)
        } catch (error) {
            console.error(error)
        }
    },
}

export { firebaseCloudMessaging }
