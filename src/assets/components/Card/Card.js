import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import styles from './Card.styles';
import { CARD } from './CardEnum';

const Card = ({ name, onPress, style = {} }) => (
  <View style={{ ...styles.container, ...style }}>
    <TouchableOpacity onPress={() => onPress(name)}>
      <View style={[styles.alignCenter, { marginBottom: 13 }]}>
        <Image
          source={CARD[name].icon}
          style={styles.icon}
        />
      </View>
      <View style={styles.alignCenter}>
        <Text style={styles.title}>
          {CARD[name].title}
        </Text>
      </View>
    </TouchableOpacity>
  </View>
);
export default Card;
