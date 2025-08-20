import React, { useState } from 'react';
import {
    View,
    Text,
    Button,
    Alert,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { multiply } from 'react-native-reading-card-br301';
import CardReaderModule from 'react-native-reading-card-br301';

const App = () => {
    const [result, setResult] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const testMultiply = async () => {
        setLoading(true);
        try {
            const result = await multiply(6, 7);
            setResult(result);
            Alert.alert('Success', `6 × 7 = ${result}`);
        } catch (error) {
            Alert.alert('Error', `Failed to multiply: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const testCardReader = () => {
        try {
            // ตัวอย่างการใช้งาน CardReaderModule
            // (คุณต้องเพิ่ม method จริงตาม BR301 API)
            console.log('CardReaderModule available:', CardReaderModule);
            Alert.alert('Info', 'CardReaderModule is ready for use');
        } catch (error) {
            Alert.alert('Error', `CardReader error: ${error.message}`);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <View style={styles.content}>
                    <Text style={styles.title}>
                        React Native Reading Card BR301
                    </Text>
                    <Text style={styles.subtitle}>
                        Version 1.2.0 - React Native 0.81.0
                    </Text>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Test Multiply Function</Text>
                        <Button
                            title={loading ? "Testing..." : "Test 6 × 7"}
                            onPress={testMultiply}
                            disabled={loading}
                        />
                        {result !== null && (
                            <Text style={styles.result}>Result: {result}</Text>
                        )}
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Test Card Reader Module</Text>
                        <Button
                            title="Check Card Reader"
                            onPress={testCardReader}
                        />
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.infoTitle}>Features:</Text>
                        <Text style={styles.infoText}>✅ React Native 0.81.0 Support</Text>
                        <Text style={styles.infoText}>✅ New Architecture (Fabric + TurboModules)</Text>
                        <Text style={styles.infoText}>✅ TypeScript Support</Text>
                        <Text style={styles.infoText}>✅ iOS 13.4+ & Android API 24+</Text>
                        <Text style={styles.infoText}>✅ BR301 Card Reader Integration</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        color: '#666',
    },
    section: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    result: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        color: '#007AFF',
    },
    info: {
        backgroundColor: '#e8f4fd',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    infoText: {
        fontSize: 14,
        marginBottom: 5,
        color: '#555',
    },
});

export default App;
