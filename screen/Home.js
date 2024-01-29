import { FlatList, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = (props) => {
  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);

  //VIết hàm load sp
  const getListPro = async () => {
    let url_api = 'http://192.168.0.106:3000/products';

    try {
      const response = await fetch('http://192.168.0.106:3000/products');//load dữ liệu

      const json = await response.json();//chuyển dữ liệu thành json

      setdssp(json);//đổ dữ liệu

    } catch (error) {
      console.error(error);
    } finally {
      //kết thúc quá trình load dữu liệu
      setisLoading(false);//trạng tháu không còn load nữa
    }


  }





  const [foodsnew, setFoods] = useState([
    {
      name: 'Bánh Mì',
      stutus: 'Opening soon',
      price: 555,
      url: 'https://banhmimahai.vn/wp-content/uploads/2020/02/thumb.jpg.webp'
    },
    {
      name: 'Phở',
      stutus: 'nnn',
      price: 444,
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/1_to_pho_bo_bao_nhieu_calo_9_762e002737.jpg'
    },
    {
      name: 'Bánh Chưng',
      stutus: 'nnn',
      price: 444,
      url: 'https://www.cet.edu.vn/wp-content/uploads/2020/01/banh-chung.jpg'
    },
    {
      name: 'Bánh Dày',
      stutus: 'nnn',
      price: 444,
      url: 'https://banhmimahai.vn/wp-content/uploads/2020/02/thumb.jpg.webp'
    },
  ])
  const [foodBestSeller, setFoodsBestSeller] = useState([
    {
      name: 'Cơm Niêu',
      stutus: 'Opening soon',
      price: 555,
      url: 'https://static.vinwonders.com/2022/10/com-nieu-da-nang-01.jpg'
    },
    {
      name: 'Gỏi Cuốn',
      stutus: 'nnn',
      price: 444,
      url: 'https://i.pinimg.com/736x/c3/03/3d/c3033de2d1df36a393fbd52da537fe77.jpg'
    },
    {
      name: 'Phở',
      stutus: 'nnn',
      price: 444,
      url: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/1_to_pho_bo_bao_nhieu_calo_9_762e002737.jpg'
    },

    {
      name: 'Bánh Cuốn',
      stutus: 'nnn',
      price: 444,
      url: 'https://static.vinwonders.com/production/banh-cuon-da-lat-1.jpg'
    },
    {
      name: 'Bánh Xèo',
      stutus: 'nnn',
      price: 444,
      url: 'https://daotaobeptruong.vn/wp-content/uploads/2020/01/banh-xeo-mien-tay.jpg'
    },
  ])


  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      //cập nhật gd ở đây
      getListPro();
    });
    return unsubscribe;
  }, [props.navigation]);

  return (
    <View style={{ flex: 1, }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
        <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 7 }}>
          <Icon name='bars' size={28} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 8 }}>
          <Icon name='user' size={28} color='white' />
        </TouchableOpacity>
      </View>




      <View style={{}}>
        <View style={{
          borderColor: '#8bd9bc',
          borderWidth: 2,
          borderRadius: 10,
          flexDirection: 'row',
          fontSize: 18,
          alignItems: 'center',
          marginHorizontal: 10,
          paddingHorizontal: 10,
          height: 40
        }}>
          <Icon name='search' size={20} color='black' />
          <TextInput

            keyboardType='default'
            style={{ marginHorizontal: 10, alignItems: 'center' }}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>
          <Text style={{ fontSize: 24 }}>All</Text>

        </ScrollView>

        <Text style={{
          fontSize: 25,
          margin: 5,
          color: 'black',
          fontWeight: 'bold'
        }}>Món ăn mới</Text>
        <View style={{
        }}>
          <View style={{
            height: 230,
          }}>

            <View style={{ height: 1, backgroundColor: '#8bd9bc' }}></View>
            {
              (isLoading) ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  horizontal={true}
                  data={dssp}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    return <View style={{
                      backgroundColor: '#add9cc',
                      borderRadius: 10,
                      margin: 5,
                      padding: 5,
                      width: 130
                    }}>
                      <Image style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'cover',
                        borderRadius: 10,
                        margin: 10
                      }}
                        source={{
                          uri: item.imagelink_square
                        }} />
                      <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
                      <Text numberOfLines={1} ellipsizeMode="tail" >{item.description}</Text>
                      <View style={{ flex: 1, alignItems: 'flex-end', padding: 4, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18 }}><Text style={{ color: 'red' }}>$</Text>{item.price}</Text>
                        <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#718c49', padding: 3, paddingHorizontal: 4 }} onPress={() => Alert.alert(`Đã thêm vào giỏ hàng`)}>
                          <Icon name='plus' size={15} color='white' />
                        </TouchableOpacity>

                      </View>

                    </View>
                  }}
                  style={{ flex: 1 }}>



                </FlatList>
              )
            }



            <View style={{ height: 1, backgroundColor: '#8bd9bc' }}></View>


          </View>
        </View>
        <Text style={{
          fontSize: 25,
          margin: 5,
          color: 'black',
          fontWeight: 'bold',
          marginTop: 20
        }}>Món ăn bán chạy</Text>

        <View style={{
        }}>
          <View style={{
            height: 230,
          }}>

            <View style={{ height: 1, backgroundColor: '#8bd9bc' }}></View>

            <FlatList
              horizontal={true}
              data={foodBestSeller}
              keyExtractor={item => item.name}
              renderItem={({ item }) => {
                return <View style={{
                  backgroundColor: '#add9cc',
                  borderRadius: 10,
                  margin: 5,
                  padding: 5
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
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
                  <Text>{item.stutus}</Text>
                  <View style={{ flex: 1, alignItems: 'flex-end', padding: 4, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 18 }}><Text style={{ color: 'red' }}>$</Text>{item.price}</Text>
                    <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#718c49', padding: 3, paddingHorizontal: 4 }} onPress={() => Alert.alert(`Đã thêm vào giỏ hàng`)}>
                      <Icon name='plus' size={15} color='white' />
                    </TouchableOpacity>

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

export default Home

const styles = StyleSheet.create({
  khunginput: {
    borderColor: '#8bd9bc',
    borderWidth: 2,
    borderRadius: 10,
    padding: 7,
    margin: 5,

    fontSize: 18,
  },
})