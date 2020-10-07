import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Dashboard() {
    return (
        <View style={styles.container}>
            <Text>Dashboard screen</Text>
        </View>
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})