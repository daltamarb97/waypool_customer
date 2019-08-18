const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.welcomeMessage = functions.database.ref('/users/{userId}')
    .onCreate(async event =>{

        const data = event.val();

        const userId = data.userId

        const payload = {
            notification: {
                title: 'welcome message',
                body: 'you have a new subscriber'
            }
        }

        const db = admin.firestore()
        const devicesRef = db.collection('devices').where('userId', '==', userId)

        const devices = await devicesRef.get()

        const tokens = []

        devices.forEach(result=>{
            const token = result.data().token;

            tokens.push(token)
        })

        return admin.messaging().sendToDevice(tokens, payload);
     

    })


