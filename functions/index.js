const functions = require('firebase-functions');

exports.lowerCase = functions.database.ref('users/{userId}')
    .onWrite(event => {
        const messageValue = event.data.val();

        const toUpperCase = messageValue.body.toUpperCase();

        return event.data.ref.child('about2').set(toUpperCase);

    })
