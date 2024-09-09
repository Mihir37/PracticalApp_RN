import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'react-native-image-picker';
import {PermissionsAndroid, Platform} from 'react-native';

export default function AccountScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [imageUri, setImageUri] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
    }
  };

  const pickImageFromGallery = async () => {
    const result = await ImagePicker.launchImageLibrary({});
    if (result.assets) {
      setImageUri(result.assets[0].uri);
    }
  };

  const pickImageFromCamera = async () => {
    const result = await ImagePicker.launchCamera({});
    if (result.assets) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter some text"
        placeholderTextColor="#6a0dad"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowDatePicker(true)}>
        <Text style={styles.buttonText}>Select Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={(event, date) => {
            setShowDatePicker(false);
            if (date) {
              setSelectedDate(date);
            }
          }}
        />
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowTimePicker(true)}>
        <Text style={styles.buttonText}>Select Time</Text>
      </TouchableOpacity>
      {showTimePicker && (
        <DateTimePicker
          value={selectedTime}
          mode="time"
          display="default"
          onChange={(event, time) => {
            setShowTimePicker(false);
            if (time) {
              setSelectedTime(time);
            }
          }}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={pickImageFromGallery}>
        <Text style={styles.buttonText}>Pick Image from Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={pickImageFromCamera}>
        <Text style={styles.buttonText}>Pick Image from Camera</Text>
      </TouchableOpacity>

      {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a0dad',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#6a0dad',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    color: '#6a0dad',
  },
  button: {
    backgroundColor: '#6a0dad',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 8,
    alignSelf: 'center',
  },
});
