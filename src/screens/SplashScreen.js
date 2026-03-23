import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2800);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4A8FCE" />
      <Image
      source={require('../assets/images/splashscreenIcon.png')}
      style={styles.logo}
      resizeMode="contain"
      />
      
      <Text style={styles.appName}>WayGood</Text>
      <Text style={styles.tagline}>Your Gateway to Study Abroad</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
      height: 350,
      width: 350,
      marginBottom: 28,
      justifyContent: 'center',
      alignItems: 'center',
      top: 50,
      right: 10,
  },
  logoPlaceholder: {
    width: width * 0.35,
    height: width * 0.35,
    borderRadius: (width * 0.35) / 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  logoEmoji: {
    fontSize: 64,
  },
  appName: {
    fontSize: 42,
    fontWeight: '800',
    color: '#4A8FCE',
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 15,
    color: '#C7D2FE',
    letterSpacing: 0.5,
    marginBottom: 60,
  },
});

export default SplashScreen;
