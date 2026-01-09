const Students = [];

function addStudents(name, email, city, contact) {
    const student = {
        name: name,
        email: email,
        city: city,
        contact: contact
    };
    Students.push(student);
    console.log("student added successfully");
}

function viewStudents() {
    console.log("List Of Students");
    for (let i = 0; i < Students.length; i++){
        console.log('Name:',Students[i].name);
        console.log('Email:',Students[i].email);
        console.log('City:',Students[i].city);
        console.log('Contact:',Students[i].contact);
        console.log('-------------------');
    }
}
export { addStudents, viewStudents };
