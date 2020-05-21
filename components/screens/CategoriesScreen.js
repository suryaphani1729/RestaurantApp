import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CategoryGridTile from '../CategoryGridTile';

import {CATEGORIES} from '../../data/dummy-data';
import colors from '../../constants/colors';

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = itemData => {
    return (
      <CategoryGridTile
        itemData={itemData}
        onSelect={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
