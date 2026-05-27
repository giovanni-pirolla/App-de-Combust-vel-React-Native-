import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import ResultCard from './components/ResultCard';

export default function App() {
  const [gas, setGas] = useState('');
  const [etanol, setEtanol] = useState('');
  const [resultado, setResultado] = useState('');
  const [porcentagem, setPorcentagem] = useState('');

  function verificarVantagem() {
    setPorcentagem(((etanol / gas) * 100).toFixed(2));

    if (porcentagem <= 70) {
      setResultado('Etanol');
    } else {
      setResultado('Gasolina');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gasolina ou Álcool?</Text>
      <Image 
        style={styles.imagem_posto}
        source={require('./assets/posto-gasolina.jpg')}
      />
      <TextInput
        style={styles.precos}
        placeholder='Digite o preço da Gasolina: '
        keyboardType='numeric'
        value={gas}
        onChangeText={(texto) => setGas(texto)}
      />
      <TextInput
        style={styles.precos}
        placeholder='Digite o preço do Etanol: '
        keyboardType='numeric'
        value={etanol}
        onChangeText={(texto) => setEtanol(texto)}
      />
      <Pressable onPress={verificarVantagem}>
        <Text style={styles.botao}>Verificar Vantagem</Text>
      </Pressable>
      <ResultCard gas={gas} etanol={etanol} resultado={resultado} porcentagem={porcentagem}/>
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
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: 280,
    textAlign: 'left',
  },
  botao: {
    fontFamily: 'fantasy',
    fontSize: 15,
    backgroundColor: '#ff0000',
    borderRadius: 15,
    padding: 10,
    margin: 10,
    width: 280,
    textAlign: 'center',
  },
  imagem_posto: {
    top: -10,
    height: 200,
    width: 300,
  }
});