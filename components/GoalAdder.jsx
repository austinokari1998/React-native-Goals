import React from 'react';
import {View, StyleSheet, Button, TextInput, Modal} from 'react-native';
import { useState } from 'react';

const GoalAdd = (props) => {
    const [goals, setgoals] = useState('');
    function GoalInputter(inputtext){
    
        setgoals(inputtext)
      } 
     function GoalAdder(){
        props.GoalAdder(goals)
        setgoals('')
        props.notvisible()
     } 
   
    return (
        <Modal animationType='fade' visible={props.visible}>
         <View style={styles.flexcontainer}>
            <TextInput style={styles.texteditor} placeholder='Your days goal' onChangeText={GoalInputter} value={goals}/>
            <Button title='Add goal' onPress={GoalAdder} />
        

        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    flexcontainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        flex: 1,
},
texteditor:{

    borderWidth: 1,
    borderRadius:8,
    borderColor: '#cccccc',
    width:'65%',
    marginRight: 8,
    padding:8,

  },

}
)

export default GoalAdd;
