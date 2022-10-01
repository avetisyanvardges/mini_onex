import React from 'react';
import { Image, View } from 'react-native';
import { MinusCircle, TickCircle } from 'assets/Icons';
import { Colors, Sizes } from 'assets/RootStyles';
import { images } from 'assets/Images';
import * as Animatable from 'react-native-animatable';
import { Styles } from './style';

const TrackItem = (props) => {
  const styles = Styles();
  return (
    <Animatable.View
      animation="flipInY"
      useNativeDriver
      duration={props.index === 0 ? 1500 : props.index * 1500}
      style={styles.container}>
      {props.process ? (
        <Image source={images.logo} resizeMode="contain" style={styles.image} />
      ) : props.completed ? (
        <TickCircle color={Colors.green} />
      ) : (
        <MinusCircle color={Colors.placeholder} />
      )}
      {!props.latest && (
        <View
          style={[
            styles.track_container,
            { backgroundColor: props.completed ? Colors.green : Colors.placeholder },
          ]}
        />
      )}
    </Animatable.View>
  );
};

export default TrackItem;
