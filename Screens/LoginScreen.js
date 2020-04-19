import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

export default function LoginScreen() {
	const [HighScore, setHighScore] = useState();
	const [CurrentSum, setCurrentSum] = useState(0);
	return (
		<View style={styles.MainContainer}>
			<View style={styles.container}>

				<TextInput style={styles.inputStyle} placeholder="Username" />
				<TextInput style={styles.inputStyle} placeholder="Password" />



				<View style={{ marginBottom: 10, marginTop:100 ,backgroundColor:'red'}}>
					<TouchableOpacity onPress={onSignUP} style={styles.button} activeOpacity={0.5}>
						<Text>LOGIN</Text>
					</TouchableOpacity>
				</View>
				<View style={{ marginBottom: 10 }}>
					<TouchableOpacity onPress={onSignUP} style={styles.button} activeOpacity={0.5}>
						<Text>SIGNUP</Text>
					</TouchableOpacity>
				</View>
			</View>

		</View>


	)
}

const onSignUP = () => { };
const onLogin = () => { };

const styles = StyleSheet.create({

	MainContainer: {
		padding: 50,
		paddingTop: 100,
		backgroundColor: 'skyblue',
		flex: 10,
		alignItems: 'center',
	}
	,
	container: {
		height: '80%',
		width: '80%',
		justifyContent: 'center',
		backgroundColor: 'blue',
		padding: 20,
		margin: 10,


	},
	inputStyle: {
		marginBottom: 10,
		backgroundColor: 'white',
		padding: 10
	},
	button: {
		backgroundColor: 'skyblue',
		padding: 10,
		width: '50%',
		alignSelf: 'center',
		alignItems: 'center',

	}

});

