export const CheckValidData = (email,password,name)=>{
    const isEmailValid = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isNameValid = /^[A-Za-z][A-Za-z\s'-]{1,49}$/.test(name);

     if(!isEmailValid) return "Email ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    if(!isNameValid) return "Name is not valid";

    return null;
}
