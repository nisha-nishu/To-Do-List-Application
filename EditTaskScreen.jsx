import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useRouter } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export function EditTaskScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // Handle save logic here
    console.log('Saving task:', { title, description, dueDate });
    router.back();
  };

  const handleHome = () => {
    router.push('/(tabs)');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(65, 105, 225, 0.76)" />

      {/* Main Background */}
      <View style={styles.blueBackground}>

        {/* White Content Container */}
        <View style={styles.whiteContainer}>

          {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <View style={styles.backButtonInner}>
              {/* Back Arrow SVG replacement */}
              <View style={styles.arrowContainer}>
                <View style={styles.arrowLine} />
                <View style={styles.arrowHead} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Title Section */}
          <View style={[styles.formSection, { top: 251 }]}>
            <Text style={styles.fieldLabel}>Title</Text>
            <TextInput
              style={styles.textInput}
              value={title}
              onChangeText={setTitle}
              placeholder=""
              placeholderTextColor="#999"
            />
            <View style={styles.underline} />
          </View>

          {/* Description Section */}
          <View style={[styles.formSection, { top: 349 }]}>
            <Text style={styles.fieldLabel}>Description</Text>
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={setDescription}
              placeholder=""
              placeholderTextColor="#999"
              multiline
            />
            <View style={styles.underline} />
          </View>

          {/* Due Date Section */}
          <View style={[styles.formSection, { top: 470 }]}>
            <Text style={styles.fieldLabel}>Due Date</Text>
            <TextInput
              style={styles.textInput}
              value={dueDate}
              onChangeText={setDueDate}
              placeholder=""
              placeholderTextColor="#999"
            />
            <View style={styles.underline} />
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

        </View>

        {/* Blue Bottom Section */}
        <View style={styles.bottomBlueSection} />

        {/* Floating Home Button */}
        <TouchableOpacity style={styles.homeButton} onPress={handleHome}>
          <View style={styles.homeButtonInner}>
            <Image
              source={{ uri: 'https://api.builder.io/api/v1/image/assets/TEMP/7d1736ee74c1eb368a06134b8470f0a807d5b08c?width=76' }}
              style={styles.homeIcon}
            />
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(65, 105, 225, 0.76)',
  },
  blueBackground: {
    flex: 1,
    backgroundColor: 'rgba(65, 105, 225, 0.76)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  whiteContainer: {
    width: 351,
    height: 800,
    backgroundColor: '#FFF',
    position: 'absolute',
    top: 22,
    left: (screenWidth - 351) / 2,
  },
  backButton: {
    position: 'absolute',
    top: 24,
    left: 16,
    width: 50,
    height: 50,
    zIndex: 10,
  },
  backButtonInner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderColor: '#9C9C9E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowContainer: {
    width: 28,
    height: 16,
    position: 'relative',
  },
  arrowLine: {
    position: 'absolute',
    top: 7,
    left: 0,
    width: 24,
    height: 2,
    backgroundColor: '#000',
  },
  arrowHead: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    borderRightWidth: 8,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: '#000',
  },
  formSection: {
    position: 'absolute',
    left: 44,
    width: 264,
  },
  fieldLabel: {
    fontFamily: 'Inter',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginBottom: 8,
  },
  textInput: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#000',
    paddingVertical: 8,
    backgroundColor: 'transparent',
    minHeight: 32,
  },
  underline: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginTop: 4,
  },
  saveButton: {
    position: 'absolute',
    top: 594,
    left: 42,
    width: 107,
    height: 32,
    backgroundColor: 'rgba(65, 105, 225, 0.76)',
    borderWidth: 1,
    borderColor: '#EDE5E5',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  saveButtonText: {
    fontFamily: 'Inter',
    fontSize: 20,
    fontWeight: '700',
    color: '#FFF',
  },
  bottomBlueSection: {
    position: 'absolute',
    bottom: 0,
    left: (screenWidth - 351) / 2,
    width: 351,
    height: 69,
    backgroundColor: 'rgba(65, 105, 225, 0.76)',
  },
  homeButton: {
    position: 'absolute',
    bottom: 30,
    left: (screenWidth - 82) / 2,
    width: 82,
    height: 78,
  },
  homeButtonInner: {
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
  homeIcon: {
    width: 38,
    height: 36,
  },
});

export default EditTaskScreen;