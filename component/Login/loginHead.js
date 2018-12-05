
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Appbar,Searchbar,TextInput } from 'react-native-paper';

export default class LoginHead extends Component {
    render(){
        return (
            <Appbar.Header>
                <Appbar.Action icon="menu" onPress={this._onSearch} />
                <Appbar.Content
                title="Hey ajay..."
                />
                <TextInput
        label='Email'
        value={""}
        style={{width:250}}
        onChangeText={text => this.setState({ text })}
      />
                <Appbar.Action icon="search" onPress={this._onSearch} />
            </Appbar.Header>
        )
    }
}

const styles = StyleSheet.create({
    main_view_st:{
        flex:1,
        flexDirection:"column"
    },
    bottom: {
        
        left: 0,
        right: 0
    },
    textBoxStyle:{
        paddingLeft:40,
        height:40
    }
})