import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Alumnos_Total } from './Hooks/Hooks_Estudiantes';

const Total: React.FC = () => {
  const { alumnos } = Alumnos_Total();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Estudiantes</Text>
      <FlatList
        data={alumnos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nombre}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404131',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  item: {
    backgroundColor: '#2cecdd',
    padding: 15.5,
    borderBottomWidth: 2,
    borderColor: '#000000',
    width: '150%',
  },
  itemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default Total;
