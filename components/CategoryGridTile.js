import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedbackComponent,
} from 'react-native';

const CategoryGridTile = props => {
  const {itemData, navigation, onSelect} = props;
  return (
    <View style={styles.gridItem}>
      <TouchableNativeFeedback style={{flex: 1}} onPress={onSelect}>
        <View
          style={{
            ...styles.container,
            ...{backgroundColor: itemData.item.color},
          }}>
          <Text style={styles.title} numberOfLines={2}>
            {itemData.item.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {flex: 1, margin: 15, height: 150, borderRadius: 10},
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    elevation: 5,
    shadowRadius: 10,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'Ubuntu-Regular',
    fontSize: 22,
  },
});

export default CategoryGridTile;
