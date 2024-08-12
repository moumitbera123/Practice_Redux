import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const PdfView = () => {
    const navigation = useNavigation()
    const navigatetoviewbook = () =>{
        navigation.navigate('ViewBook')
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Book Store</Text>
            <Text style={styles.subtitle}>New Books 😍</Text>
            <View style={styles.newBooksContainer}>
                <FlatList
                    data={[1, 1, 1, 1, 1, 1]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity style={styles.bookContainer} onPress={navigatetoviewbook}>
                                <Image
                                    source={require('../Src/Images/pdf.png')}
                                    style={styles.bookImage}
                                />
                                <Text style={styles.bookText}>{'Book ' + (index + 1)}</Text>
                            </TouchableOpacity>
                        );
                    }}
                />
                <Text style={styles.subtitle}>Trending Books 🤗</Text>
                <FlatList
                    data={[1, 1, 1, 1, 1, 1]}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.trendingBookWrapper}>
                                <TouchableOpacity style={styles.trendingBookContainer} onPress={navigatetoviewbook}>
                                    <Image
                                        source={require('../Src/Images/pdf.png')}
                                        style={styles.bookImage}
                                    />
                                    <Text style={styles.bookText}>{'Book ' + (index + 1)}</Text>
                                    <Text style={styles.indexText}>{index + 1}</Text>
                                </TouchableOpacity>
                            </View>
                        );
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default PdfView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
        marginTop: 30,
        marginLeft: 28,
        marginBottom: 28,
    },
    subtitle: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '700',
        marginTop: 10,
        marginLeft: 28,
        marginBottom: 28,
    },
    newBooksContainer: {
        marginTop: 30,
    },
    bookContainer: {
        width: 128,
        height: 120,
        borderRadius: 10,
        borderWidth: 0, // Border removed
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookImage: {
        height: 60,
        width: 60,
        borderRadius: 10,
    },
    bookText: {
        color: '#fff',
        marginTop: 10,
        textAlign: 'center',
    },
    trendingBookWrapper: {
        width: '50%',
        height: 130,
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 10,
    },
    trendingBookContainer: {
        width: '80%',
        height: 120,
        borderRadius: 10,
        borderWidth: 0, // Border removed
        justifyContent: 'center',
        alignItems: 'center',
    },
    indexText: {
        fontSize: 50,
        color: 'red',
        position: 'absolute',
        left: 0,
    },
});
