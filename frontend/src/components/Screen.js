import { SafeAreaView, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const Screen = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
}
export default Screen
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
})
