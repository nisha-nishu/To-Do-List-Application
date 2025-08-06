import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useTask } from '../context/TaskContext';

export function TaskDisplay() {
  const router = useRouter();
  const { tasks, deleteTask, toggleTaskCompletion } = useTask();

  const handleEditTask = (taskId) => {
    router.push(`/edit-task?taskId=${taskId}`);
  };

  const handleDeleteTask = (taskId) => {
    Alert.alert('Delete Task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', onPress: () => deleteTask(taskId), style: 'destructive' },
    ]);
  };

  const handleAddTask = () => {
    router.push('/edit-task');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header, Categories, etc. (unchanged) */}
      {/* ...keep your existing header and categories code here... */}

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>

          {/* ...keep hero + categories section as-is... */}

          {/* Tasks Section */}
          <View style={styles.tasksSection}>
            <View style={styles.tasksHeader}>
              <Text style={styles.tasksTitle}>Tasks</Text>
              {/* Optional: add filter icon here */}
            </View>

            {tasks.length === 0 ? (
              <Text style={{ textAlign: 'center', marginTop: 10 }}>No tasks available.</Text>
            ) : (
              tasks.map((task) => (
                <View key={task.id} style={styles.taskItem}>
                  <TouchableOpacity
                    style={[
                      styles.checkbox,
                      task.completed && { backgroundColor: 'green' },
                    ]}
                    onPress={() => toggleTaskCompletion(task.id)}
                  />
                  <Text
                    style={[
                      styles.taskText,
                      task.completed && { textDecorationLine: 'line-through', color: 'gray' },
                    ]}
                  >
                    {task.title}
                  </Text>
                  <View style={styles.taskActions}>
                    <TouchableOpacity onPress={() => handleEditTask(task.id)}>
                      <Image
                        source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/25b990fc64c0a02b6df36b7d604a8d68636e4251?width=40' }}
                        style={styles.actionIcon}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
                      <Image
                        source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/7d94becbb8fd663e0b0920ae5a14882c2b69ce69?width=40' }}
                        style={styles.actionIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {/* Add Task Button */}
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
  scrollView: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 28,
    paddingBottom: 100,
  },
  heroSection: {
    height: 106,
    borderRadius: 15,
    backgroundColor: 'rgba(65, 105, 225, 0.76)',
    marginTop: 54,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 13,
    paddingRight: 47,
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
  blurEffect: {
    height: 44,
    marginHorizontal: 13,
    marginTop: -22,
    backgroundColor: 'rgba(65, 105, 225, 0.51)',
    borderRadius: 15,
    // Note: React Native doesn't have CSS blur, so we simulate with opacity
  },
  categoriesSection: {
    marginTop: 56,
  },
  categoriesTitle: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 27,
    paddingHorizontal: 7,
  },
  categoriesGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 13,
  },
  categoryItem: {
    alignItems: 'center',
    gap: 9,
  },
  categoryIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#EDE5E5',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 36,
    height: 29,
  },
  healthIconPlaceholder: {
    width: 36,
    height: 29,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  categoryLabel: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  tasksSection: {
    marginTop: 33,
  },
  tasksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 7,
    marginBottom: 27,
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
  taskItem: {
    height: 66,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EDE5E5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    marginHorizontal: 5,
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 13,
  },
  checkbox: {
    width: 25,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
  },
  taskText: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  taskActions: {
    flexDirection: 'row',
    gap: 5,
  },
  actionIcon: {
    width: 20,
    height: 20,
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

export default TaskDisplay;