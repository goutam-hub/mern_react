import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';



const About = () => {
    const history = useHistory();
    const [userData, setUserData]= useState();
    const callAboutPage = async () => {
        try{
            const res = await fetch('/aboutback', {
                method: 'GET',
                headers:{
                    Accept: "application/json",
                    "Content-Type":"application/json"
                },
                credentials: "include"
            });
            const Data = await res.json();
            console.log(Data);
            setUserData(Data);

            console.log(userData);


            if (!res.status === 200){
                const error = new Error(res.error);
                throw error;
                
            }

        }catch(err){
            console.log(err);
            history.push('/login'); 
        }
    }

    // useEffect(() => {
    //     callAboutPage();
    // }, []);
    useEffect(() => {
        callAboutPage();
        //  eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    console.log(userData);
    return(
        <>
            <div className='container pt-5'>
                <form method='GET'>
                <div className='row justify-content-md-center'>
                    <div className='col-md-8'>
                        <div className="card mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-3">
                                <img src="https://picsum.photos/200/300" width='100%'  alt="About"/>
                                </div>
                                <div className="col-md-9">
                                <div className="card-body">
                                    
                                    <h5 className="card-title">{userData ? userData.name : null}</h5>
                                    <p className="card-text">{userData ? userData.email : null}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </>
    );
}

export default About;