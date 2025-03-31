import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Stopwatch() {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [start]);

    function handleReset() {
        setCount(0);
        setStart(false);
    }

    const hours = Math.floor(count / 360000);
    const minutes = Math.floor((count % 360000) / 6000);
    const seconds = Math.floor((count % 6000) / 100);
    const milliseconds = count % 100;

    return (
        <View style={styles.container}>
            {/* Timer Display */}
            <Text style={styles.timerText}>
                {hours < 10 ? "0" : ""}{hours}:
                {minutes < 10 ? "0" : ""}{minutes}:
                {seconds < 10 ? "0" : ""}{seconds}.
                {milliseconds < 10 ? "0" : ""}{milliseconds}
            </Text>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    onPress={() => setStart(!start)} 
                    style={[styles.button, start ? styles.stopButton : styles.startButton]}
                >
                    <Text style={styles.buttonText}>{start ? "Stop" : "Start"}</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={handleReset} 
                    style={[styles.button, styles.resetButton]}
                >
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
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
    timerText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 40,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 20,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: "center",
        minWidth: 120,
    },
    startButton: {
        backgroundColor: "#4CAF50",
    },
    stopButton: {
        backgroundColor: "#E53935",
    },
    resetButton: {
        backgroundColor: "#757575",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});
