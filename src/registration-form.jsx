import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '', email: '', password: '', confirmPassword:''
    });
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

  
    const validateForm=()=>{
        let isValid = true;
        const objErrors = {};

        //username validation
        if(!formData.username.trim()){
            objErrors.username = 'Username needed';
            isValid = false;
        }

        //email validation
        const regex = / ^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$ /;
        if(!formData.email.trim() || !regex.test(formData.email)){
            objErrors.email = 'Valid email needed';
            isValid = false;
        }
        //password validation- length of password > 8
        if(formData.password.length < 8){
            objErrors.password = 'Password must be atleast 8 chars long';
            isValid = false;
        }

        //confirmPassword validation
        if(formData.password != formData.confirmPassword){
            objErrors.confirmPassword = 'Passwords dont match';
            isValid = false;
        }

        setErrors(objErrors);
        return isValid;

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name] : value});
        setErrors({...errors})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setServerError('');

        if(validateForm()){
            try{
               // const response = await axios.post('api/',formData)
            }catch (error){
                console.log(error);
            }
        } 
    }
    
    return ( 
        <form onSubmit={handleSubmit}>
            {serverError && <div>{serverError}</div>}
            <div>
                <label>Username: </label>
                <input type="text" id="username" name="username"
                value={formData.username} onChange={handleChange}
                />
                {errors.username && <div>{errors.username}</div>}
            </div>
            <div>
                <label>Email: </label>
                <input type="email" id="email" name="email"
                value={formData.email} onChange={handleChange}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" id="password" name="password"
                value={formData.password} onChange={handleChange}
                />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" id="confirmPassword" name="confirmPassword"
                value={formData.confirmPassword} onChange={handleChange}
                />
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
            </div>
            <button type="submit">Register</button>
        </form>
     );
}
 
export default RegistrationForm;