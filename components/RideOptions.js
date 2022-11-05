import { StyleSheet, Text, SafeAreaView ,TouchableOpacity,View, Image} from 'react-native'
import React,{useState} from 'react'
import  tw from 'twrnc'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'

const RideOptions = () => {
  const navigation=useNavigation()
  const[select,setselected]=useState(null)

  const data=[
    {
        id:"123-x",
        title:"Uber-X",
        multiplier:1,
        image:"https://links.papareact.com/3pn"
    },
    {
      id:"123",
      title:"Uber-Xl",
      multiplier:"Home",
      image:"https://links.papareact.com/5w8"
  },
    {
      id:"123-6",
      title:"Uber LUX",
      multiplier:1.75,
      image:"https://links.papareact.com/7pf"
  },
]

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View style={tw`bg-black`}>
          <TouchableOpacity 
          onPress={()=>{
            navigation.navigate('navcard')
          }}
          style={tw`absolute top-5 left-5 rounded-full`}>
             <Icon
               name='arrow-back-outline'
               type='ionicon'
               color='white'
              />
          </TouchableOpacity>
          <Text style={tw`text-center py-5 text-xl font-semibold text-white`}>{select?select.title:'select a ride'}</Text>
      </View>

     <FlatList data={data} 
           ItemSeparatorComponent={()=>(
            <View
             style={[tw`bg-gray-200 w-100 ml-2`,{height:0.5}]}
            />)}
      keyExtractor={(item)=>item.id}
      renderItem={({item:{image,title,multiplier,id},item})=>(
        <TouchableOpacity 
          onPress={()=>{
          setselected(item)
        }}
        style={tw`flex-row justify-between p-0 items-center px-5 ${id===select?.id && 'bg-gray-100'}`}>
           <Image
             style={{width:100,height:100,resizeMode:'contain'}}
             source={{uri:image}}
            />
            <View style={tw`-ml-7`}>
               <Text style={tw`text-xl font-semibold`}>{title}</Text>
               <Text>Travel time....</Text>
            </View>
            <Text>$200</Text>
        </TouchableOpacity>
      )}
     />

      <View style={tw`bg-black`}>
         <TouchableOpacity>
          <Text style={[tw`text-xl`,{fontSize:200}]}>choose</Text>
         </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptions

const styles = StyleSheet.create({})