import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import COLORS from '../constants/Color'; // Corregir la importación de 'color'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Button from '../components/Button';

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
            Hola ¡Bienvenido de nuevo! 👋
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>¡Hola de nuevo te hemos extrañado!</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Dirección de correo electrónico</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Introduce tu dirección de correo electrónico"
              placeholderTextColor={COLORS.black}
              keyboardType="email-address"
              style={{ flex: 1 }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Contraseña</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Ingresa tu contraseña"
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              style={{ flex: 1 }}
            />

            <TouchableOpacity onPress={() => setIsPasswordShown(!isPasswordShown)} style={styles.eyeIconContainer}>
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={COLORS.black} />
              ) : (
                <Ionicons name="eye" size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Iniciar sesión"
          filled
          onPress={() => navigation.navigate('Home')} // Reemplaza 'Onboarding' con el nombre correcto de tu pantalla de onboarding
          style={{ marginTop: 18, marginBottom: 4 }}
        />

        <View style={styles.loginLinkContainer}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>¿No tienes una cuenta?</Text>
          <Pressable onPress={() => navigation.navigate('Signup')}>
            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: 'bold', marginLeft: 6 }}> Registro</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 22,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
  },
};

export default Login;
