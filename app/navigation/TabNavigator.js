import React from 'react';
import {
  Image,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import {Home, Rewards} from '../screens';
import {COLORS, SIZES, icons} from '../constants';
import Svg, {Path} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const CustomTabBar = props => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 30,
          backgroundColor: COLORS.gray3,
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};

const CustomTabBarButton = ({containerStyle, isFloat, children, onPress}) => {
  if (isFloat) {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={90}
          height={61}
          viewBox="0 0 90 61">
          <Path
            d="M0 0a38.742 38.742 0 0113 7c5.313 4.4 6.7 8.593 12 13 5.993 4.98 12.987 8 20 8s14.007-3.02 20-8c5.3-4.408 6.687-8.6 12-13a38.742 38.742 0 0113-7v61H0V0z"
            fill="#4d4d4d"
            fillRule="evenodd"
          />
        </Svg>
        <TouchableOpacity
          onPress={onPress}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: COLORS.primary,
            position: 'absolute',
            top: -40,
          }}>
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={{
            flex: 1,
            height: 60,
            backgroundColor: COLORS.gray3,
            ...containerStyle,
          }}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
};

const tabBarIcon = {
  Home: icons.home,
  Rewards: icons.bubbleTea,
  AddOrder: icons.add,
  Favourite: icons.heart,
  Profile: icons.profile,
};

const PlusButton = ({iconName}) => {
  return (
    <Image
      source={iconName}
      resizeMode="contain"
      style={{
        width: 35,
        height: 35,
        tintColor: COLORS.white,
      }}
    />
  );
};

const screenOptions = ({route}) => {
  const iconName = tabBarIcon[route.name];

  let content = {
    tabBarIcon: ({focused}) => {
      const tintColor = focused ? COLORS.primary : COLORS.black;
      return (
        <Image
          source={iconName}
          resizeMode="contain"
          style={{
            width: 35,
            height: 35,
            tintColor,
          }}
        />
      );
    },
  };

  if (route.name === 'AddOrder') {
    content = {
      tabBarIcon: () => {
        return <PlusButton iconName={iconName} />;
      },
    };
  }

  return {
    ...content,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      elevation: 0,
      backgroundColor: 'transparent',
      borderTopColor: 'transparent',
      height: Platform.OS == 'android' ? 60 : 80,
    },
  };
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBar={props => <CustomTabBar props={props} />}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                borderTopLeftRadius: SIZES.radius * 3,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton {...props} containerStyle={{marginRight: 6}} />
          ),
        }}
      />
      <Tab.Screen
        name="AddOrder"
        component={Home}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton {...props} isFloat={true} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Home}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton {...props} containerStyle={{marginLeft: 6}} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarButton: props => (
            <CustomTabBarButton
              {...props}
              containerStyle={{
                borderTopRightRadius: SIZES.radius * 3,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
