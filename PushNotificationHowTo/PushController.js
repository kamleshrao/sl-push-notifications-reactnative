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
            message: "Your medication reminder", // (required)
            date: new Date(Date.now() + (this.state.seconds * 1000)) // in 60 secs
        });        
    }

    render() {
        return null;
    }
}
