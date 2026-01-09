const employees = [];

const register = (name , email, password, contact) =>{
    const employee = {
        name: name,
        email: email,
        password: password,
        contact: contact,
    };

    employees.push(employee);
    console.log("Employee registered successfully");
}

const login = (email, password) =>{
    let found = false;
    employees.forEach((employee) => {
        if (employee.email === email && employee.password === password)
        {
            found = true;
            console.log("Login successful. Welcome " + employee.name + "!");
        }
        });
    if (!found) {
        console.log("Login failed. Invalid email or password.");
    };   
}
export { register, login};
