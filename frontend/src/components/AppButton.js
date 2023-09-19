import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../config/colors'

const AppButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
export default AppButton
const styles = StyleSheet.create({
  btn: {
    width: '100%',
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
  },
})
