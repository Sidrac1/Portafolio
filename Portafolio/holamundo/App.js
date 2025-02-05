import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyForm from './components/MyForm';

export default function App() {

  return(
    <View style={StyleSheet.container}>
      <MyForm></MyForm>
      <StatusBar style='auto'></StatusBar>
    </View>
  );

  }//esta constante es para presionar el botón, es igual a una función anónima
  /*la función anónima es llamada así para poderla llamar sin necesidad de un
  nombre. para mmandarla a llamar es necesario mandar a llamar a la constante
  en la que se creó*/
  /*La función flecha es utilizada para dar instrucciones en una sola línea*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:'80%',
    height:40,
    borderWidth:1,
    borderColor:'gray',
    marginBotton:16,
    paddingLeft:8,
  },
  resultText:{
    marginTop:16,
    fontSize:16,
  },


});
//crear carpeta llamada components y