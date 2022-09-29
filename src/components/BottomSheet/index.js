import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import useContainer from './hook';

function BtSheet(props) {
  const { styles, snapPoints, sheetRef, theme } = useContainer();
  return (
    <GestureHandlerRootView style={styles.page}>
      <View style={styles.container}>
        <BottomSheet
          snapPoints={snapPoints}
          ref={sheetRef}
          index={1}
          enablePanDownToClose={true}
          onClose={() => props.setOpen(!props.open)}>
          {props.children}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

export default BtSheet;
