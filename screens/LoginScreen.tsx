import React, { useState } from 'react'
import { Alert, Button, Text, TextInput, Touchable, View } from 'react-native'
import { Styles } from '../themes/Styles'
import { BotonPrimario } from '../components/BotonPrimario'
import { useNavigation, NavigationProp } from '@react-navigation/native'



const navigator=  useNavigation()
export const LoginScreen = () => {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')


    const handleLogin = () => {
        if(!email || !password){
            Alert.alert("error", "Por favor, ingrese anbos campos")
            return;
        }

        Alert.alert("login exitoso", `Bienvenido, ${email}`)
    }
  return (
    <View style= {Styles.container}>
        <Text style={Styles.text}>Login</Text>

        <TextInput
            style={Styles.input}
            placeholder='Email'
            keyboardType='email-address'
            placeholderTextColor="black"
            value={email}
            onChangeText={setEmail}
        />

        <TextInput
            style={Styles.input}
            placeholder='Password'
            secureTextEntry
            placeholderTextColor="black"
            value={password}
            onChangeText={setPassword}
        />

        <BotonPrimario
            onPress={handleLogin}
            label='Iniciar Sesión'
        />
        
        <Text style={Styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
    </View>
  )
}
