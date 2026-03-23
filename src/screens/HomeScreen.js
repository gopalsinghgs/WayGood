import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import programs from '../data/programs';
import ProgramCard from '../components/ProgramCard';

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');

  const filtered = programs.filter(
    p =>
      p.university.toLowerCase().includes(query.toLowerCase()) ||
      p.country.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />
      <View style={styles.headerBg}>
        <Text style={styles.headerTitle}>WayGood</Text>
        <Text style={styles.headerSub}>Discover Study Abroad Programs</Text>
        <TextInput
          style={styles.search}
          placeholder="Search university or country..."
          placeholderTextColor="#9CA3AF"
          value={query}
          onChangeText={setQuery}
        />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProgramCard item={item} onPress={() => navigation.navigate('Details', { program: item })} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.empty}>No programs found for "{query}"</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },
  headerBg: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 4,
  },
  headerSub: {
    fontSize: 14,
    color: '#C7D2FE',
    marginBottom: 16,
  },
  search: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 14,
    color: '#111827',
  },
  list: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  empty: {
    textAlign: 'center',
    marginTop: 60,
    color: '#9CA3AF',
    fontSize: 15,
  },
});

export default HomeScreen;
