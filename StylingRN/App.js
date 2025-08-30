import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>StyleSheet API</Text>
      <View style={[styles.box, styles.lightBlueBox, styles.iosShadow]}>
        <Text>LightBlue box</Text>
      </View>
      <View style={[styles.box, styles.lightGreenBox, styles.androidShadow]}>
        <Text>LightGreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 60,
  },
  box:{
    width: 200,
    height: 200,
    // padding: 10,
    paddingHorizontal: 10, // left and right
    paddingVertical: 20, // top and bottom
    // margin: 20,
    marginHorizontal: 20, // left and right
    marginVertical: 10, // top and bottom
    //border
    borderWidth: 2,
    borderColor: "purple",
    borderRadius: 10,
  },
  lightBlueBox: {
    backgroundColor: 'lightblue',
  },
  lightGreenBox: {
    backgroundColor: 'lightgreen',
  },
  iosShadow:{ //only can use for IOS
    shadowColor: "#333333",
    shadowOffset:{
      width:6,
      height: 6
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  androidShadow:{
    elevation: 10,
  }
});
