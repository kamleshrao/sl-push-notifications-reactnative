import React, { Component } from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
    componentDidMount() {
        PushNotification.configure({
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );
            },
        });
        PushNotification.localNotificationSchedule({
            message: "Medication reminder every 60 sec", // (required)
            date: new Date(Date.now() + (60 * 1000)) // in 60 secs
        });        
    }

    render() {
        return null;
    }
}
