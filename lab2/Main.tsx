import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import {StyleSheet, View} from 'react-native';

const Main1 = () => {
  const [footerInfo, setFooterInfo] = useState('');
  const [footergia, setfootergia] = useState('');
  const [footercong, setfootercong] = useState(0);
  const [headerlinkanh, setheaderlinkanh] = useState('');
  const [footerdoimau, setfooterdoimau] = useState(false);
  const [footercheckall, setfootercheckall] = useState(false);
  const handleSubmit = ({inputValue, gia, linkanh}: any) => {
    setFooterInfo(inputValue);
    setfootergia(gia);
    setheaderlinkanh(linkanh);
  };
  const handcheckall = ({checkall}: any) => {
    setfootercheckall(checkall);
  };
  const handdoimau = ({doimau}: any) => {
    setfooterdoimau(doimau);
  };
  const handcong = ({newcount}: any) => {
    setfootercong(newcount);
  };
  return (
    <View
      style={{flex: 1, backgroundColor: '#f0f5f5', justifyContent: 'center'}}>
      <Header info={footerInfo} linkanh={headerlinkanh} />
      <Body
        onclick={handleSubmit}
        onphepcong={handcong}
        ondoimau={handdoimau}
      />
      <Footer
        info={footerInfo}
        gia={footergia}
        ketqua={footercong}
        linkanh={headerlinkanh}
        doimau={footerdoimau}
      />
    </View>
  );
};

export default Main1;
const styles = StyleSheet.create({});
