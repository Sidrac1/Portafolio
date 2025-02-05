import React, {useState} from 'react';
import {Button, TextInput, Appbar} from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

const [text,setText] = React.useState('');
const [showImage,setShowImage]= useState(false);
const [sound, setSound] = useState();

async function playSound(){
  const {sound} = await Audio.Sound.createAsync(
    require ('./assets/jump.mp3')
  );
  setSound(sound);
  await sound.playAsync();
}

useEffect(() => {
  return sound
    ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync(); }
    : undefined;
    },[sound]);


  return (
    <View style={styles.container}>
      {/*APBAR COMPONENT PAPER */}
    <Appbar>
      <Appbar.Content title="REACT NATIVE PAPER"></Appbar.Content>
    </Appbar>

    {/*TEXTINPUT COMPONENT PAPER*/}
    {/*<TextInput
    style={styles.input}
    label = "type something"
    value= {text}
    textColor='blue'
    onChangeText={text=> setText(text)}
    />*/}
    {/*BUTTON COMPONENT PAPER */}
    <Button mode='contained' onPress={()=> {setShowImage(!showImage); playSound();}}>
    smile
    </Button>


    {/*CONDICIONAL PARA MOSTRAR LA IMAGEN */}
    {showImage && (
    <Image source={require('./assets/smile.jpg')}></Image>
    )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    marginBottom: 16,
  },
  image:{
    width:200,
    height:200,
    marginTop:20,
  },
});
