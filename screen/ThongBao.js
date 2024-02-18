import { FlatList, Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


const ThongBao = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu
    // Ví dụ sử dụng fetch:
    fetch('http://192.168.1.6:3000/orders')
      .then((response) => response.json())
      .then((responseData) => {
        // Sắp xếp mảng theo ngày giảm dần
        const sortedData = responseData.sort((a, b) => {
          const dateA = new Date(a.V1.date);
          const dateB = new Date(b.V1.date);
          return dateB - dateA;
        });

        setData(sortedData);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      {/* Hiển thị thông tin của từng item */}
      {Object.keys(item).map((key) => (
        <React.Fragment key={key}>
          {key.startsWith('V') && (
            <>
              <View style={{
                backgroundColor: '#add9cc',
                borderRadius: 10,
                margin: 5,
                padding: 10,
                width: 390,
              }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={{ uri: item[key].imagelink_square }} style={{ width: 100, height: 100, borderRadius: 20 }} />
                  <View style={{ flex: 1, marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 25, fontWeight: '800', color: 'black' }}>{item[key].name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                      <Icon name='star' size={20} color={'yellow'} />
                      <Text style={{ color: 'white', fontSize: 17, fontWeight: '600' }}> {item[key].average_rating}</Text>
                      <Text style={{ color: 'white', fontSize: 12 }}> ({item[key].ratings_count})</Text>
                    </View>
                    
                  </View>

                </View>
                {item[key].prices.map((price) => (

                  <View key={price.size} style={{
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
                      <Text style={{ color: 'black', fontWeight: '800' }}>{price.size}</Text>
                    </View>


                    <View style={{
                      flexDirection: 'row',
                      margin: 5,
                      marginHorizontal: 10,
                      fontSize: 18,
                      width: 70,
                      height: 35,
                      borderRadius: 10,
                      justifyContent: 'center',
                      alignItems: 'center',

                    }}>
                      <Text style={{ fontSize: 18, color: 'black', fontWeight: '800' }}>x{price.quantity}</Text>

                    </View>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800', marginRight: 20, width: 100 }}><Text style={{ color: '#bf3b84' }}>$ </Text>{price.totalSize}</Text>


                  </View>

                  // okok

                ))}
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{ color: 'black', fontSize: 18 }}> {item[key].date}</Text>
                  <Text style={{ color: '#bf3b84', fontSize: 18, fontWeight: '800' }}>$ {item[key].totalAmount}</Text>
                </View>

              </View>



            </>
          )}
        </React.Fragment>
      ))}
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
        <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 7 }}>
          <Icon name='bars' size={28} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={{ borderRadius: 3, backgroundColor: '#8bd9bc', padding: 5, paddingHorizontal: 8 }}>
          <Icon name='user' size={28} color='white' />
        </TouchableOpacity>

      </View>
      <View style={{ height: 700, width: 450, }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
    </View>
  )
}

export default ThongBao

const styles = StyleSheet.create({
  container: {

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
    marginTop: 20
  }
})