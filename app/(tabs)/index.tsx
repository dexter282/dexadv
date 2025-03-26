import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function Index() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerText}>Home</ThemedText>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        
        <ThemedText style={styles.nameText}>Steven Earl A. Sanchez</ThemedText>
      
      </ScrollView> 
    </View>         
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: 'white',
    width: '100%',
    padding: 15,
    alignItems: 'flex-start',
    zIndex: 1, 
    elevation: 4,
  },

  nameText: {
    marginTop: 40,
    fontSize: 25,
    color: '#000',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },

  scrollViewContent: {
    paddingTop: 15,
    padding: 20,
  },

  card: {
    backgroundColor: 'white',
    padding: 40,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },

  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },
});