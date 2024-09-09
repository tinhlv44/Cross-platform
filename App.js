import React, { useState } from 'react';
import { View, Button, useWindowDimensions, StyleSheet, Image, TextInput, StatusBar, Text, Platform, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions(); 
  const isPortrait = height > width;

  const imageWidth = isPortrait ? width * 0.8 : width * 0.4; 
  const imageHeight = imageWidth * (isPortrait ? 0.8 : 0.8);

  return (
    <View style={[isPortrait ? styles.portraitContainer : styles.landscapeContainer]}>
      <StatusBar
        barStyle={isPortrait ? 'dark-content' : 'light-content'}
        backgroundColor={isPortrait ? '#fff' : '#000'}
      />
      <View style={{flexDirection: !isPortrait ? 'row' : 'column'}}>
        <TouchableOpacity 
          style={[styles.button, { width: isPortrait ? width * 0.5 : width * 0.15 }]}
          onPress={() => alert('Đã nhấn vào nút 1')}
        >
          <Text style={styles.text}>
            Nút 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, { width: isPortrait ? width * 0.5 : width * 0.15 }]}
          onPress={() => alert('Đã nhấn vào nút 2')}
        >
          <Text style={styles.text}>
            Nút 2
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2024/01/31/19/25/sunset-8544672_640.jpg' }}
          style={{ width: imageWidth, height: imageHeight}}
        />
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={width/2}
        >
          <TextInput 
            placeholder="Lê Văn Tính - 2124801030225" 
            style={[styles.textInput, { width: imageWidth }]}  
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginTop:10
  },
  portraitContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    //backgroundColor:'red'
  },
  landscapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    padding: 8,
    marginBottom: 8,
    marginHorizontal: 8,
    alignItems:'center',
    ...Platform.select({
      ios: {
        backgroundColor: 'green',
      },
      android: {
        backgroundColor: 'red',
      },
    }),
  },
  text:{
    color:'white',
    fontSize:20
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 10,
    fontSize: 16,
    paddingHorizontal: 10
  },
});

export default App;
