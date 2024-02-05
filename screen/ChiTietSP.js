import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const ChiTietSP = ({ route }) => {
  const navigation= useNavigation();
  const isFocused = useIsFocused();
  const { item } = route.params;
  const priceindex = item.prices[1]
  const [isPressed, setIsPressed] = useState(false);
  const [isFavourite, setIsFavourite] = useState(item.favourite);
  const handlePress = async () => {
    try {
      // Gửi yêu cầu cập nhật đến API
      const response = await fetch(`http://192.168.1.5:3000/products/${item.id}`, {
        method: 'PATCH', // hoặc 'POST' tùy thuộc vào API của bạn
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          favourite: !isFavourite,
        }),
      });

      if (response.ok) {
        // Cập nhật trạng thái "favourite" trong ứng dụng
        setIsFavourite(!isFavourite);
      } else {
        console.error('Failed to update favourite status');
      }
    } catch (error) {
      console.error('Error updating favourite status:', error);
    }
    setIsPressed(!isPressed);
  };
  return (
    
    <View style={{ flex: 1 }}>

      <View style={{ flex: 7 }}>
        
        <ImageBackground source={{ uri: item.imagelink_square }} style={{ width: '100%', height: '100%' }} />
        
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20,position:'absolute',top:0,width:'100%' }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 7 }}>
          <Icon name='arrow-left' size={28} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5 }} onPress={handlePress}>
          
          <Icon name='heart' size={28} color={isPressed || item.favourite ? '#bf3b84':'white'} />
        </TouchableOpacity>
      </View>
        <View style={{
          width: '100%',
          height: 150,
          backgroundColor: 'rgba(113, 140, 73, 0.5)',
          position: 'absolute',
          bottom: 0,
          borderTopRightRadius: 30,
          borderTopStartRadius: 30,
          flexDirection: 'row'
        }}>
          <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ color: 'white', fontSize: 27, fontWeight: '600' }}>{item.name}</Text>
            <Text style={{ color: 'white', fontSize: 15 }}>{item.special_ingredient}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
              <Icon name='star' size={20} color={'yellow'} />
              <Text style={{ color: 'white', fontSize: 17, fontWeight: '600' }}> {item.average_rating}</Text>
              <Text style={{ color: 'white', fontSize: 12 }}> ({item.ratings_count})</Text>
            </View>

          </View>
          <View style={{ flex: 1 }}>

          </View>

        </View>

      </View>
      <View style={{ flex: 4, backgroundColor: '#718c49', padding: 20 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Mô tả</Text>
        <Text numberOfLines={3} ellipsizeMode="tail" style={{ color: 'white', fontSize: 15, marginTop: 10 }}>{item.description}</Text>
        <Text style={{ color: 'white', fontSize: 20, marginTop: 20, marginBottom:10 }}>Size</Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{flex:1, borderRadius:10, backgroundColor:'#6F6F6E', padding:10,marginRight:10, justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'white'}}>Bình thường</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1, borderRadius:10, backgroundColor:'#6F6F6E', padding:10,justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white'}}>Lớn</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:'row',marginTop:45}}>
          <View style={{flex:1}}>
            <Text style={{fontSize:13,color:'white'}}>   Giá</Text>
            <Text style={{ fontSize: 18,color:'white', fontWeight:'700' }}><Text style={{ color: '#bf3b84' }}>$</Text> {priceindex.price}</Text>
          </View>
          <TouchableOpacity style={{flex:2, borderRadius:10, backgroundColor:'#bf3b84', padding:15,justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white'}}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default ChiTietSP

const styles = StyleSheet.create({})