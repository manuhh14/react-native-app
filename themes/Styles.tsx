import { StyleSheet } from "react-native";

export const Styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
      },
      text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
      },
      input: {
        paddingTop: 20,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
        color: 'black', 
      },
      forgotPassword: {
        marginTop: 15,
        textAlign: 'center',
        color: '#007bff',
      },
      botonPrimario:{
        backgroundColor:"#7037eb",
        borderRadius:10,
        padding: 10,
        marginTop:10,
        width: '100%',
        alignItems: 'center'
      },
      textoBoton: {
        color:'#fafdea',
        fontSize: 18
      }
})