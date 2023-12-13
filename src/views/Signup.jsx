import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Modal, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { useNavigation } from "@react-navigation/native";
import Button from '../components/Button';
import COLORS from '../constants/Color';

const Signup = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigation = useNavigation();

  const toggleTermsModal = () => setShowTermsModal(!showTermsModal);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', marginVertical: 12, color: COLORS.black }}>
            Crear una cuenta
          </Text>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Contacta a tu tienda favorita</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>
            Dirección de correo electrónico
          </Text>
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
          <Text style={{ fontSize: 16, fontWeight: 400, marginVertical: 8 }}>Número telefónico</Text>
          <View style={styles.inputContainer}>
            <TextInput placeholder="+593" placeholderTextColor={COLORS.black} keyboardType="numeric" style={styles.phoneCode} />
            <TextInput
              placeholder="Ingresa tu número telefónico"
              placeholderTextColor={COLORS.black}
              keyboardType="numeric"
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
              <Ionicons name={isPasswordShown ? 'eye-off' : 'eye'} size={24} color={COLORS.black} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox style={{ marginRight: 8 }} value={isChecked} onValueChange={setIsChecked} color={isChecked ? COLORS.primary : undefined} />
          <Text>
            {' '}
            <Pressable onPress={toggleTermsModal} style={{ textDecorationLine: 'underline' }}>
              <Text style={{ color: COLORS.primary }}>Acepto los términos y condiciones.</Text>
            </Pressable>
          </Text>
        </View>

        <Button
          title="Registrarse"
          filled
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 18, marginBottom: 4 }}
        />

        <View style={styles.loginLinkContainer}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Ya tienes una cuenta</Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={{ fontSize: 16, color: COLORS.primary, fontWeight: 'bold', marginLeft: 6 }}>
              Inicia sesión
            </Text>
          </Pressable>
        </View>
      </View>

      <Modal animationType="slide" transparent={true} visible={showTermsModal}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ width: '85%', height: '85%' , backgroundColor: COLORS.white, padding: 20, borderRadius: 8 }}>
            {/* Contenido de términos y condiciones */}
            <ScrollView>
            <Text style={styles.title}>Términos y Condiciones de Uso:</Text>
      <Text>
        <Text style={styles.bold}>La aplicación "CLUE"</Text> de Víveres Abuela Ruth te da la bienvenida. Aquí encontrarás nuestras reglas y la política de privacidad.
      </Text>
      <Text style={styles.title}>Uso de la Aplicación:</Text>
      <Text>
        <Text style={styles.bold}>La app es para comprar productos</Text> de Víveres Abuela Ruth, sin restricciones de edad.
      </Text>
      <Text style={styles.title}>Registro y Cuenta de Usuario:</Text>
      <Text>
        Necesitas registrar <Text style={styles.bold}>una cuenta única</Text> para usar la aplicación. Mantén tu cuenta segura.
      </Text>
      <Text style={styles.title}>Compras y Devoluciones:</Text>
      <Text>
        Compra solo con <Text style={styles.bold}>una cuenta registrada</Text>. Aceptamos devoluciones en 24 horas para productos defectuosos o entregas incorrectas.
      </Text>
      <Text style={styles.title}>Propiedad Intelectual:</Text>
      <Text>
        El contenido de la app pertenece a <Text style={styles.bold}>"CLUE"</Text> o está licenciado para su uso.
      </Text>
      <Text style={styles.title}>Responsabilidad:</Text>
      <Text>
        No somos responsables de <Text style={styles.bold}>daños</Text> por el uso de la app.
      </Text>
      <Text style={styles.title}>Política de Privacidad:</Text>
      <Text>
        Guardamos tu información de registro y pedidos realizados.
      </Text>
      <Text style={styles.title}>Uso de la Información:</Text>
      <Text>
        No compartimos tus datos, salvo para transacciones con la tienda Víveres Abuela Ruth.
      </Text>
      <Text style={styles.title}>Seguridad de los Datos:</Text>
      <Text>
        Tomamos medidas para proteger tu información.
      </Text>
      <Text style={styles.title}>Acceso y Control:</Text>
      <Text>
        Puedes acceder a tus datos y solicitar eliminar tu cuenta.
      </Text>
      <Text style={styles.title}>Comunicaciones:</Text>
      <Text>
        Te enviamos actualizaciones relacionadas con tus pedidos.
      </Text>
      <Text style={styles.title}>Cambios en la Política:</Text>
      <Text>
        Nos reservamos el derecho de hacer cambios, notificándote en la app.
      </Text>
      <Text>
        Aceptas que Víveres Abuela Ruth use tu información para mejorar servicios y productos.
      </Text>
      <Text style={styles.title}>Gracias por confiar en nosotros.</Text>
      <Text style={styles.title}>Contacto:</Text>
      <Text>
        Para preguntas, contáctanos a viveresabuelaruth@gmail.com o llama al 02-2386184.
      </Text>
      </ScrollView>
            <Button title="Cerrar" onPress={toggleTermsModal} style={{ marginTop: 10 }} />
          </View>
        </View>
      </Modal>
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
  phoneCode: {
    width: '12%',
    borderRightWidth: 1,
    borderLeftColor: COLORS.grey,
    height: '100%',
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

export default Signup;
