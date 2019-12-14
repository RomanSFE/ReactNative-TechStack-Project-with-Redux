import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'

class LibraryList extends Component {

    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) =>{
        return(
            <ListItem item={item} />
        )
    }

    render() {
        const { libraryList } = this.props
        return (
            <View>
                <FlatList data={libraryList} keyExtractor={this.keyExtractor} renderItem={this.renderItem} />
            </View>
        )
    }
}

const mapStateToProps = state =>{
    return{
        libraryList: state.libraries
    }
}
export default connect(mapStateToProps, null)(LibraryList)
