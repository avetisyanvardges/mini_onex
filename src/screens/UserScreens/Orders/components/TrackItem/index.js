import React from 'react';
import { Image, View } from 'react-native';
import { MinusCircle, TickCircle } from 'assets/Icons';
import { Colors, Sizes } from 'assets/RootStyles';
import { images } from 'assets/Images';
import * as Animatable from 'react-native-animatable';

const TrackItem = (props) => {
  return (
    <Animatable.View
      animation="flipInY"
      useNativeDriver
      duration={props.index === 0 ? 1500 : props.index * 1500}
      style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      {props.process ? (
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            width: Sizes(25),
            height: Sizes(25),
          }}
        />
      ) : props.completed ? (
        <TickCircle color={Colors.green} />
      ) : (
        <MinusCircle color={Colors.placeholder} />
      )}
      {!props.latest && (
        <View
          style={{
            width: Sizes(45),
            height: Sizes(2),
            backgroundColor: props.completed ? Colors.green : Colors.placeholder,
            marginHorizontal: Sizes(5),
          }}
        />
      )}
    </Animatable.View>
  );
};

export default TrackItem;
