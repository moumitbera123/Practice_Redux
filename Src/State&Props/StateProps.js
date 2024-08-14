import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import UpdatedCart from './UpdatedCart'


const StateProps = () => {
  const [userDetails, setUserDetails] = useState({ name: 'Akash', age: 24 })
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Welcome!')

  const updateUserDetails = () => {
    setUserDetails({ name: 'Rohit', age: 34 })
    setMessage('User details have been updated!')
  }

  const updateCount = () => {
    setCount(count + 1)
  } 

  const resetState = () => {
    setUserDetails({ name: 'Akash', age: 24 })
    setCount(0)
    setMessage('State has been reset!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Here are the User Details</Text>
      <Text style={styles.details}>Name: {userDetails.name}</Text>
      <Text style={styles.details}>Age: {userDetails.age}</Text>
      <Text style={styles.message}>{message}</Text>
      
      <Button title='Update User Details' onPress={updateUserDetails} />
      <Button title='Reset State' onPress={resetState} color='red' />

      <UpdatedCart countDetails={count} updateUserDetails={updateUserDetails} />
  

      <Button title='Update Count' onPress={updateCount} />
    </View>
  )
}

export default StateProps

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
  },
  details: {
    fontSize: 25,
    fontWeight: '500',
  },
  message: {
    fontSize: 20,
    color: 'green',
    marginVertical: 10,
  },
})
