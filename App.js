import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
// react native does not support style inheritance as seen in css..on parent doesnt go into the child native components.
import GoalAdd from './components/GoalAdder';
export default function App() {
  const [coursegoalsarray, setcoursegoalsarray] = useState([]);
  const [modalview, setmodalview] = useState(false);

  function GoalAdder(goals){
    setcoursegoalsarray((prevgoalsarray)=>[...prevgoalsarray, goals])

  }
  function deleteHandler(key) {
    setcoursegoalsarray(prevgoals=>{
      prevgoals.filter((goal)=>goal.key!==key)
    })
  }
  function modalviewHandler() {
    setmodalview(true)
    
  }
  function Notvisible() {
    setmodalview(false)
    
  }
  
  // could use the scrollview if need to be an article.. has an end to the view..
  return (
    <View style={styles.appcontainer}>
    <Button  onPress={modalviewHandler} color="#5e0acc" title='Add new Goal'/>
    { modalview && <GoalAdd visible={modalview} GoalAdder={GoalAdder} notvisible={Notvisible}/>}

     <View style={styles.goalscontainer}>

    
     <FlatList  data={coursegoalsarray}  renderItem={(renderItem)=>{
       return(
          <Text style={styles.goalmodifier} >{renderItem.item}</Text>

        );}
} />
</View>    
      
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  appcontainer:{
    flex: 1,

    paddingTop:50,
    paddingHorizontal:16,
  },
  goalmodifier:{
    margin:8,
    padding:8,
    borderRadius:10,
    backgroundColor:'#5e0acc',
    color:'white',

},
goalscontainer:{
flex: 4
},
  

    


  
 
  
  

  
  
});
