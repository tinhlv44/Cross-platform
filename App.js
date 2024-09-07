import React from 'react';
import { View, Button, useWindowDimensions, StyleSheet, Image, KeyboardAvoidingView, Platform, TextInput, StatusBar, ScrollView } from 'react-native';

const App = () => {
  const { width, height } = useWindowDimensions(); // Hook để lấy kích thước màn hình
  const isPortrait = height > width; // Xác định chế độ màn hình

  // Điều chỉnh tỷ lệ hình ảnh dựa trên chế độ màn hình
  const imageWidth = isPortrait ? width * 0.8 : width * 0.4; // Hình ảnh lớn hơn ở chế độ dọc
  const imageHeight = height * (isPortrait ? 0.6 : 0.4); // Tỷ lệ chiều cao thay đổi theo hướng

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }} // Đảm bảo KeyboardAvoidingView bao phủ toàn bộ màn hình
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      <ScrollView style={{ flex: 1 }}>
        <View style={isPortrait ? styles.portraitContainer : styles.landscapeContainer}>
          <StatusBar
            barStyle={isPortrait ? 'dark-content' : 'light-content'}
            backgroundColor={isPortrait ? '#fff' : '#000'}
          />
          <Button title="Nút 1" style={[styles.button, { width: width / 2 }]} />
          <Button title="Nút 2" style={[styles.button, { width: width / 2 }]} />
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2024/01/31/19/25/sunset-8544672_640.jpg' }}
            style={{ width: imageWidth, height: imageHeight }}
          />
          <View style={styles.inner}>
            <TextInput placeholder="Nhập văn bản" style={styles.textInput} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  // Bố cục khi ở màn hình dọc
  portraitContainer: {
    flexDirection: 'column', // Hiển thị các thành phần theo chiều dọc
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  // Bố cục khi ở màn hình ngang
  landscapeContainer: {
    flexDirection: 'row', // Hiển thị các thành phần theo chiều ngang
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    margin: 10,
    padding: 10,
    marginBottom:10
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
