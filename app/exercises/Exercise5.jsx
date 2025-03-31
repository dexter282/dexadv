import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ExerciseHome() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const handleRegister = () => {
        if (name && email && password) {
            setSubmitted(true);
        }
    };

    return (
        <View style={styles.container}>
            {!submitted ? (
                <>
                    <Text style={styles.title}>Create an Account</Text>

                    {/* Image Picker */}
                    <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
                        <Text style={styles.imagePickerText}>
                            {image ? "Change Image" : "Select Profile Picture"}
                        </Text>
                    </TouchableOpacity>
                    {image && <Image source={{ uri: image }} style={styles.image} />}

                    {/* Input Fields */}
                    <TextInput
                        placeholder="Full Name"
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#A0A0A0"
                    />
                    <TextInput
                        placeholder="Email Address"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholderTextColor="#A0A0A0"
                    />
                    <TextInput
                        placeholder="Password"
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor="#A0A0A0"
                    />

                    {/* Register Button */}
                    <TouchableOpacity style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>User Details</Text>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <Text style={styles.detailText}>👤 {name}</Text>
                    <Text style={styles.detailText}>📧 {email}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1E1E1E",
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 20,
    },
    imagePicker: {
        backgroundColor: "#4A90E2",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 10,
    },
    imagePickerText: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    input: {
        width: "90%",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#2E2E2E",
        color: "#FFF",
        fontSize: 16,
        marginVertical: 8,
    },
    button: {
        backgroundColor: "#4A90E2",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        width: "90%",
        marginTop: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginVertical: 15,
    },
    detailsContainer: {
        alignItems: "center",
    },
    detailText: {
        fontSize: 18,
        marginTop: 10,
        color: "#FFF",
    },
});
