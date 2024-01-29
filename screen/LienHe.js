import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const LienHe = () => {
  return (
    <View>
      <View style={{  flexDirection: 'row', justifyContent:'space-between',padding:20 }}>
        <TouchableOpacity style={{borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 7}}>
          <Icon name='bars' size={28} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 8}}>
          <Icon name='user' size={28} color='white' />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <Text style={styles.label}>Họ Và Tên:</Text>
      <TextInput
        style={styles.khunginput}
        placeholder="Nhập Họ và Tên"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.khunginput}
        placeholder="Nhập email VD: quynh@gmail.com"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Nội Dung:</Text>
      <TextInput
        style={[styles.khunginput, styles.messageInput]}
        placeholder="Type your message"
        multiline
        numberOfLines={4}
      />

      <TouchableOpacity style={styles.bgbutton} >
        <Text style={{ padding: 8, fontSize: 17, color: '#d5dcf2' }}>Send</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default LienHe

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  khunginput: {
    borderColor: '#8bd9bc',
    borderWidth: 2,
    borderRadius: 2,
    padding: 7,
    margin: 5,
    marginHorizontal: 5,
    fontSize: 18,
  },
  messageInput: {
    height: 80,
  },
  bgbutton: {
    backgroundColor: '#718c49',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop:20
  }
});