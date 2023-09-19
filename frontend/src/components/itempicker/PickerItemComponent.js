import { StyleSheet, TouchableOpacity } from 'react-native'

import Icon from '../Icon'
import AppText from '../AppText'

const PickerItemComponent = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={item.icon} backgroundColor={item.backgroundColor} size={80} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    paddingTop: 5,
    textAlign: 'center',
  },
})

export default PickerItemComponent
