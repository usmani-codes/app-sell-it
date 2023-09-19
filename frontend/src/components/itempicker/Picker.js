import { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import colors from '../../config/colors'
import AppText from '../AppText'
import PickerItem from './PickerItem'

const Picker = ({
  icon,
  items,
  numberOfColumns = 1,
  placeholder,
  onSelectItem,
  selectedItem,
  PickerItemComponent = PickerItem,
}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={[styles.text, { color: colors.medium }]}>
              {placeholder}
            </AppText>
          )}

          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={colors.medium}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType='slide' visible={modalVisible}>
        <Button title='Close' onPress={() => setModalVisible(false)} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.value}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setModalVisible(false)
                onSelectItem(item)
              }}
            />
          )}
        />
      </Modal>
    </>
  )
}
export default Picker
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 20,
  },
  text: {
    flex: 1,
  },
})
