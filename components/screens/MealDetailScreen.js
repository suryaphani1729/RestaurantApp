import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MEALS} from '../../data/dummy-data';

const MealDetailScreen = ({navigation, route}) => {
  const {mealId} = route.params;
  const selectedCategory = MEALS.find(cat => cat.id === mealId);
  navigation.setOptions({title: selectedCategory.title});
  //const selectedMeal = MEALS.filter(meal => meal.id === mealId);
  return (
    <View style={styles.screen}>
      <Text>{selectedCategory.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({screen: {flex: 1}});

export default MealDetailScreen;
