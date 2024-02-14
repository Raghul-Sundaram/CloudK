import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';

const menuItems = [
    {
        id:1,
        itemName: "Pizza",
        Price: "10$",
        itemImage:""
    },
    {
        id:2,
        itemName: "Pizza",
        Price: "10$",
        itemImage:""
    },
    {
        id:3,
        itemName: "Pizza",
        Price: "10$",
        itemImage:""
    },
    {
        id:4,
        itemName: "Pizza",
        Price: "10$",
        itemImage:""
    },
    {
        id:5,
        itemName: "Pizza",
        Price: "10$",
        itemImage:""
    },
    {
        id:6,
        itemName: "Pizza",
        Price: "10$",
        itemImage:""
    },

]

export default function KitchenProfile({navigation}) {
 const showMenuItem = () => {
    
 }

  return (
    <View style={styles.container}>
        <View >
            <Image source=""/>
            <Text>Bob's Kitchen</Text>
            <Text>Veg & Non Veg</Text>
            <Text>Karur.</Text>
        </View>
        <View>
            <FlatList
            data={menuItems}
            renderItem={() => showMenuItem}
            keyExtractor={item.id}
            />
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Profile: {
    flex:1,
    
  }
});
