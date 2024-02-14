import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home Screeen</Text>
      <Button
      title="profile"
      onPress={() =>
        navigation.navigate('KitchenProfile')
      }
    />
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
});
