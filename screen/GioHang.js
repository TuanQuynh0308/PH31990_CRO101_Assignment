import { FlatList, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const GioHang = (props) => {
  const navigation = useNavigation();

  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);




  //VIết hàm load sp

  const getListPro = async () => {
    let url_api = 'http://192.168.1.6:3000/carts';

    try {
      const response = await fetch(url_api);//load dữ liệu

      const json = await response.json();//chuyển dữ liệu thành json

      setdssp(json);//đổ dữ liệu

    } catch (error) {
      console.error(error);
    } finally {
      //kết thúc quá trình load dữu liệu
      setisLoading(false);//trạng tháu không còn load nữa
    }



  }


  React.useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      //cập nhật gd ở đây
      getListPro();
    });
    return unsubscribe;
  }, [props.navigation]);



  const renderSize = (item, size) => {
    const priceInfo = item.prices.find(price => price.size === size);

    if (priceInfo && priceInfo.quantity > 0) {
      return (
        <View key={size}>
          <Text>{size}</Text>
          <Text>{priceInfo.price} {priceInfo.currency}</Text>
          <Text>{priceInfo.quantity} in stock</Text>
          {/* Thêm các thành phần khác của mỗi mục ở đây */}
        </View>
      );
    }
    return null;
  };


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
        }}>
          <View style={{
            height: 730,
          }}>

            <View style={{ height: 1, backgroundColor: '#8bd9bc' }}></View>
            {
              (isLoading) ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  data={dssp}
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => {
                    const priceindex = item.prices[0]
                    return <View style={{
                      backgroundColor: '#add9cc',
                      borderRadius: 10,
                      margin: 5,
                      padding: 5,
                      width: 400,
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
                          uri: item.imagelink_square
                        }} />


                      <View style={{ flex: 1 }}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{item.name}</Text>
                        <Text numberOfLines={1} ellipsizeMode="tail" >{item.ingredients}</Text>

                        <View style={{ flex: 1, alignItems: 'flex-end', padding: 4, flexDirection: 'row', justifyContent: 'space-between' }}>
                          <Text style={{ fontSize: 18 }}><Text style={{ color: 'red' }}>$</Text>{priceindex.price}</Text>
                          <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#718c49', padding: 3, paddingHorizontal: 4 }}>
                            <Icon name='plus' size={15} color='white' />
                          </TouchableOpacity>


                        </View>
                        {item.prices.map(price => renderSize(item, price.size))}

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


      </View>

    </View>
  )
}

export default GioHang

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