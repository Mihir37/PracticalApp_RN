import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <View style={styles.headerIcons}>
          <Icon name="bell" size={24} color="#fff" style={styles.icon} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Icon
              name="ellipsis-v"
              size={24}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Modal for Settings and Logout */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableOpacity
          style={styles.modalBackdrop}
          onPress={() => setModalVisible(false)}>
          <View style={styles.modalBox}>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="cog" size={24} color="#6a0dad" />
              <Text style={styles.modalText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalOption}>
              <Icon name="sign-out" size={24} color="#6a0dad" />
              <Text style={styles.modalText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Upcoming Consultations */}
      <Text style={styles.sectionTitle}>Upcoming Consultations</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dr. Marta Juarez</Text>
        <Text style={styles.cardSubtitle}>Dr. Hans Gerhoff</Text>
        <View style={styles.cardFooter}>
          <Icon name="stethoscope" size={24} color="#6a0dad" />
          <Text style={styles.cardFooterText}>2</Text>
        </View>
      </View>

      {/* Medical Files */}
      <Text style={styles.sectionTitle}>Medical Files</Text>
      <View style={styles.card}>
        <View style={styles.fileList}>
          <Text style={styles.fileItem}>Blood tests.pdf</Text>
          <Text style={styles.fileItem}>Cardiology results.pdf</Text>
          <Text style={styles.fileItem}>Blood Tests 20-02-2020.pdf</Text>
          <Text style={styles.fileItem}>MRI results.pdf</Text>
        </View>
        <View style={styles.cardFooter}>
          <Icon name="heartbeat" size={24} color="#6a0dad" />
          <Text style={styles.cardFooterText}>7</Text>
        </View>
      </View>

      {/* Bottom Cards for Schedule and Call */}
      <View style={styles.bottomCardsContainer}>
        <TouchableOpacity style={styles.bottomCard}>
          <Icon name="plus" size={24} color="#6a0dad" />
          <Text style={styles.bottomCardText}>Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomCard}>
          <Icon name="phone" size={24} color="#6a0dad" />
          <Text style={styles.bottomCardText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#6a0dad',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    paddingLeft: 50,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
    color: '#6a0dad',
  },
  card: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6a0dad',
    marginVertical: 5,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardFooterText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#6a0dad',
  },
  fileList: {
    marginBottom: 10,
  },
  fileItem: {
    fontSize: 14,
    marginVertical: 2,
    color: '#6a0dad',
  },
  bottomCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  bottomCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    width: '45%',
    alignItems: 'center',
  },
  bottomCardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6a0dad',
  },
  modalBackdrop: {
    flex: 1,
  },
  modalBox: {
    backgroundColor: '#fff',
    position: 'absolute',
    top: 80,
    right: 20,
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  modalText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#6a0dad',
  },
});
