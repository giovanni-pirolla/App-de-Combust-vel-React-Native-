import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

export default function App() {
  const [gas, setGas] = useState('');
  const [etanol, setEtanol] = useState('');

  return (
    <View style={styles.container}>
      <Text
      style = {styles.titulo}
      >Gasolina ou Álcool?</Text>
      <Image 
      style = {styles.imagem_posto}
      source={require('./assets/posto-gasolina.jpg')}/>
      <TextInput
      style = {styles.precos}
      placeholder='Digite o preço da Gasolina: '
      />
      <TextInput
      style = {styles.precos}
      placeholder='Digite o preço do Etanol: '
      />
      <Pressable
      style = {}
      >
        <Text>Verificar Vantagem</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0a6',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 26,
    padding: 42,
    fontFamily: 'fantasy',
    backgroundColor: '#f8cb00',
  },

  precos: {
    fontFamily: 'fantasy',
    fontSize: 15,
    backgroundColor: '#f8cb00',
    borderColor: '#ff0000',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    textAlign: 'left',
  },

  imagem_posto: {
    height: 200,
    width: 300,
  }
});
