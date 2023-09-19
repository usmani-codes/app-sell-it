import { Image, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name='close' color={'white'} size={35} />
        </View>
        <View style={styles.deleteIcon}>
          <MaterialCommunityIcons name='delete' color={'white'} size={35} />
        </View>
      </View>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
    </View>
  )
}
export default ViewImageScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  iconsContainer: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  closeIcon: {
    width: 50,
    height: 50,
  },
  deleteIcon: {
    width: 50,
    height: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
})
