import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import LoginScreen from './Screens/LoginScreen'



export default function App() {

	const [currentScreen,setCurrentScreen] = useState(<LoginScreen currentPageHandler = {setCurrentScreen}/>);
	return (currentScreen);
}


