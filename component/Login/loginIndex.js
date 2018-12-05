

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginHead from './loginHead';

export default class Login extends Component {
    render(){
        return (
            <View style={{flex:1}} >
                <LoginHead />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_view_st:{
        flex:1,
        flexDirection:"column"
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
})