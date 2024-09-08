import React from 'react';
import { View, Button, useWindowDimensions, StyleSheet, Image, TextInput, StatusBar, ScrollView } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions(); // Hook này tự động theo dõi sự thay đổi kích thước màn hình
  const isPortrait = height > width;

  const imageWidth = isPortrait ? width * 0.8 : width * 0.4; // Điều chỉnh kích thước ảnh theo hướng màn hình
  const imageHeight = imageWidth * (isPortrait ? 0.6 : 0.4);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}>
        <StatusBar
          barStyle={isPortrait ? 'dark-content' : 'light-content'}
          backgroundColor={isPortrait ? '#fff' : '#000'}
        />
        <Button title="Nút 1" style={[styles.button, { width: isPortrait ? width * 0.8 : width * 0.4 }]} />
        <Button title="Nút 2" style={[styles.button, { width: isPortrait ? width * 0.8 : width * 0.4 }]} />
        <Image
          source={{ uri: 'https://cdn.pixabay.com/photo/2024/01/31/19/25/sunset-8544672_640.jpg' }}
          style={{ width: imageWidth, height: imageHeight }}
        />
        <View style={styles.inner}>
          <TextInput placeholder="Nhập văn bản" style={styles.textInput} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  portraitContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  landscapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    margin: 10,
  },
  inner: {
    //width: '100%',
    padding: 24,
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 36,
    fontSize: 16,
    paddingHorizontal: 10,
    //width: '100%',
  },
});

export default App;
