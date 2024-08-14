import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import ProductListingscreen from './Redux/ProductListing/ProductListingscreen'
import PdfView from './Redux/PdfView'
import Header from './Src/ReduxExample/Header'
import Product from './Src/ReduxExample/Product'
import { ScrollView } from 'react-native-gesture-handler'
import StateProps from './Src/State&Props/StateProps'
import FormControl from './Src/HandlingFormControls.js/FormControl'

const App = () => {

  const Products = [
    {
      name: 'Laptop',
      price: '70000',
      color: 'Black',
      Image: 'https://media.istockphoto.com/id/1292038829/photo/laptop-computer-with-blue-pink-lighting-and-blank-screen-place-on-dark-background-3d.webp?b=1&s=170667a&w=0&k=20&c=XPhuSPxXHKjRhVMSWZVHBGeLHj8jhpcVqqHqVGYurW8='
    },
    {
      name: 'Mobile',
      price: '30000',
      color: 'Black',
      Image: 'https://plus.unsplash.com/premium_photo-1681666713747-b784f30eb407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      name: 'Tv',
      price: '50000',
      color: 'Black',
      Image: 'https://media.istockphoto.com/id/1283423135/photo/led-tv-on-the-dark-wall-in-living-room.webp?b=1&s=170667a&w=0&k=20&c=MjwvJLk8C8zNMWrhquBv34kTVdjyxKNvcI7yec6-Tu4='
    },
    
  ]


  return (
    <View>
       {/* <Main/>  
      <ProductListingscreen/> 
       <PdfView/>  */}

      
      <Header />
      <ScrollView>
      {
        Products.map((item, index) => <Product key={index} item={item} />)
      }
      </ScrollView> 


 <StateProps/> 

{/* <FormControl/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})