import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Pressable,
    useColorScheme,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

const SignUp = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    const router = useRouter();
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={[styles.header, { color: theme.title }]}>
                    Sign Up
                </Text>
                <Text style={[styles.subHeader, { color: theme.text }]}>
                    Create account and choose favourite menu
                </Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <Text style={[styles.header2, { color: theme.text }]}>Name</Text>
                <TextInput
                    style={[styles.input, { borderColor: theme.border, color: theme.text }]}
                    placeholder="Your name"
                    placeholderTextColor="#888"
                    keyboardType="default"
                    autoCapitalize="words"
                    value={name}
                    onChangeText={setName}
                />
                <Text style={[styles.header2, { color: theme.text }]}>Email</Text>
                <TextInput
                    style={[styles.input, { borderColor: theme.border, color: theme.text }]}
                    placeholder="Your email"
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={[styles.header2, { color: theme.text }]}>Password</Text>
                <TextInput
                    style={[
                        styles.input,
                        { borderColor: theme.border, color: theme.text },
                    ]}
                    placeholder="Your password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                {/* Register button */}
                <Pressable
                    style={[styles.card, { marginTop: 10 }]}
                    onPress={() => router.push('/shop')}
                >
                    <Text style={styles.cardText}>Register</Text>
                </Pressable>

                {/* Sign in link */}

                <Text style={[styles.linkText, { color: theme.text }]}>
                    Have an account?{' '}
                    <Link href="/auth/signin" >
                        <Text style={{ color: theme.warning }}>Sign In</Text></Link>
                </Text>




                {/* T&C's link */}
                <Pressable
                    onPress={() => router.push('/auth/signup')}
                    style={{ marginTop: 200 }}
                >
                    <Text style={[styles.linkText, { color: theme.text, opacity: 0.5 }]}>
                        By clicking Register, you agree to our{' '}
                    </Text>
                    <Text style={[styles.linkText, { color: theme.warning, paddingTop: 5 }]}>Terms and Data Policy</Text>

                </Pressable>
            </View>
        </View>
    );
};

export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },

    headerContainer: {
        marginTop: 20,
        marginBottom: 30,
    },

    header: {
        fontSize: 26,
        fontWeight: '900',
    },

    subHeader: {
        fontSize: 12,
        opacity: 0.6,
        marginTop: 10,
    },

    form: {
        flex: 1,
    },

    header2: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },

    input: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },

    card: {
        backgroundColor: '#E10600',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginBottom: 20,
    },

    cardText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

    linkText: {
        textAlign: 'center',
        fontWeight: '500',
    },

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },

    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },

    dividerText: {
        marginHorizontal: 12,
        fontSize: 13,
        opacity: 0.5,
    },

    socialButton: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },

    icon: {
        width: 24,
        height: 24,
        marginRight: 12,
    },

    icons: {
        width: 24,
        height: 24,
        marginRight: 12,
    },

    cardTexts: {
        fontSize: 16,
        fontWeight: '600',
    },
});
