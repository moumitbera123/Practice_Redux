import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const ViewBook = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sample PDF</Text>
            <Pdf
                trustAllCerts={false}
                // horizontal
                source={{ uri: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf' }}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`Current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link pressed: ${uri}`);
                }}
                style={styles.pdf}
            />
        </View>
    );
};

export default ViewBook;

const styles = StyleSheet.create({
    container: {
        flex: 1, // Ensure the container takes up the full screen
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    pdf: {
        flex: 1, // Make sure the PDF viewer takes up the remaining space
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});
