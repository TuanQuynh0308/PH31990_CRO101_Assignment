import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const GioHang = () => {
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
    </View>
  )
}

export default GioHang

const styles = StyleSheet.create({})