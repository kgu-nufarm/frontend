import { StyleSheet, Text, View } from 'react-native';

const SensorTable = () => {
  return (
    <View style={styles.wrapper}>
      {/* Table container */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.table_first}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>온도</Text>
          </View>

          <View style={styles.text_style}>
            <Text>19</Text>
          </View>
        </View>

        <View style={styles.table_second}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>습도</Text>
          </View>

          <View style={styles.text_style}>
            <Text>85</Text>
          </View>
        </View>

        <View style={styles.table_third}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>조도</Text>
          </View>

          <View style={styles.text_style}>
            <Text>3023</Text>
          </View>
        </View>

        <View style={styles.table_fourth}>
          {/* Table row */}
          <View
            style={[
              styles.text_style,
              {
                borderRightWidth: 2, // 왼쪽 테두리 두께
                borderRightColor: 'white', // 왼쪽 테두리 색깔
                borderStyle: 'dotted', // 왼쪽 테두리 스타일: 점선
              },
            ]}
          >
            <Text>가스</Text>
          </View>

          <View style={styles.text_style}>
            <Text>23</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    width: '90%',
    backgroundColor: '#E0E0E0',
    borderColor: '#269B00', // 테두리 색깔
    borderWidth: 2, // 테두리 두께
  },
  table_first: {
    width: '100%',
    height: 90,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    borderBottomWidth: 2, // 하단 테두리 두께
    borderBottomColor: 'white', // 하단 테두리 색깔
    borderStyle: 'dotted', // 하단 테두리 스타일: 점선
  },
  table_second: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    // backgroundColor: 'blue',
    borderBottomWidth: 2, // 하단 테두리 두께
    borderBottomColor: 'white', // 하단 테두리 색깔
    borderStyle: 'dotted', // 하단 테두리 스타일: 점선
  },
  table_third: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    // backgroundColor: 'green',
    borderBottomWidth: 2, // 하단 테두리 두께
    borderBottomColor: 'white', // 하단 테두리 색깔
    borderStyle: 'dotted', // 하단 테두리 스타일: 점선
  },
  table_fourth: {
    flexDirection: 'row',
    width: '100%',
    height: 90,
    // backgroundColor: 'skyblue',
  },
  text_style: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '100%',
  },
});

export default SensorTable;
