import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CATEGORIES, MEALS} from '../../data/dummy-data';
import MealItem from '../MealItem';

const CategoryMealsScreen = ({route, navigation}) => {
  const renderMealItem = itemData => {
    return (
      <MealItem
        item={itemData.item}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', {mealId: itemData.item.id});
        }}
      />
    );
  };

  const {categoryId} = route.params;
  const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);
  navigation.setOptions({title: selectedCategory.title});
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(categoryId) > 0,
  );
  console.log;

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({list: {padding: 15}});

export default CategoryMealsScreen;
