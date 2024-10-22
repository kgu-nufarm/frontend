import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserPlant from './UserPlant';
import Margin from './Margin';

const UserPlantList = (props) => {
  const plantList = [1, 2, 3, 4, 5];
  return (
    <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View>
        {plantList.map((index) => (
          <View key={index}>
            <UserPlant navigation={props.navigation} />
            <Margin height={20} />
          </View>
        ))}
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
