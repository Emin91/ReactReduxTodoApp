import React from 'react'
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native'

const TodoList = ({ todos, toggleTodo }) => (
    <ScrollView>
    <View style={styles.container}>
       {todos.map(todo=>
        <TouchableOpacity key={todo.id} onPress={()=>toggleTodo(todo.id)}>
            <Text style={{ backgroundColor: '#252525', marginTop: 15, fontSize: 24, paddingTop: 5, paddingBottom: 5, paddingLeft: 15, color: '#fff', textDecorationLine: todo.completed ? 'line-through' : 'none'}}>{todo.text}</Text>
        </TouchableOpacity>
       )}
    </View>
    </ScrollView>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        //backgroundColor: '#854a4a',
        //paddingLeft: 15,
        //paddingRight: 15,
    },
});

export default TodoList;