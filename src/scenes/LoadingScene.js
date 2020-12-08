import React, {Component} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import styles from '../styles/index';

class LoadingScene extends Component{
    render(){
        return(
            <View style={styles.loadingScene}>
                <Text style={styles.textSplashCarona}>CARONA</Text>
                <Text style={styles.textSplashCI}>CI</Text>
            </View>

        );
    }
}

export default LoadingScene;