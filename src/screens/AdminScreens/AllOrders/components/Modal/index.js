import React, { useState } from 'react';
import { Alert, FlatList, Modal, TouchableOpacity, View } from 'react-native';
import { Styles } from './style';
import { CustomText, RadioButton } from 'components';
import { Colors, Sizes } from 'assets/RootStyles';
import CloseIcon from 'assets/Icons/Close';
import dispatch from 'helper/dispatch/dispatch';
import { CHANGE_ORDER_STATUS } from 'store/actions/types/orderTypes';

function StatusModal({ modalVisible, setModalVisible, status, orderStatusArr, id, theme }) {
  const styles = Styles(theme);
  const [changedStatus, setChanged] = useState(status);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.close_icon}>
            <CloseIcon color={Colors.silver} />
          </TouchableOpacity>
          <CustomText children={'Order status '} globalStyle={styles.title} />
          <FlatList
            data={orderStatusArr}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity onPress={() => setChanged(index)} style={styles.statuses}>
                  <RadioButton size={Sizes(18)} active={changedStatus === index} />
                  <CustomText children={item} globalStyle={styles.statuses_text} />
                </TouchableOpacity>
              );
            }}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              dispatch(CHANGE_ORDER_STATUS, { _id: id, status: changedStatus });
              setModalVisible(!modalVisible);
            }}>
            <CustomText globalStyle={styles.textStyle} children={'Confirm'} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default StatusModal;
