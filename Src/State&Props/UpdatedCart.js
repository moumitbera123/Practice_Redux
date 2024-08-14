import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UpdatedCart = ({ countDetails, updateUserDetails }) => {
  return (
    <View>
      <Text style={styles.details}>Updated Cart Count: {countDetails}</Text>
      <Button title='Update from Child Component' onPress={updateUserDetails} />
    </View>
  )
}

export default UpdatedCart

const styles = StyleSheet.create({
  details: {
    fontSize: 25,
    fontWeight: '500',
  },
})
