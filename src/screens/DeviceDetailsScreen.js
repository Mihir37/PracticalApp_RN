import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default function DeviceDetailsScreen() {
  const [appVersion, setAppVersion] = useState('');
  const [buildVersion, setBuildVersion] = useState('');
  const [bundleId, setBundleId] = useState('');
  const [batteryLevel, setBatteryLevel] = useState('');
  const [diskSpace, setDiskSpace] = useState('');

  useEffect(() => {
    setAppVersion(DeviceInfo.getVersion());
    setBuildVersion(DeviceInfo.getBuildNumber());
    setBundleId(DeviceInfo.getBundleId());

    DeviceInfo.getBatteryLevel().then(level =>
      setBatteryLevel((level * 100).toFixed(0) + '%'),
    );
    DeviceInfo.getTotalDiskCapacity().then(space =>
      setDiskSpace((space / (1024 * 1024 * 1024)).toFixed(2) + ' GB'),
    );
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Details</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>App Version:</Text>
        <Text style={styles.value}>{appVersion}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Build Version:</Text>
        <Text style={styles.value}>{buildVersion}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Bundle Identifier:</Text>
        <Text style={styles.value}>{bundleId}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Battery Level:</Text>
        <Text style={styles.value}>{batteryLevel}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Total Disk Space:</Text>
        <Text style={styles.value}>{diskSpace}</Text>
      </View>
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
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  value: {
    fontSize: 16,
    color: '#6a0dad',
  },
});
