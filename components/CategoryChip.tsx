import { Category } from '@/types';
import { Coffee } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CategoryChipProps {
  category: Category;
  onPress: (id: string) => void;
}

export default function CategoryChip({ category, onPress }: CategoryChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, category.isActive && styles.activeChip]}
      onPress={() => onPress(category.id)}
    >
      <Coffee size={22} color={category.isActive ? '#FFFFFF' : '#00582F'} style={styles.icon} />
      <Text style={[styles.chipText, category.isActive && styles.activeChipText]}>
        {category.name}
      </Text>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderBottomRightRadius: 20,
    marginRight: 12,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    boxShadow: '0px 2px 4px rgba(0, 15, 16, 0.5)',
  },
  activeChip: {
    backgroundColor: '#00582F',
    borderColor: '#00582F',

  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  activeChipText: {
    color: '#FFFFFF',
  },
  icon: {
  marginRight: 8,
},
});