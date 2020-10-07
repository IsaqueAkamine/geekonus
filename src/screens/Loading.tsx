import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Loading() {
    return (
        <View style={styles.animationContainer}>
            <LottieView
                autoPlay
                style={{
                    width: 400,
                    height: 400,
                    backgroundColor: '#eee',
                }}
                source={require('../assets/loading.json')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    }
});
