import { useState } from "react";
import { Text, View, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";

export default function Exercise6() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [editingUser, setEditingUser] = useState(null);

    const handleAddUser = () => {
        if (name && phone && address) {
            setUsers([...users, { id: Date.now(), name, phone, address }]);
            resetForm();
        }
    };

    const handleEditUser = (user) => {
        setEditingUser(user);
        setName(user.name);
        setPhone(user.phone);
        setAddress(user.address);
    };

    const handleUpdateUser = () => {
        setUsers(users.map(user => user.id === editingUser.id ? { ...editingUser, name, phone, address } : user));
        resetForm();
    };

    const handleDeleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const resetForm = () => {
        setEditingUser(null);
        setName("");
        setPhone("");
        setAddress("");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Management</Text>
            <Text style={styles.subtitle}>{editingUser ? "Edit User" : "Add New User"}</Text>
            <Text style={styles.count}>Total Users: {users.length}</Text>

            {/* Input Fields */}
            <TextInput 
                placeholder="Full Name" 
                style={styles.input} 
                value={name} 
                onChangeText={setName} 
                placeholderTextColor="#A0A0A0"
            />
            <TextInput 
                placeholder="Phone Number" 
                style={styles.input} 
                value={phone} 
                onChangeText={setPhone} 
                keyboardType="phone-pad"
                placeholderTextColor="#A0A0A0"
            />
            <TextInput 
                placeholder="Address" 
                style={styles.input} 
                value={address} 
                onChangeText={setAddress} 
                placeholderTextColor="#A0A0A0"
            />

            {/* Add / Update Button */}
            <TouchableOpacity 
                style={styles.button} 
                onPress={editingUser ? handleUpdateUser : handleAddUser}
            >
                <Text style={styles.buttonText}>{editingUser ? "Update User" : "Add User"}</Text>
            </TouchableOpacity>

            {/* User List */}
            <FlatList
                data={users}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.userCard}>
                        <Text style={styles.userText}>
                            {index + 1}. {item.name} 📞 {item.phone} 🏠 {item.address}
                        </Text>
                        <View style={styles.buttonGroup}>
                            <TouchableOpacity style={styles.editButton} onPress={() => handleEditUser(item)}>
                                <Text style={styles.buttonText}>Edit</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteUser(item.id)}>
                                <Text style={styles.buttonText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
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
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: "#A0A0A0",
        marginBottom: 5,
    },
    count: {
        fontSize: 16,
        color: "#4A90E2",
        marginBottom: 15,
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
        marginVertical: 10,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    userCard: {
        width: "100%",
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#2E2E2E",
        marginVertical: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    userText: {
        color: "#FFF",
        fontSize: 16,
        flex: 1,
    },
    buttonGroup: {
        flexDirection: "row",
    },
    editButton: {
        backgroundColor: "#28A745",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: "#DC3545",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
    },
});
