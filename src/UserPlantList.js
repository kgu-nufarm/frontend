import React from 'react';
import { StyleSheet, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import UserPlant from './UserPlant';

const UserPlantList = (props) => {
  return (
    <KeyboardAwareScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View>
        <UserPlant navigation={props.navigation} />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 150,
    backgroundColor: 'yellow',
  },
});

export default UserPlantList;
