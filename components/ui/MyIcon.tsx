import React from 'react';
import { View } from 'react-native';

// Importación de los iconos de react-native-vector-icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
    name: string;
    color: string;
    size?: number;
    white?: boolean;
}

export const MyIcon = ({ name, color, size = 50, white = false }: Props) => {
  return (
    <View style={{ paddingHorizontal: 10,  marginTop:7}}>
      <Icon name={name} size={size} color={white ? 'white' : color} />
    </View>
  );
};