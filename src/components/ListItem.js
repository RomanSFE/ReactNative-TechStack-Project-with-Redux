import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { selectLibrary } from '../actions'
import { connect } from 'react-redux'
import SelectionReducer from '../reducers/SelectionReducer'

class ListItem extends Component {
    renderDescription = ()=>{
        const { item, selectedLibId } = this.props
        
        if(item.id == selectedLibId) {
            return (
                <View style={{padding: 12, backgroundColor: '#F8E1E5', margin: 5, marginTop: 0, marginBottom: 12, borderRadius: 5, elevation: 3}}>
                    <Text style={{color: '#3D4E55', lineHeight: 20}}>{item.description}</Text>
                </View>
            )
            
        }
    }
    render() {
        const { item } = this.props
        const { id, title } = item
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.selectLibrary(id)} style={{margin: 5, padding: 12, backgroundColor: '#FE8AA7', borderRadius: 5}}>
                    <Text style={{color: '#f9f9f9', fontWeight: 'bold'}}> {title} </Text>
                </TouchableOpacity>

                {this.renderDescription()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedLibId: state.selectLibraryId
    }
}
export default connect(mapStateToProps, {selectLibrary})(ListItem)
