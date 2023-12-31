import React from 'react'
import { StyleSheet } from 'react-native'
import { object, string, number, array } from 'yup'

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
  FormImagePicker,
} from '../components/form'

import useLocation from '../hooks/useLocation'
import listingsApi from '../api/listings'

import Screen from '../components/Screen'
import { PickerItemComponent } from '../components/itempicker'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

let validationSchema = object({
  title: string().required().min(1).label('Title'),
  price: number().required().min(1).max(10000).label('Price'),
  description: string().label('Description'),
  category: object().required().nullable().label('Category'),
  images: array().min(1, 'please select atleast one Image'),
})

const categories = [
  {
    backgroundColor: '#fc5c65',
    icon: 'floor-lamp',
    label: 'Furniture',
    value: 1,
  },
  {
    backgroundColor: '#fd9644',
    icon: 'car',
    label: 'Cars',
    value: 2,
  },
  {
    backgroundColor: '#fed330',
    icon: 'camera',
    label: 'Cameras',
    value: 3,
  },
  {
    backgroundColor: '#26de81',
    icon: 'cards',
    label: 'Games',
    value: 4,
  },
  {
    backgroundColor: '#2bcbba',
    icon: 'shoe-heel',
    label: 'Clothing',
    value: 5,
  },
  {
    backgroundColor: '#45aaf2',
    icon: 'basketball',
    label: 'Sports',
    value: 6,
  },
  {
    backgroundColor: '#4b7bec',
    icon: 'headphones',
    label: 'Movies & Music',
    value: 7,
  },
  {
    backgroundColor: '#a55eea',
    icon: 'book-open-variant',
    label: 'Books',
    value: 8,
  },
  {
    backgroundColor: '#778ca3',
    icon: 'application',
    label: 'Other',
    value: 9,
  },
]

function ListingEditScreen() {
  const { location } = useLocation()

  const handleSubmit = async (listing) => {
    const result = await listingsApi.addListing({ ...listing, location })
    if (!result.ok) return alert('Could not save the listing.', result.ok)
    alert('Success')
  }

  return (
    <Screen style={styles.container}>
      <GestureHandlerRootView>
        <AppForm
          initialValues={{
            title: '',
            price: '',
            description: '',
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <FormImagePicker name='images' />
          <AppFormField maxLength={255} name='title' placeholder='Title' />
          <AppFormField
            keyboardType='numeric'
            maxLength={8}
            name='price'
            placeholder='Price'
            width={120}
          />
          <AppFormPicker
            items={categories}
            name='category'
            numberOfColumns={3}
            PickerItemComponent={PickerItemComponent}
            placeholder='Category'
            width='50%'
          />
          <AppFormField
            maxLength={255}
            multiline
            name='description'
            numberOfLines={3}
            placeholder='Description'
          />
          <SubmitButton title='Post' />
        </AppForm>
      </GestureHandlerRootView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
export default ListingEditScreen
