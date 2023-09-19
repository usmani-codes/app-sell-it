import React from 'react'
import { useFormikContext } from 'formik'

import { Picker } from '../itempicker'
import ErrorMessage from './ErrorMessage'

function AppFormPicker({
  items,
  name,
  numberOfColumns,
  placeholder,
  PickerItemComponent,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <Picker
        PickerItemComponent={PickerItemComponent}
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormPicker
