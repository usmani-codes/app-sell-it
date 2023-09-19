import { StyleSheet, View } from 'react-native'
import colors from '../../config/colors'
const ListItemSeparator = () => {
  return <View style={styles.seperator} />
}
export default ListItemSeparator
const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: colors.light,
    width: '100%',
  },
})
