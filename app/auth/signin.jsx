import { StyleSheet, View, Text, TextInput, Pressable, useColorScheme, Image } from 'react-native';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';

const SignIn = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        if (!email || !password) {
            alert('Please fill in all fields');
            return;
        }

        // TODO: Connect with your backend / Firebase Auth
        alert(`Welcome back, ${email}!`);
        router.push('/shop');
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={[styles.header, { color: theme.title }]}>Welcome Back</Text>
                <Text style={[styles.subHeader, { color: theme.text }]}>Sign in to your account</Text>
            </View>

            {/* Form */}
            <View style={styles.form}>
                <Text style={[styles.header2, { color: theme.text }]}>Email</Text>
                <TextInput
                    style={[styles.input, { borderColor: theme.border, color: theme.text }]}
                    placeholder="Email"
                    placeholderTextColor="#888"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
                <Text style={[styles.header2, { color: theme.text }]}>Password</Text>

                <TextInput
                    style={[styles.input, { borderColor: theme.border, marginBottom: 20, color: theme.text }]}
                    placeholder="Password"
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Link href="/shop" style={{ paddingBottom: 10, marginBottom: 20 }}>

                    <Text style={[styles.header2, { color: theme.warning }]}>Forgot Password? </Text>
                </Link>


                <Link href="/shop" style={[styles.card, { marginBottom: 25 }]}>

                    <Text style={styles.cardText}> Login</Text>
                </Link>

                <Pressable onPress={[() => router.push('/auth/signup'), { marginBottom: 30 }]}>
                    <Text style={[styles.linkText, { color: theme.text }]}>
                        Don't have an account?{' '}
                        <Text style={[styles.signUpText, { color: theme.warning }]}>
                            Sign Up
                        </Text>
                    </Text>



                </Pressable>
                <View style={styles.dividerContainer}>
                    <View style={styles.line} />
                    <Text style={[styles.dividerText, { color: theme.text }]}>Or with</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.containers}>
                    <Pressable href="/shop" style={[styles.button, { flexDirection: 'row', display: 'flex', backgroundColor: "#fff" }]}>
                        <Image source={require('../../assets/google-logo.png')} style={[styles.icon, { marginLeft: 55 }]}
                        />
                        <Text style={[styles.cardTexts, { paddingLeft: 20 }]}>Sign in with Google </Text>
                    </Pressable>
                </View>

                <View style={styles.containers}>
                    <Pressable href="/shop" style={[styles.button, { marginBottom: 25, flexDirection: 'row', display: 'flex', backgroundColor: "#fff" }]}>
                        <Image source={require('../../assets/apple-logo.png')} style={[styles.icons, { marginLeft: 50 }]}
                        />
                        <Text style={[styles.cardTexts, { paddingLeft: 18 }]}>Sign in with Apple </Text>
                    </Pressable>
                </View>
            </View>
        </View>

    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },


    icon: {
        height: 30,
        width: 30
    },
    icons: {
        height: 30,
        width: 40
    },
    card: {
        backgroundColor: '#E10600',
        marginTop: 10,
        padding: 15,
        borderRadius: 15,
        width: '100%',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cards: {
        backgroundColor: '#fff',
        marginTop: 5,
        padding: 15,
        borderRadius: 15,
        width: '100%',
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardTexts: {
        // color: '#E10600',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',

    },
    cardText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center'
    },
    headerContainer: {
        marginTop: 50,
        marginBottom: 40,
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
        fontWeight: '500',
    },
    header: {
        fontSize: 28,
        fontWeight: '700',
    },
    header2: {
        fontSize: 16,
        fontWeight: '600',
    },
    subHeader: {
        fontSize: 12,
        fontWeight: '300',
        opacity: 0.6,
        marginTop: 10,
    },
    form: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    input: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
    },
    linkText: {
        textAlign: 'center',
        marginTop: 10,
        fontWeight: '500',
    },
});
