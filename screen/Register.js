import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    KeyboardAvoidingView,
    ScrollView,

} from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const toggleSecureTextEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };
    return (
        <View style={{ backgroundColor: '#dadcf2', flex: 1, padding: 10 }}>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView>
                    <View style={{ flex: 18, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../assets/image/logo.png')} style={styles.image} />
                        <Text style={{ fontSize: 25, color: 'black', textAlign: 'center', }}>Welcome to app </Text>
                        <Text style={{ fontSize: 15, textAlign: 'center', }}>Register to continue </Text>

                    </View>
                    <View style={{
                        flex: 30,
                        marginTop: 50,
                        backgroundColor: 'white',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        paddingTop: 10
                    }}>
                        <View style={{}}>
                            <View style={{
                                flexDirection: 'row', borderColor: '#8bd9bc',
                                borderBottomWidth: 1,
                                margin: 5,
                                marginHorizontal: 10,
                                fontSize: 18,
                                paddingLeft: 5
                            }}>
                                <TouchableOpacity
                                    style={{ alignSelf: 'center', marginRight: 10 }}>
                                    <Icon name="user" size={18} color="#8bd9bc" />
                                </TouchableOpacity>
                                <TextInput
                                    placeholder='Name'
                                />

                            </View>

                            <View style={{
                                flexDirection: 'row', borderColor: '#8bd9bc',
                                borderBottomWidth: 1,
                                margin: 5,
                                marginHorizontal: 10,
                                fontSize: 18,
                                paddingLeft: 5
                            }}>
                                <TouchableOpacity
                                    style={{ alignSelf: 'center', marginRight: 10 }}>
                                    <Icon name="envelope" size={18} color="#8bd9bc" />
                                </TouchableOpacity>
                                <TextInput
                                    keyboardType='email-address'
                                    placeholder='Email'
                                />

                            </View>
                            <View style={{
                                flexDirection: 'row', borderColor: '#8bd9bc',
                                borderBottomWidth: 1,
                                margin: 5,
                                marginHorizontal: 10,
                                fontSize: 18,
                                paddingHorizontal: 5
                            }}>
                                <TouchableOpacity
                                    style={{ alignSelf: 'center', marginRight: 10 }}>
                                    <Icon name="lock" size={18} color="#8bd9bc" />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
                                    <TextInput
                                        secureTextEntry={secureTextEntry}
                                        keyboardType='default'
                                        placeholder='Password'
                                        onChangeText={(text) => setPassword(text)}
                                        value={password}
                                    />
                                    <TouchableOpacity
                                        title={secureTextEntry ? 'Show Password' : 'Hide Password'}
                                        onPress={toggleSecureTextEntry}
                                        style={{ alignSelf: 'center', marginRight: 3 }}>
                                        <Icon name="eye" size={20} color="#8bd9bc" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View style={{
                                flexDirection: 'row', borderColor: '#8bd9bc',
                                borderBottomWidth: 1,
                                margin: 5,
                                marginHorizontal: 10,
                                fontSize: 18,
                                paddingHorizontal: 5
                            }}>
                                <TouchableOpacity
                                    style={{ alignSelf: 'center', marginRight: 10 }}>
                                    <Icon name="lock" size={18} color="#8bd9bc" />
                                </TouchableOpacity>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
                                    <TextInput
                                        secureTextEntry={secureTextEntry}
                                        keyboardType='default'
                                        placeholder='Confirm Password'
                                        onChangeText={(text) => setPassword(text)}
                                        value={password}
                                        style={{width:'70%'}}
                                    />
                                    <TouchableOpacity
                                        title={secureTextEntry ? 'Show Password' : 'Hide Password'}
                                        onPress={toggleSecureTextEntry}
                                        style={{ alignSelf: 'center', marginRight: 3 }}>
                                        <Icon name="eye" size={20} color="#8bd9bc" />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                    </View>

                    <View style={{
                        flex: 10,
                        backgroundColor: 'white',
                        borderBottomEndRadius: 20,
                        borderBottomLeftRadius: 20
                    }}>
                        <TouchableOpacity style={styles.bgbutton}>
                            <Text style={{ padding: 8, fontSize: 17, color: '#d5dcf2' }} onPress={() => navigation.navigate('Login')}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Text style={{ padding: 8, fontSize: 13, alignSelf: 'center' }} onPress={() => navigation.navigate('Login')}>You have an account? Click<Text style={{ color: '#bf3b84', fontSize: 15 }}> Sign In</Text> </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 20, }}>
                        <View style={{
                            height: 40,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginHorizontal: 20
                        }}>
                            <View style={{
                                height: 1,
                                backgroundColor: 'black',
                                flex: 1
                            }}></View>
                            <Text style={{
                                padding: 8,
                                fontSize: 14,
                                alignSelf: 'center',
                                color: 'black',
                                marginHorizontal: 5
                            }}>Use other methods?</Text>
                            <View style={{
                                height: 1,
                                backgroundColor: 'black',
                                flex: 1
                            }}></View>
                        </View>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 2,
                            borderRadius: 5,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60%',
                            alignSelf: 'center',
                            borderRadius: 20,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <Text style={{ padding: 8, fontSize: 15, color: 'black' }}>Sign In with Google </Text>
                            <Image source={require('../assets/icon/google.png')} style={{ width: 20, height: 20, marginHorizontal: 10 }} />

                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>

        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    image: { width: 300, height: 150, alignItems: 'center' },
    khunginput: {
        borderColor: '#8bd9bc',
        borderWidth: 2,
        borderRadius: 10,
        padding: 7,
        margin: 5,
        marginHorizontal: 10,
        fontSize: 18,
    },
    bgbutton: {
        backgroundColor: '#718c49',
        alignItems: 'center',
        justifyContent: 'center',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 20,
    }
})