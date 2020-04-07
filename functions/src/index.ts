import * as functions from 'firebase-functions';
import * as admin from  'firebase-admin';
admin.initializeApp(functions.config().firebase);


exports.newMessageInReserveUser = functions.database.ref(`/reserves/{userId}/{reserveKey}/chat/messages/{messageId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;

    return admin.database().ref(`/${university}/users/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: 'Nuevo mensaje',
                body: `Te ha llegado un mensaje en tu viaje`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})



exports.newMessageInTripsUser = functions.database.ref(`/trips/{userId}/{reserveKey}/chat/messages/{messageId}`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;

    return admin.database().ref(`/${university}/users/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: 'Nuevo mensaje',
                body: `Te ha llegado un mensaje en tu viaje`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})


exports.onTripMessage = functions.database.ref(`/users/{userId}/onTrip/`).onCreate((snap, context) =>{
    const university = context.params.university;
    const userId = context.params.userId;

    return admin.database().ref(`/${university}/users/${userId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: '¡ya estás en viaje!',
                body: `el driver de la reserva en la que estas ya inició el viaje`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})


exports.newCrewNotification = functions.database.ref(`/drivers/{driverId}/matchingCrews/{crewId}`).onCreate((snap, context) =>{
  
    const driverId = context.params.driverId;

    return admin.database().ref(`/drivers/${driverId}/devices/token`).once('value').then(snapshot => snapshot.val()).then(device => {
         const deviceToken = device
         console.log(deviceToken)

 
         const notificationContent = {
            notification: {
                title: '¡Hay un grupo de pasajeros que hicieron match con uno de tus horaros!',
                body: `Si quieres transportar a este grupo, entra ya y confirmales`
            }
        }
 
         return admin.messaging().sendToDevice(deviceToken, notificationContent)
 
 
     })


})
