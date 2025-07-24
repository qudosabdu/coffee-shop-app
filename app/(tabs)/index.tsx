import CategoryChip from '@/components/CategoryChip';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';
import { categories as initialCategories, products } from '@/data/mockData';
import { Product } from '@/types';
import { AssetsImage } from '@/utils/image';
import { router } from 'expo-router';
import { Bell, MapPin } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const [categories, setCategories] = useState(initialCategories);
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>([]);

  const handleCategoryPress = (id: string) => {
    setCategories(prev =>
      prev.map(cat => ({ ...cat, isActive: cat.id === id }))
    );
  };

  const handleProductPress = (product: Product) => {
    router.push({
      pathname: '/product-detail',
      params: { productId: product.id },
    });
  };

  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product.name);
  };

  const handleToggleFavorite = (productId: string) => {
    setFavoriteProducts(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products.map(product => ({
    ...product,
    isFavorite: favoriteProducts.includes(product.id),
  }));

  const renderProductCard = ({ item }: { item: Product }) => (
    <ProductCard
      product={item}
      onPress={handleProductPress}
      onAddToCart={handleAddToCart}
      onToggleFavorite={handleToggleFavorite}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.profileSection}>
            <Image
              source={AssetsImage.profile}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.centerSection}>
            <MapPin size={14} color="brown" style={{ marginRight: 6 }} />
            <Text style={styles.location}>Jakarta, Indonesia</Text>
          </View>
          <View style={styles.notificationButton}>
            <Bell size={24} color="#00582F" />
          </View>
        </View>
        <View style={styles.profileSection}>
          <Text style={styles.greeting}>Good morning, Yudi</Text>
        </View>
        <SearchBar
          placeholder="Search for coffee..."

          value={searchText}
          onChangeText={setSearchText}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {categories.map((category) => (
              <CategoryChip
                key={category.id}
                category={category}
                onPress={handleCategoryPress}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoriesContainer}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onPress={handleProductPress}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Special Offer</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.specialOffersContainer}
          >
            {filteredProducts.slice(0, 3).map((product) => (
              <ProductCard
                key={`special-${product.id}`}
                product={product}
                onPress={handleProductPress}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
                showIcons={true}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 15,
  },
  profileSection: {
    marginRight: 12,
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderBlockColor: '#E3E5E8',
  },
  centerSection: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2F2F',
    // marginTop: 2,
    marginBottom: 15,

  },
  location: {
    fontSize: 14,
    color: '#999',
    marginBottom: 2,
    fontWeight: '500',
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00582F',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    paddingBottom: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  specialOffersContainer: {
    flexDirection: 'row',
  },
});