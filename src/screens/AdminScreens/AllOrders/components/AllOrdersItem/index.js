import React, { useState } from 'react';
import { Alert, FlatList, Image, TouchableOpacity, View } from 'react-native';
import { Colors, Sizes } from 'assets/RootStyles';
import * as Animatable from 'react-native-animatable';
import { CustomText } from 'components';
import { orderStatus } from 'constants/orders';
import TrackItem from 'screens/UserScreens/Orders/components/TrackItem';
import moment from 'moment';
import { Styles } from './style';
import { useSelector } from 'react-redux';
import { ArrowBottom } from 'assets/Icons/ArrowBottom';
import StatusModal from 'screens/AdminScreens/AllOrders/components/Modal';
import dispatch from 'helper/dispatch/dispatch';
import { CANCEL_ORDER } from 'store/actions/types/orderTypes';

const AllOrdersItem = (props) => {
  const { theme } = useSelector(({ themes }) => themes);
  const [modalVisible, setModalVisible] = useState(false);
  const orderStatusArr = ['Registered', 'Received in warehouse', 'On the way', 'In Armenia'];
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
      _id,
    },
    index,
  } = props;
  const styles = Styles(theme);
  return (
    <Animatable.View
      animation="fadeInDown"
      duration={index > 5 ? 5 * 200 : index === 0 ? 600 : index * 400}
      useNativeDriver
      style={styles.container}>
      <StatusModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        status={status}
        orderStatusArr={orderStatusArr}
        id={_id}
        theme={theme}
      />
      <View>
        <View style={styles.id_container}>
          <CustomText children={`ID ${trackingCode}`} globalStyle={styles.tracking_code} />
          <View style={styles.user_container}>
            <Image
              source={require('../../../../../assets/Images/user.png')}
              style={styles.user_image}
            />
            <CustomText children={'Name Surname'} globalStyle={styles.user_name} />
          </View>
        </View>
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

          <View style={styles.button_container}>
            <TouchableOpacity style={styles.change_button} onPress={() => setModalVisible(true)}>
              <CustomText
                children={orderStatusArr[status]}
                globalStyle={[
                  styles.button_txt,
                  {
                    marginRight: Sizes(5),
                  },
                ]}
              />
              <ArrowBottom width={Sizes(18)} height={Sizes(18)} color={Colors.green} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancel_button}
              onPress={() => {
                Alert.alert(`Are you sure to cancel an order ID ${trackingCode}?`, '', [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  { text: 'Yes', onPress: () => dispatch(CANCEL_ORDER, _id) },
                ]);
              }}>
              <CustomText children={'Cancel order'} globalStyle={styles.cancel_button_txt} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animatable.View>
  );
};

export default AllOrdersItem;
