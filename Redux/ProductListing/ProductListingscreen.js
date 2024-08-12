import { FlatList, StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

const ProductListingscreen = () => {
    const [myUserData, setMyUserData] = useState();
    const [isloaded, setIsLoaded] = useState(true)
    const getProducts = async () => {

        try {
            const response = await fetch(
                "https://fakestoreapi.com/products"
            );
            const myData = await response.json();
            setMyUserData(myData)
            setIsLoaded(false)
            // console.log(myData)
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <View>
            {isloaded ? (<View style={styles.ActivityIndicator}>
                <ActivityIndicator size={'large'} color={'#0000ff'} />
            </View>) : (


                <FlatList
                    data={myUserData}
                    renderItem={({ item }) => (
                        <View>
                            <View>
                                <Image
                                    style={styles.img}
                                    resizeMode="cover"
                                    source={{ uri: item.image }}
                                />
                            </View>
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                            <Text>{item.category}</Text>
                        </View>
                    )}
                />
            )}
        </View>
    )
}

export default ProductListingscreen

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200
    },
    ActivityIndicator: {
        justifyContent: 'center',
        alignItems: 'center',
        display:'flex',
        minHeight:'100%'
    }
})