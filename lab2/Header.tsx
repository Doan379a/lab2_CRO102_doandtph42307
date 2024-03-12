import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const Header = ({info, linkanh}: any) => {
  return (
    <View
      style={{
        height: 120,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}>
      {linkanh == '' ? (
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.63d31ac6257157ef079f31bb32e342df?rik=W%2bvzbTroRa8d9w&pid=ImgRaw&r=0',
          }}
          style={{height: 80, width: 100, borderRadius: 10}}
        />
      ) : (
        <Image
          source={{
            uri: linkanh,
          }}
          style={{height: 80, width: 100, borderRadius: 10}}
        />
      )}
      <View style={{marginStart: 10}}>
        <Text>Xin chào bạn</Text>
        {info == '' ? (
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            Chưa có tên
          </Text>
        ) : (
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            {info}
          </Text>
        )}
      </View>
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({});
