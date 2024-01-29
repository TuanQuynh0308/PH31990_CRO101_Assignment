import { FlatList, Image, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const YeuThich = () => {
  const [foodslove, setFoods] = useState([
    {
      id:1,
      name: 'Bánh Mì',
      stutus: 'Opening soon',
      price: 555,
      url: 'https://banhmimahai.vn/wp-content/uploads/2020/02/thumb.jpg.webp'
    },
    {
      id:2,
      name: 'Gỏi Cuốn',
      stutus: 'nnn',
      price: 444,
      url: 'https://i.pinimg.com/736x/c3/03/3d/c3033de2d1df36a393fbd52da537fe77.jpg'
    },
    {
      id:3,
      name: 'Bánh Cuốn',
      stutus: 'nnn',
      price: 444,
      url: 'https://static.vinwonders.com/production/banh-cuon-da-lat-1.jpg'
    },
    {
      id:4,
      name: 'Bánh Xèo',
      stutus: 'nnn',
      price: 444,
      url: 'https://daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
    },
    {
      id:5,
      name: 'Phở',
      stutus: 'nnn',
      price: 444,
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/1_to_pho_bo_bao_nhieu_calo_9_762e002737.jpg'
    },
    {
      id:6,
      name: 'Bánh Chưng',
      stutus: 'nnn',
      price: 444,
      url: 'https://www.cet.edu.vn/wp-content/uploads/2020/01/banh-chung.jpg'
    },
    {
      id:7,
      name: 'Bánh Dày',
      stutus: 'nnn',
      price: 444,
      url: 'https://banhmimahai.vn/wp-content/uploads/2020/02/thumb.jpg.webp'
    },
    {
      id:8,
      name: 'Bánh Dày',
      stutus: 'nnn',
      price: 444,
      url: 'https://banhmimahai.vn/wp-content/uploads/2020/02/thumb.jpg.webp'
    },
  ])
  return (
    <View style={{ flex: 1, }}>
      <View style={{  flexDirection: 'row', justifyContent:'space-between',padding:20 }}>
        <TouchableOpacity style={{borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 7}}>
          <Icon name='bars' size={28} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 8}}>
          <Icon name='user' size={28} color='white' />
        </TouchableOpacity>
      </View>
      <View style={{}}>
      <View style={{
          borderColor: '#8bd9bc',
          borderWidth: 2,
          borderRadius: 10,
          flexDirection:'row',
          fontSize: 18,
          alignItems:'center',
          marginHorizontal: 10,
          paddingHorizontal:10,
          height:40
        }}>
          <Icon name='search' size={20} color='black' />
          <TextInput

            keyboardType='default'
            style={{marginHorizontal:10,alignItems:'center'}}
          />
        </View>
        <Text style={{
          fontSize: 25,
          margin: 5,
          color: 'black',
          fontWeight: 'bold'
        }}>Món ăn yêu thích</Text>
        <View style={{
        }}>
          <View style={{
            height: 600,
          }}>

            <View style={{ height: 1, backgroundColor: '#8bd9bc' }}></View>

            <FlatList
              data={foodslove}
              keyExtractor={item => item.id}
              renderItem={({ item }) => {
                return <View style={{
                  backgroundColor: '#add9cc',
                  borderRadius: 10,
                  margin: 5,
                  padding: 5,
                  flexDirection: 'row'
                }}>
                  <Image style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    margin: 10
                  }}
                    source={{
                      uri: item.url
                    }} />
                  <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
                    <Text>{item.stutus}</Text>
                    <View style={{ flex: 1,width:250, alignItems: 'flex-end', padding: 4, flexDirection: 'row', justifyContent: 'space-between' }}>
                      <Text style={{ fontSize: 18 }}><Text style={{ color: 'red' }}>$</Text>{item.price}</Text>
                      <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#718c49', padding: 3,paddingHorizontal:4 }} onPress={() => Alert.alert(`Đã thêm vào giỏ hàng`)}>
                      <Icon name='plus' size={15} color='white' />
                    </TouchableOpacity>
                    </View>
                  </View>



                </View>
              }}
              style={{ flex: 1 }}>

            </FlatList>

            <View style={{ height: 1, backgroundColor: '#8bd9bc' }}></View>


          </View>
        </View>

      </View>

    </View>
  )
}

export default YeuThich

const styles = StyleSheet.create({
  khunginput: {
    borderColor: '#8bd9bc',
    borderWidth: 2,
    borderRadius: 10,
    padding: 7,
    margin: 5,
    marginHorizontal:10,
    fontSize: 18,
    marginTop:20
},
})