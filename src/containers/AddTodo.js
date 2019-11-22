import React, {Component} from 'react'
import {StyleSheet, View, Text, TextInput, Alert, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {

constructor(props) {
    super(props)
    this.state = {
        text: ''
    }
    this.handleChange = this.handleChange.bind(this)
}   

    handleChange(newText) {
        this.setState({
            text: newText
        })
    }

    btnOnClick = () =>{
        const { text } = this.state;
        if(text == "") {
            Alert.alert("Поле пустое")

        } else {
                this.props.dispatch(addTodo(text))
                this.setState({ text: '' })
        }
    }
    
    render() {
        return(
            <View style={styles.container}>
                <TextInput
                    onChangeText={(text)=> this.setState({text})}
                    value={this.state.text}
                    placeholder="Item name"
                    placeholderTextColor='#8a8a8a'
                    style={styles.textInput}
                />
                <TouchableOpacity onPress={this.btnOnClick}>
                    <View style={styles.btnAdd}>
                        <Text style={styles.addBtnText}>Add</Text>
                    </View>
                </TouchableOpacity>
            <Text style={{color: '#fff'}}></Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    textInput: {
        borderColor: '#353535',
        borderWidth: 3,
        backgroundColor: '#252525',
        height: 50,
        flex: 1,
        color: '#fff',
        paddingLeft: 15,
        fontSize: 20,
    },
    btnAdd: {
        height: 50,
        width: 60,
        backgroundColor: '#2980b9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addBtnText: {
        fontSize: 20,
        color: '#fff',
    }
})

export default connect()(AddTodo);