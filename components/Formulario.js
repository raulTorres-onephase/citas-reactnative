/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Formulario = () => {
  return (
      <>
      <View style={styles.formulario}>
      <View>
          <Text style={styles.label}>Paciente:</Text>
          <TextInput
            style={styles.input}
            onChangeText={ (texto) => console.log(texto)}
          />
      </View>
      <View>
          <Text style={styles.label}>Dueno:</Text>
          <TextInput
            style={styles.input}
            onChangeText={ (texto) => console.log(texto)}
          />
      </View>
      <View>
          <Text style={styles.label}>Telefono Contacto:</Text>
          <TextInput
            style={styles.input}
            onChangeText={ (texto) => console.log(texto)}
            keyboardType="numeric"
          />
      </View>
      <View>
          <Text style={styles.label}>Sintomas:</Text>
          <TextInput
            multiline
            style={styles.input}
            onChangeText={ (texto) => console.log(texto)}
          />
      </View>
      </View>
      </>
  );
};

const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20,
      },
      input: {
          marginTop: 10,
          height: 50,
          borderColor: '#e1e1e1',
          borderWidth: 1,
          borderStyle: 'solid',
      }
})

export default Formulario;
