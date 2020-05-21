import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const MealItem = props => {
  const {item, onSelectMeal} = props;
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealheader}}>
            <ImageBackground
              source={{uri: item.imageUrl}}
              style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{item.duration}m</Text>
            <Text>{item.complexity.toUpperCase()}</Text>
            <Text>{item.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    color: 'white',

    textAlign: 'center',
  },
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mealheader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    height: '15%',
    alignItems: 'center',
  },
});

export default MealItem;
