import { LinearGradient } from 'expo-linear-gradient';
import { Button, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import { FIRESTORE_DP } from '../firebaseConfig';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export interface Obavestenja {
  title: string;
  body: string;
  id: string;
}

export default function Main({navigation}) {

  const [obavestenjaArray ,setObavestenja] = useState<Obavestenja[]>([]);

  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');

  useEffect(()=>{
    const obavestenjaRef = collection(FIRESTORE_DP, 'Obavestenja');

    const subscriber = onSnapshot(obavestenjaRef, {
      next: (snapshot) => {
        console.log('UPDATE');

        const obavestenja: Obavestenja[] = [];//zbog ovog dela je convertovano u TSX
        snapshot.docs.forEach((doc)=>{
          obavestenja.push({
            id: doc.id,
            ...doc.data(),
          } as Obavestenja);
        });
        setObavestenja(obavestenja)
      }
    })
    return()=> subscriber();
  },[])

  const addObavestenje = async () => {
    console.log('ADD');
    const doc = await addDoc(collection(FIRESTORE_DP, 'Obavestenja'), { title: title, body: body})
    setTitle('');
    setBody('');
  }

  const renderObavestenje = ({item}:any) => {
    return(
      <TouchableOpacity style={styles.obavestenje} activeOpacity={0.7} onPress={()=>{
        navigation.navigate('Obavestenje', {
          title: item.title,
          body:item.body,
        });
      }}>
        <Text style={styles.obavestenjeTitle}>{item.title}</Text>
        <Text style={styles.obavestenjeBody}>{item.body}</Text>
      </TouchableOpacity>
    )
  }

    return (
      <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['#ACE1FF','#e0f4ff']}        
        start={[0.3, 0]}
        end={[0.7,0.6]}
        style={styles.background}
      >
        
      <View style={styles.form}>
        
        <Text>Dodavanje obavestenja</Text>
        
        <TextInput style={styles.input} 
          placeholder='Dodaj naslov'
          value={title} 
          onChangeText={(text) => {
            setTitle(text)
          }}/>

        <TextInput style={styles.input} 
          placeholder='Dodaj telo'
          value={body} 
          onChangeText={(text) => {
            setBody(text)
          }}/>

        <Button title='Dodaj Obavestenje'
          disabled={title===''||body===''}
          onPress={() => {
            addObavestenje();
          }}/>

      </View>

      {obavestenjaArray.length>0 &&(
        <View style={styles.list}>
          <FlatList
            data={obavestenjaArray}
            renderItem={renderObavestenje}
            keyExtractor={(obavestenje: Obavestenja)=> obavestenje.id}
          />
        </View>
      )}

      </LinearGradient>
      </View>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      marginBottom: 20,
      alignItems:'center',
      width: '80%',
    },
    list: {
      paddingTop:10,
      flex: 1,
      alignItems:'center',
      width: '80%',
      borderTopWidth: 1,
      borderTopColor: 'white',
    },
    background: {
      width: '100%',
      height: '100%',
      paddingTop: 30,
      opacity: 0.95,
      alignItems: 'center'
    },
    input: {
      padding: 10,
      backgroundColor: 'white',
      opacity: 0.9,
      borderRadius: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      width: '100%',
    },
    obavestenje: {
      height: 100,
      width: '100%',
      marginVertical: 10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
      // shadowColor: '#171717',
      // shadowOffset: {width: 1, height: 1},
      // shadowOpacity: 0.2,
      // shadowRadius: 10,
    },
    obavestenjeTitle: {
      fontSize: 20,
    },
    obavestenjeBody: {
      flexShrink: 1,
    },
  });