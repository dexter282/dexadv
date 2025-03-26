import { Link } from "expo-router";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Exercises() {

    const exercises = [
        { title: 'Exercise 3', description: '\nCreate a login screen and add a title and description to the card. \nWhen the card is clicked, it should redirect to the login screen.\n Email (Text Input)\n Password (Text Input)\n Login (Button)', href: 'exercises/Exercise3' },
        { title: 'Exercise 4', description: '\nUsing the useState and useEffect hooks, Create a stopwatch with two buttons: \none for Start/Stop and one for Reset. Then, link it to your exercise card.', href: 'exercises/Exercise4' },
        { title: 'Exercise 5', description: '\nCreate a register screen and add a title and description to the card in the exercise tab. \nWhen the card is clicked, it should redirect to the register screen.\n Image (Image picker when image selected should display the image selected)\n Name (Text Input)\n Email (Text Input)\n Password (Text Input)\n Register (Button)', href: 'exercises/Exercise5' },
        { title: 'Exercise 6', description: '\nCreate a simple CRUD using useContext and useReducer', href: 'exercises/Exercise6' },
        { title: 'Exercise 7', description: '\nCreate a simple quiz using the API from Open Trivia Database. The user should be able to input the number of questions they want to answer, with a minimum of \n10 and a maximum of 30. The UI will also be considered in grading this exercise. After completing the quiz, the user score should be displayed as score/total questions.\n\n User Interface: 40%\n Functionality: 60%', href: 'exercises/Exercise7' },
    ]

    return (
        <ScrollView style={{ padding: 20 }}>
            <View style={{ rowGap: 10 }}>
                {exercises.map((exercise, index) => {
                    return (
                        <Link 
                            key={index}
                            href={exercise.href}>
                            <View 
                                style={styles.container}>
                                <Text>{exercise.title}</Text>
                                <Text>{exercise.description}</Text>
                                  
                            </View>
                        </Link>
                    )
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        width: '100%'
    }
})