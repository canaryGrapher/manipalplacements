import * as firebase from "firebase/app";
import 'firebase/messaging'
import localforage from 'localforage'

const firebaseCloudMessaging = {
    tokenInlocalforage: async () => {
        return localforage.getItem('fcm_token')
    },

    init: async function () {
        firebase.initializeApp({
            apiKey: "AIzaSyDNe5YdeEFBknrx-fO-TbGBLWpnygnE_fs",
            projectId: "college-placement-ae65d",
            messagingSenderId: "232543850019",
            appId: "1:232543850019:web:8da6100c322fb7282a2b96",
            measurementId: "G-L88MHJBHKC"
        })

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
