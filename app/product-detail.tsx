import { products } from '@/data/mockData';
import { router, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, Heart } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function ProductDetailScreen() {
  const { productId } = useLocalSearchParams();
  const [selectedSize, setSelectedSize] = useState<'Small' | 'Medium' | 'Large'>('Small');
  const [selectedSugar, setSelectedSugar] = useState<'No Sugar' | 'Low' | 'Medium'>('No Sugar');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const product = products.find(p => p.id.toString() === productId); // Ensure correct comparison

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFoundText}>Product not found</Text>
      </SafeAreaView>
    );
  }

  const handleGoBack = () => {
    router.back();
  };

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      product: product.name,
      size: selectedSize,
      sugarLevel: selectedSugar,
    });
  };

  const sizeOptions = ['Small', 'Medium', 'Large'] as const;
  const sugarOptions = ['No Sugar', 'Low', 'Medium'] as const;

  const MAX_WORDS = 24;
  const descriptionWords = product.description.split(' ');
  const shouldTruncate = descriptionWords.length > MAX_WORDS;
  const displayedDescription = isExpanded
    ? product.description
    : descriptionWords.slice(0, MAX_WORDS).join(' ') + (shouldTruncate ? '...' : '');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >

        <View style={styles.imageContainer}>
          <Image source={product.image} style={styles.productImage} />
          <TouchableOpacity style={styles.backButtonOverlay} onPress={handleGoBack}>
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>

          <View style={styles.textOverlay}>
            <Text style={styles.productTitleOverlay}>{product.name}</Text>
            <Text style={styles.productCategoryOverlay}>With Sugar</Text>
          </View>

          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Heart
              size={24}
              color={isFavorite ? '#FF6B6B' : '#999'}
              fill={isFavorite ? '#FF6B6B' : 'transparent'}
            />
          </TouchableOpacity>

          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>★ {product.rating}</Text>
          </View>
        </View>

        <View style={styles.content}>

          <View style={styles.optionSection}>
            <Text style={styles.optionTitle}>Cup Size</Text>
            <View style={styles.optionRow}>
              {sizeOptions.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.optionButton,
                    selectedSize === size && styles.selectedOptionButton,
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text
                    style={[
                      styles.optionButtonText,
                      selectedSize === size && styles.selectedOptionButtonText,
                    ]}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.optionSection}>
            <Text style={styles.optionTitle}>Level Sugar</Text>
            <View style={styles.optionRow}>
              {sugarOptions.map((sugar) => (
                <TouchableOpacity
                  key={sugar}
                  style={[
                    styles.optionButton,
                    selectedSugar === sugar && styles.selectedOptionButton,
                  ]}
                  onPress={() => setSelectedSugar(sugar)}
                >
                  <Text
                    style={[
                      styles.optionButtonText,
                      selectedSugar === sugar && styles.selectedOptionButtonText,
                    ]}
                  >
                    {sugar}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.aboutSection}>
            <Text style={styles.aboutTitle}>About</Text>
            <Text style={styles.aboutText}>{displayedDescription}</Text>
            {shouldTruncate && (
              <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
                <Text style={styles.readMore}>
                  {isExpanded ? 'Read Less' : 'Read More'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
          <Text style={styles.priceText}>|</Text>
          <Text style={styles.priceText}>Rp {product.price.toLocaleString()}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  notFoundText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
  },
  scrollContainer: {
    paddingBottom: 140,
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  backButtonOverlay: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
  },
  favoriteButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
  },
  ratingBadge: {
    position: 'absolute',
    top: 240,
    right: '5%',
    backgroundColor: '#C1925B',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 30,
  },
  ratingText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#fff',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    alignItems: 'flex-start',
  },
  productTitleOverlay: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  productCategoryOverlay: {
    fontSize: 16,
    color: '#ddd',
    marginTop: 4,
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  optionSection: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  optionRow: {
    flexDirection: 'row',
    gap: 10,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOptionButton: {
    backgroundColor: '#00512C',
    borderColor: '#07824aff',
  },
  optionButtonText: {
    color: '#000',
    fontWeight: '500',
  },
  selectedOptionButtonText: {
    color: '#fff',
  },
  aboutSection: {
    marginBottom: 30,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
  },
  readMore: {
    marginTop: 6,
    color: '#00512C',
    fontWeight: '500',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 16,
    elevation: 4,

  },
  addToCartButton: {
    backgroundColor: '#00512C',
    borderRadius: 30,
    paddingVertical: 22,
    paddingHorizontal: 32,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  priceText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

