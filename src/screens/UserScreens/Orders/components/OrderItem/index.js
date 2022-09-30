import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';
import * as Animatable from 'react-native-animatable';
import { CustomText } from 'components';
import { orderStatus } from 'constants/orders';
import TrackItem from 'screens/UserScreens/Orders/components/TrackItem';
import moment from 'moment';

const OrderItem = (props) => {
  const {
    data: {
      country,
      currency,
      description,
      name,
      trackingCode,
      registeredDate,
      receivedDate,
      status,
    },
    index,
  } = props;
  return (
    <Animatable.View
      animation="fadeInDown"
      duration={index > 5 ? 5 * 200 : index === 0 ? 600 : index * 400}
      style={{
        flex: 1,
        height: Sizes(150),
        backgroundColor: Colors.white,
        marginHorizontal: Sizes(10),
        borderRadius: Sizes(12),
        padding: Sizes(10),
        ...Shadow,
      }}>
      <View>
        <CustomText
          children={`ID ${trackingCode}`}
          globalStyle={{ color: Colors.green, fontWeight: 'bold' }}
        />
        <View
          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <CustomText children={name} />
          <CustomText
            children={`${currency} ֏`}
            globalStyle={{ color: Colors.green, fontWeight: 'bold' }}
          />
        </View>
        <CustomText
          children={description}
          ellipsizeMode="tail"
          numberOfLines={1}
          globalStyle={{ marginVertical: Sizes(5) }}
        />
        <View style={{ alignItems: 'center', marginTop: Sizes(15) }}>
          <FlatList
            horizontal
            data={Object.keys(orderStatus)}
            renderItem={({ index }) => {
              return (
                <TrackItem
                  latest={Object.keys(orderStatus).length - 1 === index}
                  completed={status > index}
                  process={status === index}
                  index={index}
                />
              );
            }}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: Sizes(5),
            }}>
            <CustomText
              children={moment(registeredDate).format('DD.MM.YYYY')}
              globalStyle={{ marginRight: Sizes(50) }}
            />
            <CustomText
              children={moment(receivedDate).format('DD.MM.YYYY')}
              globalStyle={{ marginLeft: Sizes(50) }}
            />
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default OrderItem;
