import ProductCard from '@/components/ProductCard';
import { products } from '@/data/mockData';
import { Product } from '@/types';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function FavoritesScreen() {
  const [favoriteProducts, setFavoriteProducts] = useState<string[]>(['2', '5']); // Mock some favorites

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

  const favoriteProductsList = products
    .filter(product => favoriteProducts.includes(product.id))
    .map(product => ({
      ...product,
      isFavorite: true,
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
      <View style={styles.header}>
        <Text style={styles.title}>Favorites</Text>
      </View>
      
      {favoriteProductsList.length > 0 ? (
        <FlatList
          data={favoriteProductsList}
          renderItem={renderProductCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No Favorites Yet</Text>
          <Text style={styles.emptySubtitle}>
            Start adding your favorite coffee to see them here
          </Text>
        </View>
      )}
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
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2F2F2F',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2F2F2F',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
  },
});