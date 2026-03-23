import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Linking,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const InfoRow = ({ label, value }) => (
  <View style={styles.infoRow}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const DetailsScreen = ({ route, navigation }) => {
  const { program } = route.params;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#4F46E5" />

      <View style={styles.hero}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.flag}>{program.flag}</Text>
        <Text style={styles.university}>{program.university}</Text>
        <View style={styles.countryBadge}>
          <Text style={styles.countryText}>{program.country}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.fullDesc}>{program.fullDescription}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Information</Text>
          <View style={styles.infoCard}>
            <InfoRow label="💰 Tuition" value={program.tuitionRange} />
            <View style={styles.divider} />
            <InfoRow label="📅 Intake" value={program.intake} />
          </View>
        </View>

  
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Available Programs</Text>
          <View style={styles.tagsWrap}>
            {program.programs.map((p, i) => (
              <View key={i} style={styles.tag}>
                <Text style={styles.tagText}>{p}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.ctaBtn}
          onPress={() => Linking.openURL(program.website)}
          activeOpacity={0.85}>
          <Text style={styles.ctaText}>Visit Official Website</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },
  hero: {
    backgroundColor: '#4F46E5',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
  },
  backBtn: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  backText: {
    color: '#C7D2FE',
    fontSize: 15,
    fontWeight: '600',
  },
  flag: {
    fontSize: 56,
    marginBottom: 8,
  },
  university: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  countryBadge: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
  },
  countryText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E1B4B',
    marginBottom: 10,
  },
  fullDesc: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 22,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 4,
  },
  infoLabel: {
    fontSize: 13,
    color: '#6B7280',
    flex: 1,
  },
  infoValue: {
    fontSize: 13,
    color: '#1E1B4B',
    fontWeight: '600',
    flex: 2,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginVertical: 8,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#EEF2FF',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  tagText: {
    color: '#4F46E5',
    fontSize: 13,
    fontWeight: '600',
  },
  ctaBtn: {
    backgroundColor: '#4F46E5',
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  ctaText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
});

export default DetailsScreen;
