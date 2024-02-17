import { FlatList, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const GioHang = (props) => {
  const navigation = useNavigation();

  const [isLoading, setisLoading] = useState(true);
  const [dssp, setdssp] = useState([]);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    dssp.forEach((product) => {
      product.prices.forEach((totalSize) => {
        totalPrice += totalSize.totalSize || 0;
      });
    });

    return totalPrice.toFixed(2);
  };





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

    const handleMinusPress = async (item, size) => {
      try {
        const updatedDssp = [...dssp];
        const selectedItemIndex = updatedDssp.findIndex((product) => product.id === item.id);
        const selectedPriceIndex = updatedDssp[selectedItemIndex].prices.findIndex((p) => p.size === size);

        if (updatedDssp[selectedItemIndex].prices[selectedPriceIndex].quantity > 0) {
          const newQuantity = updatedDssp[selectedItemIndex].prices[selectedPriceIndex].quantity - 1;

          // Thực hiện yêu cầu API để giảm số lượng cho sản phẩm và size cụ thể
          await fetch(`http://192.168.1.6:3000/carts/${item.id}/sizes/${size}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity: newQuantity }),
          });

          // Lấy giá của sản phẩm từ danh sách sản phẩm
          const product = updatedDssp[selectedItemIndex];
          const productPrice = parseFloat(product.prices[selectedPriceIndex].price);

          // Cộng giá mới dựa trên giá của sản phẩm (không nhân theo số lượng)
          const newTotalPrice = productPrice * newQuantity;

          // Cập nhật trạng thái để phản ánh sự giảm số lượng và giá mới
          updatedDssp[selectedItemIndex].prices[selectedPriceIndex].quantity = newQuantity;
          updatedDssp[selectedItemIndex].prices[selectedPriceIndex].totalSize = newTotalPrice;

          setdssp(updatedDssp);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const handlePlusPress = async (item, size) => {
      try {
        const updatedDssp = [...dssp];
        const selectedItemIndex = updatedDssp.findIndex((product) => product.id === item.id);
        const selectedPriceIndex = updatedDssp[selectedItemIndex].prices.findIndex((p) => p.size === size);

        // Thực hiện yêu cầu API để tăng số lượng cho sản phẩm và size cụ thể
        await fetch(`http://192.168.1.6:3000/carts/${item.id}/sizes/${size}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: updatedDssp[selectedItemIndex].prices[selectedPriceIndex].quantity + 1 }),
        });

        // Lấy giá của sản phẩm từ danh sách sản phẩm
        const product = updatedDssp[selectedItemIndex];
        const productPrice = parseFloat(product.prices[selectedPriceIndex].price);

        // Cộng giá mới dựa trên giá của sản phẩm (không nhân theo số lượng)
        const newQuantity = product.prices[selectedPriceIndex].quantity + 1;
        const newTotalPrice = productPrice * newQuantity;

        // Cập nhật trạng thái để phản ánh sự tăng số lượng và giá mới
        updatedDssp[selectedItemIndex].prices[selectedPriceIndex].quantity = newQuantity;
        updatedDssp[selectedItemIndex].prices[selectedPriceIndex].totalSize = newTotalPrice;

        setdssp(updatedDssp);
      } catch (error) {
        console.error(error);
      }
    };

    if (priceInfo && priceInfo.quantity > 0) {

      return (
        <View key={size} style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <View style={{
            width: 80,
            backgroundColor: '#8bd9bc',
            height: 35,
            margin: 5,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
          }}>
            <Text style={{ color: 'black', fontWeight: '800' }}>{size}</Text>
          </View>

          <Text style={{ fontSize: 18, color: 'black', fontWeight: '800' }}><Text style={{ color: '#bf3b84' }}>$ </Text>{priceInfo.totalSize}</Text>
          <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#bf3b84', padding: 7, paddingHorizontal: 9 }}
            onPress={() => handleMinusPress(item, size)}>
            <Icon name='minus' size={15} color='white' />
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row', borderColor: '#bf3b84',
            borderWidth: 1,
            margin: 5,
            marginHorizontal: 10,
            fontSize: 18,
            width: 70,
            height: 35,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: '800' }}>{priceInfo.quantity}</Text>

          </View>
          <TouchableOpacity style={{ borderRadius: 5, backgroundColor: '#bf3b84', padding: 7, paddingHorizontal: 9 }}
            onPress={() => handlePlusPress(item, size)}>
            <Icon name='plus' size={15} color='white' />
          </TouchableOpacity>

        </View>
      );
    }
    return null;
  };
  const clearCartOnServer = async () => {
    try {
      await Promise.all(
        dssp.map(async (product) => {
          const { id } = product;
          const response = await fetch(`http://192.168.1.6:3000/carts/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            console.error(`Failed to delete product ${id} from the cart.`);
          }
        })
      );
  
      // Sau khi xóa thành công trên API, cập nhật trạng thái giỏ hàng thành một mảng rỗng
      setdssp([]);
    } catch (error) {
      console.error('Error clearing cart on server:', error);
    }
  };

  const postProductsToServer = async () => {
    try {
      const currentDate = new Date(); // Lấy ngày giờ hiện tại
      const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`; // Format ngày tháng năm
  
      const productsWithDate = dssp.map(product => ({
        ...product,
        date: formattedDate,
        totalAmount: calculateTotalPrice()
      }));
  
      const productsObject = productsWithDate.reduce((acc, product) => {
        const { id, ...rest } = product;
        acc[id] = { ...rest, date: product.date };
        return acc;
      }, {});
  
      const response = await fetch('http://192.168.1.6:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productsObject),
      });
  
      if (response.ok) {
        console.log('Products posted successfully!');

        clearCartOnServer();
      } else {
        console.error('Failed to post products:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error posting products:', error);
    }
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
            height: 670,
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


                    return <View style={{
                      backgroundColor: '#add9cc',
                      borderRadius: 10,
                      margin: 5,
                      padding: 5,
                      width: 400,
                    }}>
                      <View style={{

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




                        </View>



                      </View>
                      {item.prices.map(price => renderSize(item, price.size))}
                    </View>



                  }}
                  style={{ flex: 1 }}>



                </FlatList>
              )
            }
            <View style={{flexDirection:'row'}}>
              <View style={{justifyContent:'center', alignItems:'center', flex:2}}>
                <Text style={{ color: 'black', fontSize:18,fontWeight:'500' }}>
                  Total Price
                </Text>
                <Text style={{ color: '#bf3b84', fontSize:18,fontWeight:'500' }}>$ {calculateTotalPrice()}</Text>
              </View>
              <TouchableOpacity onPress={postProductsToServer}
               style={{flex:3,borderRadius: 10, backgroundColor: '#bf3b84', padding: 7, marginHorizontal:10, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:18, fontWeight:'500'}}>Pay</Text>
              </TouchableOpacity>
            </View>



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