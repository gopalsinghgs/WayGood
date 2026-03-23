import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProgramCard = ({ item, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
    <View style={styles.header}>
      <Text style={styles.flag}>{item.flag}</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.country}</Text>
      </View>
    </View>
    <Text style={styles.university}>{item.university}</Text>
    <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
    <Text style={styles.viewMore}>View Details →</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  flag: {
    fontSize: 32,
  },
  badge: {
    backgroundColor: '#EEF2FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#4F46E5',
    fontSize: 12,
    fontWeight: '600',
  },
  university: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1E1B4B',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  viewMore: {
    fontSize: 13,
    color: '#4F46E5',
    fontWeight: '600',
  },
});

export default ProgramCard;
