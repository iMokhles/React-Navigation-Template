import { AsyncStorage } from 'react-native';

export default class BCWCurrentUser {

    static isLoggedIn() {
        return AsyncStorage.getItem('userInfo')
            .then(res => res !== null)
            .catch(() => false)
    }
    static logOut() {
        return AsyncStorage.clear();
    }
    static setUsername (username) {
        return AsyncStorage.setItem('username', username)
    }
    static getUsername () {
        return AsyncStorage.getItem('username')
            .then((username) => username || '')
    }
    static setPassword (password) {
        return AsyncStorage.setItem('password', password)
    }
    static getPassword () {
        return AsyncStorage.getItem('password')
            .then((password) => password || '')
    }
    static setUserInfo (userInfo) {
        console.log('INFO: '+JSON.stringify(userInfo));
        return AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
    static getUserInfo() {
        return AsyncStorage.getItem('userInfo')
            .then((userInfo) => JSON.parse(userInfo) || '')
    }
}