import React, { useState } from 'react'

import { Styles } from '../themes/Styles'

import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { ScrollView } from 'react-native-gesture-handler'
import { useWindowDimensions } from 'react-native'




export const LoginScreen = () => {

    const {height}= useWindowDimensions();

    return(
        <Layout style={{flex: 1}}>
            <ScrollView style={{ marginHorizontal: 40 }}>
                <Layout style={{ paddingTop:height * 0.35 }}>
                    <Text category='h1'>Ingresar</Text>
                    <Text category='p2'>por favor, ingresa para continuar</Text>
                </Layout>

                {/*Inputs */}
                <Layout>
                    <Input 
                        placeholder='Correo electronico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        style={Styles.input}
                    />

                    <Input 
                        placeholder='Contraseña'
                        autoCapitalize='none'
                        secureTextEntry
                        style={Styles.input}
                    />
                </Layout>


                {/*Spacer */}
                <Layout style={{height: 20}} />


                {/*Boton */}

                <Layout>
                    <Button 
                        onPress={()=>{}}
                        
                    >
                        Ingresar
                    </Button>
                </Layout>


                {/*informacion para crear cuenta */}
                <Layout style={{ height: 50 }} />
                <Layout style={{ 
                    alignItems: 'flex-end',
                    flexDirection:'row',
                    justifyContent: 'center'
                }}>
                    <Text>¿No tienes cuenta?</Text>
                    <Text 
                        status='primary' 
                        category='s1'
                        onPress={()=>{}}> 
                    {' '}Crear cuenta {' '} 
                    </Text>
                </Layout>
            </ScrollView>
        </Layout>
    )
  
}
