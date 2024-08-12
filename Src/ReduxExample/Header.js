import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const [cartItems, setCartItems] = useState(0);

    const cartData = useSelector((state) => state.reducer); 
    
    useEffect(() => {
        setCartItems(cartData.length);
    }, [cartData]);

    

    return (
        <View style={{ padding: 20, backgroundColor: '#ffaca6' }}>
            <Text style={{ fontSize: 30, textAlign: 'right' }}>{cartItems}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({});
