import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Colors, Shadow, Sizes } from 'assets/RootStyles';
import * as Animatable from 'react-native-animatable';
import { CustomText } from 'components';
import { orderStatus } from 'constants/orders';
import TrackItem from 'screens/UserScreens/Orders/components/TrackItem';
import moment from 'moment';
import { Styles } from './style';
import { useSelector } from 'react-redux';

const OrderItem = (props) => {
  const { theme } = useSelector(({ themes }) => themes);

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
  const styles = Styles(theme);
  return (
    <Animatable.View
      animation="fadeInDown"
      duration={index > 5 ? 5 * 200 : index === 0 ? 600 : index * 400}
      style={styles.container}>
      <View>
        <CustomText children={`ID ${trackingCode}`} globalStyle={styles.tracking_code} />
        <View style={styles.name_container}>
          <CustomText children={name} globalStyle={styles.name} />
          <CustomText children={`${currency} ֏`} globalStyle={styles.currency} />
        </View>
        <CustomText
          children={description}
          ellipsizeMode="tail"
          numberOfLines={1}
          globalStyle={styles.description}
        />
        <View style={styles.content}>
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
          <View style={styles.date_container}>
            <CustomText
              children={`${country}(${moment(registeredDate).format('DD.MM')})`}
              globalStyle={styles.registered_date}
            />
            <CustomText
              children={`Armenia(${moment(receivedDate).format('DD.MM')})`}
              globalStyle={styles.received_date}
            />
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default OrderItem;
