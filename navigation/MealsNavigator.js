import * as React from 'react';
import 'react-native-gesture-handler';
import {Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../constants/colors';
import CategoriesScreen from '../components/screens/CategoriesScreen';
import CategoryMealsScreen from '../components/screens/CategoryMealsScreen';
import MealDetailScreen from '../components/screens/MealDetailScreen';

const MealsStack = createStackNavigator();

function MealsNavigator() {
  return (
    <NavigationContainer>
      <MealsStack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primaryColor,
          },
          mode: 'modal',
          headerTintColor: '#FFF',
        }}>
        <MealsStack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            headerTitle: 'Meal Categories',
          }}
        />
        <MealsStack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
        />
        <MealsStack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Fav"
                color="#000"
              />
            ),
          }}
        />
      </MealsStack.Navigator>
    </NavigationContainer>
  );
}

export default MealsNavigator;
