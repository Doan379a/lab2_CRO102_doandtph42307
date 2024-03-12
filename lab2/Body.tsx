import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Body = ({onclick, onphepcong, oncheckall, ondoimau}: any) => {
  const [inputValue, setInputValue] = useState('');
  const [gia, setgia] = useState('');
  const [linkanh, setlinkanh] = useState('');
  const [count, setcount] = useState('');
  const [checkall, setcheckall] = useState(false);
  const [doimau, setdoimau] = useState(true);
  const handleSubmit = () => {
    onclick({inputValue, gia, linkanh});
    setInputValue('');
    setlinkanh('');
    setgia('');
  };
  const handdoimau = () => {
    ondoimau({doimau});
    setdoimau(!doimau);
  };
  const handcong = () => {
    const newcount = count + 1;
    onphepcong({newcount});
    setcount(newcount);
  };
  return (
    <View
      style={{
        margin: 10,
        borderWidth: 0.4,
        paddingVertical: 30,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#e6ffff',
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
        Tên:
      </Text>
      <TextInput
        value={inputValue}
        onChangeText={text => setInputValue(text)}
        placeholder="Nhập tên "
        style={styles.textinput}
      />
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        Địa chỉ url ảnh:
      </Text>
      <TextInput
        value={linkanh}
        onChangeText={text => setlinkanh(text)}
        style={styles.textinput}
        placeholder="Nhập avatar"
      />
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
        Giá:
      </Text>
      <TextInput
        value={gia}
        onChangeText={text => setgia(text)}
        style={styles.textinput}
        placeholder="Nhập Giá"
      />
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
          padding: 15,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#00b3b3',
          margin: 20,
        }}>
        <Text style={{color: 'white'}}>Cập nhật thông tin</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handdoimau}
        style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: doimau ? '#dd99ff' : '#40bf80',
          marginHorizontal: 70,
        }}>
        <Text style={{color: 'white'}}>Đổi màu footer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Body;
const styles = StyleSheet.create({
  textinput: {borderBottomWidth: 1, marginBottom: 10},
});
