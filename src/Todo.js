import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

class Todo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        )
    }
        
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        //backgroundColor: '#141414',
    },
});


export default Todo;