import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image } from 'react-native';

const RegisterPage: React.FC<any> = ({ navigation }) => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const goToLogin = () => {
    navigation.navigate('LoginPage');
  };

  const handleSignUp = () => {
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={username}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
                {showPassword ? (
                <Image source={require('../assets/hide.png')} style={styles.eyeIcon} />
                ) : (
                <Image source={require('../assets/view.png')} style={styles.eyeIcon} />
                )}
            </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
            <TextInput
                style={styles.passwordInput}
                placeholder="Confirm Password"
                secureTextEntry={!showPassword}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
                {showPassword ? (
                <Image source={require('../assets/hide.png')} style={styles.eyeIcon} />
                ) : (
                <Image source={require('../assets/view.png')} style={styles.eyeIcon} />
                )}
            </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleSignUp} style={styles.signupButton}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.signInContainer}>
        <Text style={styles.signinText}>Already have an account? </Text>
        <TouchableOpacity onPress={goToLogin}>
          <Text style={styles.signinlink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  signInContainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333333',
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginBottom:20
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    paddingHorizontal: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
  input: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
  },
  signinText: {
    marginTop: 10,
    color: 'black',
  },
  signinlink: {
    marginTop: 10,
    color: 'blue',
  },
});

export default RegisterPage;
