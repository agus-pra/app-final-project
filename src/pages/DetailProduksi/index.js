import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const DetailProduksi = ({navigation, route}) => {

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

    const UpdateData = () => {
        let db = firestore().collection('Produksi');
    
        db.doc(route.params.Produksi.id)
          .update({
                tgl: tgl,
                entri: entri,
                data: data,
          })
          .then(function (docRef) {
            alert('Product successfully updated');
            navigation.navigate('DATA PRODUKSI');
          })
          .catch(function (error) {
            alert(error);
          });
      };
    
    let deleteData = firestore().collection('Produksi');

    const deleteDataProduksi = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('Product successfully deleted');
        navigation.navigate('DATA PRODUKSI')
      })
      .catch((err) => {
        console.log(err);
      });
    };



  return (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <View>
                  <Input 
                    label="Tanggal"
                    placeholder={route.params.Produksi.tgl}
                    onChangeText={(tgl) => onChangetgl(tgl)}
                />
                </View>
                <View>
                  <Input
                    label="Entri Data"
                    placeholder={route.params.Produksi.entri}
                    onChangeText={(entri) => onChangeentri(entri)}
                  />
                </View>
                <View>
                  <Input
                    label="Tercapai"
                    placeholder={route.params.Produksi.data}
                    onChangeText={(data) => onChangedata(data)}
                />
                </View>
              </View>
              <View style={styles.action}>
                <Button
                    title="Hapus Data"
                    type="outline"
                    onPress={() => 
                        deleteDataProduksi(route.params.Produksi.id)
                    }
                    />
                <Button
                    title="Edit Data"
                    type="outline"
                    onPress={UpdateData}
                    />
              </View>

              
            </View>
  );
};

const styles = StyleSheet.create({
      product: {
        display: 'flex',
        //flexDirection: 'row',
        justifyContent: 'space-between',
      },
      action: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop : 30,
        
      },
      wrapper: {
        display: 'flex',
        borderWidth: 1,
        backgroundColor: '#AFEEEE',
        borderColor: 'green',
        padding: 20,
        margin: 20,
        borderRadius : 5
      },
});

export default DetailProduksi;
