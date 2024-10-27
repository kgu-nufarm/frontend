import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserPlant from './UserPlant';
import Margin from './Margin';
import UserPlant_2 from './UserPlant_2';

const UserPlantList = ({ navigation, searchPlant }) => {
  return (
    <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View>
        <UserPlant navigation={navigation} />
        <Margin height={20} />

        {searchPlant !== '상추' && (
          <View>
            <UserPlant_2 navigation={navigation} />
            <Margin height={20} />
          </View>
        )}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 150,
    // backgroundColor: 'yellow',
  },
});

export default UserPlantList;
