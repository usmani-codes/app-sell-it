import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

import AppButton from '../components/AppButton'
import routes from '../navigation/routes'

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      style={styles.bgImage}
      blurRadius={10}
      source={require('../assets/background.jpg')}
    >
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/logo-red.png')}
          />
          <Text style={styles.heading}>Sell what you don't need</Text>
        </View>
        <View style={styles.btns}>
          <AppButton
            title={'Login'}
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <AppButton
            title={'Register'}
            onPress={() => navigation.navigate(routes.REGISTER)}
            color='secondary'
          />
        </View>
      </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  logoContainer: {
    marginTop: 70,
    rowGap: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  heading: {
    fontWeight: '600',
    fontSize: 25,
  },

  btns: {
    width: '100%',
    paddingHorizontal: 20,
    gap: 20,
  },
})
export default HomeScreen
