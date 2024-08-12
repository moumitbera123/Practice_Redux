import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeFromCart } from './Redux/action'

const Product = ({ item }) => {

    const dispatch = useDispatch()
    const [isadded, setAdded] = useState(false)

    const cartItems = useSelector((state) => state.reducer)

    const handleAddTocart = (item) => {
        // console.warn(item)
        dispatch(addTocart(item))
    }

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item.name))
    }

    useEffect(() => {
     let result = cartItems.filter((element)=>{
        return element.name === item.name
     })
     if (result.length) {
        setAdded(true)
     } else {
        setAdded(false)
     }
    }, [cartItems])
    
    return (
        <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Text style={styles.productColor}>{item.color}</Text>
            <Image source={{ uri: item.Image }} style={styles.productImage} />

            {isadded ?
                <Button title='Remove from Cart' onPress={() => handleRemoveFromCart(item)} />

                : <Button title='Add To Cart' onPress={() => handleAddTocart(item)} />
            }

        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    productContainer: {
        alignItems: 'center',
        marginBottom: 90
    },
    productName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize: 20,
        marginVertical: 8,
    },
    productColor: {
        fontSize: 20,
        marginBottom: 8,
    },
    productImage: {
        width: 200,
        height: 200,
        marginBottom: 16,
    },
})
