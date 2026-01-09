import {addStudents, viewStudents} from './student.js';
import {register, login} from './employee.js';

addStudents("Sahil Walunj", "sahilwalunj@gmail.com", "Mumbai", "9876543210");

addStudents("Samir Walunj", "samirwalunj@gmail.com", "Pune", "1234567890");

addStudents("Sarthak Kamble", "sarthakkamble@gmail.com", "Delhi", "9876543210");

addStudents("Sanket Patil", "sanketpatil@gmail.com", "Bangalore", "9876543210");

viewStudents();

console.log("Employee Registration and Login");

register("Vighnesh Borhade", "vighneshborhade@gmail.com", "Manager", "1234567890");

register("Amit More", "amitmore@gmail.com", "Developer", "9876543210");

register("Rohit Shinde", "rohitshinde@gmail.com", "Developer", "9876543210");

login("vighneshborhade@gmail.com", "1234567890");
login("amitmore@gmail.com", "9876543210");
