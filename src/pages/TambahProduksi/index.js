import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';

import firestore from '@react-native-firebase/firestore';

const TambahProduksi = ({navigation}) => {
    const [tgl, settgl] = useState();
    const [entri, setentri] = useState();
    const [data, setdata] = useState();
  
    const onChangetgl = (tgl) => {
      settgl(tgl);
    };
  
    const onChangeentri = (entri) => {
      setentri(entri);
    };
  
    const onChangedata = (data) => {
      setdata(data);
    };


    const EntriData = () => {
        //if (nama && nomorHP && alamat) {
            firestore()
            .collection('Produksi')
            .add({
                tgl: tgl,
                entri: entri,
                data: data,
            })

            .then(function (docRef) {
                console.log('Document written with ID: ', docRef.id);
                alert('Sukses', 'Data tersimpan');
                navigation.navigate('DATA PRODUKSI');
            })
            .catch(function (error) {
                console.error('Error adding document: ', error);
                alert(error);
            });

        //} else {
        //   Alert.alert('Error', 'Silahkan lengkapi data : Nama, NomorHp, dan Alamat');
        //}

    }

        return (
            <SafeAreaView style={styles.pages}>
                <Input
                    placeholder="Tanggal"
                    onChangeText={(tgl) => onChangetgl(tgl)}
                />

                <Input
                    placeholder="Entri Data"
                    onChangeText={(entri) => onChangeentri(entri)}
                />

                <Input
                    placeholder="Tercapai"
                    onChangeText={(data) => onChangedata(data)}
                />

                <TouchableOpacity style={styles.tombol} onPress={EntriData}>
                    <Text style={styles.textTombol}>SUBMIT</Text>
                </TouchableOpacity>        
            </SafeAreaView>
        )
};

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        margin: 20,
        backgroundColor: '#AFEEEE',
        borderRadius: 5
    },
    tombol: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginTop: 10
    },
    textTombol: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }


})

export default TambahProduksi;
