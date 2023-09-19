import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Settings() {
    return (
      <View style={styles.container}><LinearGradient
      // Background Linear Gradient
      colors={['#65C8FF','white']}
      start={[0.3, 0]}
      end={[0.7,0.6]}
      style={styles.background}
    >
    
      <Text>Settings</Text>

    </LinearGradient>
      </View>
    );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      width: '100%',
      height: '100%',
      opacity: 0.95,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });