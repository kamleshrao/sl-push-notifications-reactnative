import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker,
  AppState 
} from 'react-native';
import PushController from './PushController';
import PushNotification from 'react-native-push-notification';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);

    this.state = {
      seconds: 5,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange); 
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange); 
  }

  handleAppStateChange(appState) {
    if(appState === 'background') {
      //TODO: Schedule background notification 
      console.log('app is in background', this.state.seconds);
    }
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.welcome}>
            Choose your Notification time in second(s).
          </Text>
          <Picker 
            style={styles.picker} 
            selectedValue={this.state.seconds} 
            onValueChange={(seconds) => this.setState({ seconds })}
          >
            <Picker.Item label="5" value={3} />
            <Picker.Item label="5" value={5} />
            <Picker.Item label="10" value={10} />
            <Picker.Item label="15" value={15} />
          </Picker>
          <PushController/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  picker: {
    width: 100,
  },
});
