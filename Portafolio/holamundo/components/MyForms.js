import React, {useState} from 'react';
import { StyleSheet,Text,Button,View } from 'react-native';

export default function MyForm(){
    const[text,setText]= useState('');//estas son las propiedades a utilizar
    const[displayText, setDisplayText] = useState(''); 

    const handlePress = () =>{
        setDisplayText (text); //para asignar lo que está en la caja de texto
        setText(''); //para borrar la caja de texto
    
    return(
            <View style={styles.container}>
              <Text>Hola mundo!</Text>
              <TextInput
              placeholder="Type something"
              value= {text}
              onChangeText={setText}
              style= {styles.input}
              />
              <Button title="Click me!" onPress={handlePress} />
              <Text style= {styles.resultText}>Text to Show: {displayText}</Text>
              <StatusBar style="auto" />
            </View>
    );
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    }
  });