import React, {useState, useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const Footer = ({info, gia, ketqua, doimau, linkanh}: any) => {
  const [doimauall, setdoimauall] = useState(false);
  const [count, setcount] = useState(1);
  useEffect(() => {
    setdoimauall(doimau); // Cập nhật giá trị doimauall khi prop doimau thay đổi
  }, [doimau]);
  const Cong = () => {
    setcount(count + 1);
  };
  const Tru = () => {
    if (count > 0) {
      setcount(count - 1);
    } else {
      setcount(count);
      ToastAndroid.show('Số lượng không thể nhỏ hơn 0', ToastAndroid.SHORT);
    }
  };
  const maudoi = doimauall ? '#ffecb3' : 'black';
  return (
    <View
      style={{
        backgroundColor: doimauall ? '#40bf80' : '#dd99ff',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: 100,
        borderRadius: 10,
      }}>
      {linkanh == '' ? (
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.63d31ac6257157ef079f31bb32e342df?rik=W%2bvzbTroRa8d9w&pid=ImgRaw&r=0',
          }}
          style={{height: 70, width: 70, borderRadius: 50}}
        />
      ) : (
        <Image
          source={{
            uri: linkanh,
          }}
          style={{height: 70, width: 70, borderRadius: 50}}
        />
      )}
      <Text style={{color: maudoi}}>Tên: {info}</Text>
      <Text style={{color: maudoi}}>
        {' '}
        {'|   '}Giá: {gia}
      </Text>
      <Text style={{color: maudoi}}>{'|   '}Số lượng:</Text>
      <View
        style={{
          flexDirection: 'row',
          borderWidth: 1,
          width: 100,
          borderColor: maudoi,
        }}>
        <TouchableOpacity
          onPress={Cong}
          style={{
            borderEndWidth: 0.5,
            borderColor: maudoi,
            flex: 1,
          }}>
          <Text style={{textAlign: 'center', color: maudoi, fontSize: 15}}>
            +
          </Text>
        </TouchableOpacity>
        <Text
          style={{textAlign: 'center', color: maudoi, flex: 2, fontSize: 15}}>
          {count}
        </Text>
        <TouchableOpacity
          onPress={Tru}
          style={{
            borderStartWidth: 0.5,
            borderColor: maudoi,
            flex: 1,
          }}>
          <Text style={{textAlign: 'center', color: maudoi, fontSize: 15}}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({});
