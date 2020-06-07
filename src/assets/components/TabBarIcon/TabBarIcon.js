import React from 'react';
import { Image, View } from 'react-native';
import styles from './TabBarIcon.styles';
import HomeIcon from './assets/icons/home.png';
import ActiveHomeIcon from './assets/icons/home-active.png';
// import ActivePeopleIcon from './assets/icons/people.png';
// import PeopleIcon from './assets/icons/people-active.png';
import ProfileIcon from './assets/icons/account-3.png';
import ActiveProfileIcon from './assets/icons/account.png';
import ContentIcon from './assets/icons/content.png';
import ActiveContentIcon from './assets/icons/content-active.png';

import Badge from './components/Badge';

const iconEnum = {
  Home: (active) => (active ? ActiveHomeIcon : HomeIcon),
  Content: (active) => (active ? ActiveContentIcon : ContentIcon),
  // Community: (active) => (active ? ActivePeopleIcon : PeopleIcon),
  Profile: (active) => (active ? ActiveProfileIcon : ProfileIcon),
};

const TabBarIcon = ({ navigation, focused, hasAlert }) => {
  const icon = iconEnum[navigation.state.routeName](focused);

  return (
    <View>
      {hasAlert && <Badge />}
      <Image
        source={icon}
        style={styles.icon}
        resizeMode="contain"
      />
    </View>
  );
};

export default TabBarIcon;
