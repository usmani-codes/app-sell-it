import { Formik } from 'formik'
import { StyleSheet } from 'react-native'

const AppForm = ({ children, initialValues, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  )
}
export default AppForm
const styles = StyleSheet.create({})
