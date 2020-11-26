/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableHighlight} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [mostrarform, guardarMostrarForm] = useState(false);
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

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
        <TouchableHighlight onPress={ () => mostrarFormulario()} style={styles.btnMostrarForm}>
          <Text style={styles.textoMostrarForm}>Crear Nueva Cita</Text>
        </TouchableHighlight>
      </View>
        <View style={styles.contenido}>
          {mostrarform ? (
            <>
            <Text style={styles.titulo}>
              Crear Nueva Cita
              </Text>
            <Formulario />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {citas.length > 0 ? 'Administra tus Citas' : 'Agrega una Cita'}
              </Text>

              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({item}) => (
                  <Cita cita={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
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
  contenido: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: '#7d024e',
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
