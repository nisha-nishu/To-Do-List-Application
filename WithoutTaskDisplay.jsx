import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';
import { useTasks } from '../context/TaskContext';
import { useRouter } from 'expo-router';

export function WithoutTaskDisplay() {
  const { tasks } = useTasks();
  const router = useRouter();

  const handleAddTask = () => {
    router.push('/edit-task'); // Navigates to Add Task screen
  };

  const handleSearch = () => {
    Alert.alert('Search Feature', 'Search will be implemented soon.');
  };

  const handleFilter = () => {
    Alert.alert('Filter Feature', 'Filter dropdown will be added.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <TouchableOpacity style={styles.menuButton}>
          <View style={styles.menuLine} />
          <View style={styles.menuLine} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchContainer} onPress={handleSearch}>
          <Image
            source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/d50d6c15052f5f4f7faf2d421cd2f3f7eaab9f5e?width=24' }}
            style={styles.searchIcon}
          />
          <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Image
            source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/7088fdca4d84eff85bf695c88621095e80332311?width=90' }}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Manage Your Time Well</Text>
          <Image
            source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/f12937111eda9b21eeb5c63740193938c592e75f?width=108' }}
            style={styles.heroImage}
          />
        </View>

        <View style={styles.tasksHeader}>
          <Text style={styles.tasksTitle}>Tasks</Text>
          <TouchableOpacity onPress={handleFilter}>
            <Image
              source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/fc0d26a5790c5265691980fc8d8ebf9ffb7d4e60?width=48' }}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.tasksContainer}>
          {tasks.length === 0 ? (
            <View style={styles.noTasksView}>
              <Text style={styles.noTasksText}>No tasks yet. Tap + to add one!</Text>
            </View>
          ) : null}
        </View>
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <View style={styles.addButtonInner}>
            <View style={styles.plusVertical} />
            <View style={styles.plusHorizontal} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  menuButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#9C9C9E',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  menuLine: {
    width: 20,
    height: 2,
    backgroundColor: '#020101',
  },
  searchContainer: {
    flex: 1,
    height: 30,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    marginHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    gap: 10,
  },
  searchIcon: {
    width: 12,
    height: 12,
  },
  searchText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  profileButton: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: '#9C9C9E',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 44,
    borderRadius: 15,
  },
  content: {
    flex: 1,
    paddingHorizontal: 35,
  },
  heroSection: {
    height: 106,
    borderRadius: 15,
    backgroundColor: 'rgba(65, 105, 225, 0.76)',
    marginTop: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 29,
    paddingRight: 42,
    justifyContent: 'space-between',
  },
  heroTitle: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
    width: 173,
    lineHeight: 24,
  },
  heroImage: {
    width: 54,
    height: 79,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 46,
    paddingHorizontal: 6,
  },
  tasksTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  filterIcon: {
    width: 24,
    height: 21,
  },
  tasksContainer: {
    flex: 1,
    marginTop: 20,
  },
  bottomSection: {
    position: 'relative',
    height: 69,
    backgroundColor: 'rgba(65, 105, 225, 0.76)',
  },
  addButton: {
    position: 'absolute',
    top: -43,
    left: '50%',
    marginLeft: -41,
    width: 82,
    height: 78,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonInner: {
    width: 82,
    height: 78,
    borderRadius: 41,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
  plusVertical: {
    position: 'absolute',
    width: 2,
    height: 39,
    backgroundColor: '#000',
  },
  plusHorizontal: {
    position: 'absolute',
    width: 32,
    height: 2,
    backgroundColor: '#000',
  },
});

export default WithoutTaskDisplay;