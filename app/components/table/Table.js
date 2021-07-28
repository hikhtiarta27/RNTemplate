import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, RefreshControl, View, TouchableOpacity, ScrollView} from 'react-native';
import {Text} from '..';
import _style from './Styles';
import _s from '../../styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

function Table(props) {
  const {header} = props;
  const [activeHeader, setActiveHeader] = useState(null);
  const [sort, SetSort] = useState(true); //true: up | false: down
  const [data, setData] = useState(props.data)

  useEffect(()=>{
    handleSort(0)
    setActiveHeader(0)
  }, [])

  const handleSort = index => {    
    let statusSort
    if (index == activeHeader) {
      statusSort = !sort
      SetSort(!sort);
    }
    else {
      statusSort = true
      SetSort(true)
    }

    console.log(statusSort)

    setActiveHeader(index);

    if(data.length == 0) return

    let sortedList;
    if (header[index].type == 'number') {
      sortedList = data.sort((a, b) => (statusSort ? a[header[index].key] - b[header[index].key] : b[header[index].key] - a[header[index].key]));
    }else if(header[index].type == 'string') {
      sortedList = data.sort((a, b) => (statusSort ? a[header[index].key].localeCompare(b[header[index].key]) : b[header[index].key].localeCompare(a[header[index].key])));
    }
    setData(sortedList)
  }; 

  const renderItem = ({item, index}) => {    
    return (
      <View style={_style.itemContainer} key={index} >
        {header.map((obj, i) => (
          <View
            key={i}            
            style={[
              _style.itemContainerChild,
              i != item.length - 1 && _s.mr2,
            ]}>
            <Text
              value={item[obj.key].toString()}
              style={_style.itemText}
              numberOfLines={1}
            />
          </View>
        ))}
      </View>
    );
  };

  const renderHeader = () => {
    return (
      <View style={_style.headerContainer}>
        {header.map(({value, type}, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => handleSort(index)}
            style={[
              _style.headerContainerChild,
              index != header.length - 1 && _s.mr2,
            ]}>
            <View style={_s.rowCenter}>
              <Text
                value={value}
                style={[_style.headerText, _s.flex1]}
                numberOfLines={1}
              />
              {activeHeader == index && (
                <AntDesignIcon
                  size={8}
                  name={sort ? 'caretup' : 'caretdown'}
                  color="#fff"
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
        data={data}
        extraData={data}
        // horizontal
        // showsHorizontalScrollIndicator={false}      
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        stickyHeaderIndices={[0]}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
}

Table.propTypes = {
  data: PropTypes.array,
  header: PropTypes.array,
};

Table.defaultProps = {
  header: [],
};

export default Table;
