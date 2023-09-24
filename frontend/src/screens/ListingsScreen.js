import { useEffect, useState } from 'react'
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Button,
  ActivityIndicator,
} from 'react-native'
import Card from '../components/Card'
import Screen from '../components/Screen'
import colors from '../config/colors'
import listingsApi from '../api/listings'
import routes from '../navigation/routes'
import useApi from '../hooks/useApi'

// const listings = [
//   {
//     id: 1,
//     title: 'Red jacket for sale',
//     price: 100,
//     image: require('../assets/jacket.jpg'),
//   },
//   {
//     id: 2,
//     title: 'Couch in great condition',
//     price: 1000,
//     image: require('../assets/couch.jpg'),
//   },
// ]

const ListingsScreen = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings)

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <Screen style={styles.screen}>
      {error && (
        <Screen style={styles.screen}>
          <Text style={{ color: 'red' }}>Couldn't retrieve the listings.</Text>
          <Button title='Retry' onPress={loadListings} />
        </Screen>
      )}
      <ActivityIndicator animating={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`$${item.price}`}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  )
}
export default ListingsScreen
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})
