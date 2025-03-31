import { Link } from "expo-router";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function Exercises() {
    const exercises = [
        { title: "Exercise 3", description: "Login screen with email, password & button.", href: "exercises/Exercise3" },
        { title: "Exercise 4", description: "Stopwatch with Start/Stop & Reset.", href: "exercises/Exercise4" },
        { title: "Exercise 5", description: "Register screen with image picker.", href: "exercises/Exercise5" },
        { title: "Exercise 6", description: "Simple CRUD with useContext & useReducer.", href: "exercises/Exercise6" },
        { title: "Exercise 7", description: "Quiz using Open Trivia API.", href: "exercises/Exercise7" },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {exercises.map((exercise, index) => (
                <Link key={index} href={exercise.href} asChild>
                    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
                        <Text style={styles.title}>{exercise.title}</Text>
                        <Text style={styles.description}>{exercise.description}</Text>
                    </TouchableOpacity>
                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        padding: 20,
        gap: 15,
    },
    card: {
        backgroundColor: "#4A90E2", // Modern blue
        padding: 20,
        borderRadius: 12,
        elevation: 5, // Shadow for Android
        shadowColor: "#000", // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#E0E0E0",
    },
});
