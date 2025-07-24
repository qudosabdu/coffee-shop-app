import { Product } from '@/types';
import { AssetsImage } from '@/utils/image';
import { Heart, Plus } from 'lucide-react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ProductCardProps {
  product: Product;
  onPress: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: string) => void;
  showIcons?: boolean;
}

console.log('ProductCard', AssetsImage.coffee2, AssetsImage.scoffee1, AssetsImage.confee1);

export default function ProductCard({
  product,
  onPress,
  onAddToCart,
  onToggleFavorite,
  showIcons
}: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(product)}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        

      </View>

      <View style={styles.content}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productCategory}>With Sugar</Text>
        {showIcons && (
          <TouchableOpacity
            style={styles.favoriteButton}
            onPress={() => onToggleFavorite(product.id)}
          >
            <Heart
              size={16}
              color={product.isFavorite ? '#FF6B6B' : '#999'}
              fill={product.isFavorite ? '#FF6B6B' : 'transparent'}
            />
          </TouchableOpacity>
        )}
        <View style={styles.footer}>
          <Text style={styles.price}>Rp {product.price.toLocaleString()}</Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => onAddToCart(product)}
          >
            <Plus size={16} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 160,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginRight: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,

  },
  imageContainer: {
    position: 'relative',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
    padding: 4,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    borderBlockColor: '#E0E0E0',
    borderBottomWidth: 1,
    borderRadius: 16,

  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',

  },
  ratingBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2F2F2F',
    marginBottom: 2,
  },
  productCategory: {
    fontSize: 12,
    color: '#999',
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#00582F',
  },
  addButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#00582F',
    justifyContent: 'center',
    alignItems: 'center',
  },
});