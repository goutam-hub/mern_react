import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = async (e) => {
        e.preventDefault();
        

       const res = await fetch('/signin', {
            method:'POST',
            headers:{
                "Content-Type":'application/json'
            },
            body: JSON.stringify({
                email, 
                password
            })
        })
        
        const data = await res.json();
        console.log(data);


        if(data.status === 400 || !data){
            window.alert("failed");
        }else{
            if(data.error){
                console.log(data.error);
            }else{
                console.log(`Success`);
                //history.push('/about');
            }
            
            
        }
    }

    return(
        <>
            <div className='container pt-5'>
                <div className='row justify-content-md-center'>
                    <div className='col-sm-4'>
                        <h5>Login</h5>
                        <form method='POST'>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" 
                                name='email' value={email} onChange={(e) => {setEmail(e.target.value)}} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password"
                                 name='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={userLogin}>Submit</button>
                            <Link className='btn btn-link' to='/signup'>Sign Up</Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;