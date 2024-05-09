import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

const LoginPage: React.FC<any> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const goToRegister = () => {
    navigation.navigate('RegisterPage');
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, !isEmailValid && styles.inputError]}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          onBlur={() => setIsEmailValid(validateEmail(email))}
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
      </View>
      <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signUpContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={styles.signuplink}>Sign Up</Text>
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
  signUpContainer: {
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
  input: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 15,
    borderRadius: 30,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    paddingVertical: 5,
    paddingHorizontal: 20,
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
  loginButton: {
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
  signupText: {
    marginTop: 10,
    color: 'black',
  },
  signuplink: {
    marginTop: 10,
    color: 'blue',
  },
  forgotPasswordButton: {
    marginRight: 50,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  forgotPasswordButtonText: {
    color: 'blue',
    marginBottom: 20,
    // alignSelf: 'flex-end',
  },
});

export default LoginPage;
