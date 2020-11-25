/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {id: '1', paciente: 'Hook', propietario: 'Hugo', sintomas: 'No come'},
    {id: '2', paciente: 'Redux', propietario: 'Paco', sintomas: 'No duerme'},
    {id: '3', paciente: 'Native', propietario: 'Luis', sintomas: 'No canta'},
  ]);

  const eliminarPaciente = (id) => {
    setCitas((citasActuales) => {
      return citasActuales.filter((cita) => cita.id !== id);
    });
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <Formulario />
        <Text style={styles.titulo}>
          {citas.length > 0 ? 'Administra tus Citas' : 'Agrega una Cita'}
        </Text>

        <FlatList
          data={citas}
          renderItem={({item}) => (
            <Cita cita={item} eliminarPaciente={eliminarPaciente} />
          )}
          keyExtractor={(cita) => cita.id}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#AA076B',
    flex: 1,
  },
  titulo: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
