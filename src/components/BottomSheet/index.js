import React from 'react';
import { View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import useContainer from './hook';
import { Sizes } from 'assets/RootStyles';

function BtSheet(props) {
  const { styles, snapPoints, sheetRef, theme } = useContainer();
  return (
    <View style={styles.container}>
      <BottomSheet
        snapPoints={snapPoints}
        ref={sheetRef}
        index={1}
        enablePanDownToClose={true}
        onClose={() => props.setOpen(!props.open)}
        enableContentPanningGesture
        handleStyle={{
          backgroundColor: theme?.PRIMARY_BACKGROUND_COLOR,
          borderTopLeftRadius: Sizes(13),
          borderTopRightRadius: Sizes(13),
        }}
        handleIndicatorStyle={{
          backgroundColor: theme?.PRIMARY_TEXT_COLOR,
        }}>
        {props.children}
      </BottomSheet>
    </View>
  );
}

export default BtSheet;
