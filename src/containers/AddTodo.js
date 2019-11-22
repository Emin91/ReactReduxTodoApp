import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        this.props.dispatch(addTodo(text))
        this.setState({ text: '' })
    }

    render() {
        return(
            <View style={{flexDirection: 'row', marginHorizontal: 20}}>
                <TextInput
                    onChangeText={(text)=> this.setState({text})}
                    value={this.state.text}
                    placeholder="Item name"
                    style={{borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5}}
                />
                <TouchableOpacity onPress={()=>this.addTodo(this.state.text)}>
                    <View style={{height: 50, width: 60, backgroundColor: '#eaeaea', justifyContent: 'center', alignItems: 'center'}}>
                        <Text>Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#141513',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        backgroundColor: '#854545'
    }
})

export default connect()(AddTodo);