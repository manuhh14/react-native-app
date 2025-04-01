import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Styles } from '../themes/Styles'


interface Props{
    label: String
    onPress: ()=> void
}
export const BotonPrimario = ({label, onPress}:Props) => {
  return (
    <TouchableOpacity
        style= {Styles.botonPrimario}
        onPress={()=> onPress()}
    >
        <Text style={Styles.textoBoton}>{label}</Text>
    </TouchableOpacity>
  )
}
