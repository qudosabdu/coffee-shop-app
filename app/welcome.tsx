import { AssetsImage } from '@/utils/image';
import { router } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function WelcomeScreen() {
  const handleGetStarted = () => {
    router.replace('/(tabs)');
  };

  return (
    <ImageBackground
      source={AssetsImage.welcomeBg}
      style={styles.container}
    >
      <View style={styles.overlay} />
      <View style={styles.illustrationArea}>
        <View style={styles.coffeeItemsContainer}>
          <Image source={AssetsImage.home} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Coffee so good,{'\n'}your taste buds{'\n'}will love it</Text>
          <Text style={styles.subtitle}>
            The best grain, the finest roast, the{'\n'}most powerful flavor.
          </Text>
        </View>

        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4A574',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(212, 165, 116, 0.85)',
  },
  illustrationArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  coffeeItemsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coffeeBag: {
    alignItems: 'center',
    marginBottom: 20,
    zIndex: 2,
  },
  bagHandle: {
    width: 40,
    height: 8,
    backgroundColor: '#8B4513',
    borderRadius: 4,
    marginBottom: -4,
  },
  bagBody: {
    width: 120,
    height: 140,
    backgroundColor: '#DEB887',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bagLogo: {
    alignItems: 'center',
  },
  bagLogoText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#8B4513',
    textAlign: 'center',
    lineHeight: 14,
  },
  cupsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    marginTop: -20,
  },
  coffeeCup: {
    alignItems: 'center',
  },
  leftCup: {
    transform: [{ rotate: '-15deg' }],
  },
  rightCup: {
    transform: [{ rotate: '15deg' }],
  },
  cupLid: {
    width: 60,
    height: 8,
    backgroundColor: '#2F2F2F',
    borderRadius: 30,
    marginBottom: -2,
  },
  cupBody: {
    width: 55,
    height: 80,
    backgroundColor: '#F5F5DC',
    borderRadius: 4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cupLogo: {
    alignItems: 'center',
  },
  cupLogoText: {
    fontSize: 8,
    fontWeight: '600',
    color: '#8B4513',
    textAlign: 'center',
    lineHeight: 10,
  },
  content: {
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingBottom: 80,
  },
  textContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
    // lineHeight: 44,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#F0F0F0',
    lineHeight: 24,
    textAlign: 'center',
  },
  getStartedButton: {
    backgroundColor: '#00582F',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#00582F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  getStartedText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});