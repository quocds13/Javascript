'use strict'

//Lưu và lấy dữ liệu từ Storage
// const saveToStorage = async (key, value) =>await new Promise(resolve => resolve(localStorage.setItem(key, value))) ;
const saveToStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getFromStorage = key => JSON.parse(localStorage.getItem(key))||[];
const removeFromStorage = key => localStorage.removeItem(key);

//BIẾN TOÀN CỤC
//Mảng người dùng
let userArr = getFromStorage("USER_ARRAY");
//Biến user hiện tại
let currentUser = getFromStorage("CURRENT_USER");
//Mảng todo
let todoArr = getFromStorage('TODO_ARRAY');