import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultCard({ gas, etanol, resultado, porcentagem }) {
  return (
    <View style={styles.card}>
      <Text style={styles.destaque}>
        {resultado}
      </Text>
      <Text style={styles.texto}>
        O Etanol está custando {porcentagem}% do preço da Gasolina.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8cb00',
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
    width: 280,
  },
  texto: {
    fontSize: 14,
    fontFamily: 'fantasy',
  },
  destaque: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ff0000',
    marginTop: 5,
    marginBottom: 15,
  }
});