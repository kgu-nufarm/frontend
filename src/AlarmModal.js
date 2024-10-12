import { Text, View, StyleSheet, Modal, Pressable, useNavigation } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const AlarmModal = (props) => {
  return (
    <View>
      <Modal animationType="slide" visible={props.modal} transparent={true}>
        <View style={styles.modalView}>
          <Pressable>
            <Text style={styles.modalTextStyle}>상추 물주기를 완료했어요. (클릭 아이콘)</Text>
          </Pressable>
        </View>
        <Pressable style={{ alignItems: 'center' }} onPress={props.onPressModalClose}>
          <AntDesign name="closecircle" size={24} color="#269B00" />
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#17191c',
  },
  /**
   * 모달 화면 영역
   */
  modalView: {
    marginTop: 230,
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTextStyle: {
    color: '#17191c',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
});
export default AlarmModal;
