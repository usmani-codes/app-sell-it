import { FlatList, StyleSheet, View } from 'react-native'

import Screen from '../components/Screen'
import { ListItem, ListItemSeparator } from '../components/list'
import colors from '../config/colors'
import Icon from '../components/Icon'
import routes from '../navigation/routes'

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
    sourceTarget: '',
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    sourceTarget: routes.MESSAGES,
  },
]

const AccountScreen = ({ navigation }) => {
  const handlePress = (item) => {
    console.log(item.sourceTarget === routes.LISTINGS)
    item.sourceTarget === routes.LISTINGS
      ? navigation.navigate(item.sourceTarget)
      : navigation.navigate(item.sourceTarget)
  }
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={'UsmaniCodes'}
          subTitle='usmaniCodes@gmail.com'
          image={require('../assets/usman.png')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => handlePress(item)}
            />
          )}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={<ListItemSeparator />}
        />
      </View>
      <ListItem
        title='Log Out'
        IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
        // onPress={() => navigation.navigate(routes.WELCOME)}
      />
    </Screen>
  )
}
export default AccountScreen
const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
})
