import React, { Component, useState, useEffect } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Button } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import {SafeAreaView} from 'react-native-safe-area-context';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import firestore from '@react-native-firebase/firestore';

const Home = ({navigation}) => {
    const [data, setData] = useState();
  
    useEffect(() => {
      firestore()
        .collection('Produksi')
        .onSnapshot((snapshot) => {
          const listProducts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(listProducts);
        });
    }, []);
  
    console.log(data);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <View style={styles.wrapper}>
                <View style={styles.product}>
                  <View>
                    <Text onPress={() =>
                      navigation.navigate('Detail Produksi', {Produksi: item})
                    }>Tanggal {item.tgl} Produksi {item.entri} Tercapai {item.data} Ton</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

            <View style={styles.page}>
                <View style={styles.wrapperButton}>
                    <TouchableOpacity style={styles.btnTambah} onPress={() => navigation.navigate('Signup')}>
                        <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
            </View>

      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#AFEEEE',
    },
    product: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    action: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    wrapper: {
      borderWidth: 1,
      borderColor: 'blue',
      padding: 20,
      margin: 5,
      borderRadius : 5
    },
    page: {
        flex: 1
    },
    wrapperButton: {
        flex: 1,
        position: "absolute",
        bottom: 0,
        right: 0,
        margin: 30
    },
    btnTambah: {
        padding: 20,
        backgroundColor: "skyblue",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    }
  });
  
  export default Home;