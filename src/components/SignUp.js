
import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';

const SignUp = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name:'', email:'', phone:'', work:'', password:'', cpassword:''
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value= e.target.value;
        setUser({...user, [name]:value});
        
    }

    const postData = async (e) => {
        e.preventDefault();
        const {name, email, phone, work, password, cpassword}=user;

        const res = await fetch('/register',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })

        });
        const data = await res.json();

        if(data.status === 422 || !data){
            window.alert("Failed")
        }else{
            window.alert('Success')
            history.push('/login');
        }

    }

    return(
        <>
            <div className='container pt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-sm-4'>
                        <h5>Sign Up</h5>
                        <form method='POST'>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" 
                                    value={user.name}
                                    onChange={handleInput}
                                id="name" name="name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" 
                                    value={user.email}
                                    onChange={handleInput}
                                id="email" name="email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone</label>
                                <input type="number" className="form-control" 
                                    value={user.phone}
                                    onChange={handleInput}
                                id="phone" name="phone" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="work">Work</label>
                                <input type="text" className="form-control" 
                                    value={user.work}
                                    onChange={handleInput}
                                id="work" name="work" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" 
                                    value={user.password}
                                    onChange={handleInput}
                                id="password" name="password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cpassword">Confirm Password</label>
                                <input type="password" className="form-control" 
                                    value={user.cpassword}
                                    onChange={handleInput}
                                id="cpassword" name="cpassword" />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={postData}>Submit</button>
                            <Link className='btn btn-link' to='/login'>Login</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;