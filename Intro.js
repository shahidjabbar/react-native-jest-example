// Intro.js
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


import ColorPoint from './points/ColorPoint';

let p = new ColorPoint(2,1, 'orange');
console.log(p.toString());


import {StackNavigator} from 'react-navigation';


class MyHomeScreen extends React.Component {
    static navigationOptions = {
	title: 'Home',
    }

	render() {
	    return (
      <Button
      onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Go to Lucy's profile"
      />
		    );
	}
}

const ModalStack = StackNavigator({
	Home: {
	    screen: MyHomeScreen,
	}
    });



/*const BasicApp = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});
*/

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'center',
    },
    instructions: {
        color: '#333333',
        marginBottom: 5,
        textAlign: 'center',
    },
    welcome: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
    }
});

export default class Intro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    This is a React Native snapshot test.
                </Text>
            </View>
        );
    }
}