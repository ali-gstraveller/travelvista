import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { present,notpresent }  from '../../store/userSlice';
import { useRouter } from 'next/router';

export default function Dashboard() {

    const router = useRouter();
    const [hotels, setHotels] = useState([]);
    const dispatch = useDispatch();
    const { data: session } = useSession();

    console.log('userdata=>', session );

    useEffect(() => {
        fetchHotels();
      }, []);    
    
    const fetchHotels = async () => {
        const res = await fetch('/api/hotels');
        const { data } = await res.json();
        setHotels(data);
    };

    if (session){
        dispatch(present(session?.user))
    }

    const signInHandler = ()=>{
        signIn();
    }

    const signOutHandler = ()=>{
        signOut()  ;
        dispatch(notpresent()) 
    }
    

    return (<div>
        <h4 style={{border:"1px solid black" ,width:'90px',padding:"2px"
         }} > Travel Vista </h4>
        {!session ? (    
        <>  
        <button style={{ marginLeft: '1150px' }} onClick={() =>   signInHandler()   }   >Sign in</button>
<h1 style={{ textAlign: 'center' }} > Welcome, Kindly Login to Continue </h1>
        </>
        ) : (
        <>
            <button style={{ marginLeft: '1150px' }} onClick={() => { signOutHandler()          }    }>Sign out</button>
            <h1 style={{ textAlign: 'center' }} > Welcome, {session.user.name} !  </h1>
        </>
        )}
        <div style={{ backgroundImage:  'url("/cover.webp")',width:'1250px',height:"700px" }} >
            {/* <h1 style={{color:"white", marginLeft:"450px" }} >Kindly enter your preference !</h1> */}
            <input placeholder="where to ?" type="text" style={{ borderRadius:"15px", padding:'9px',marginLeft:"550px" ,marginTop:"50px"   }} />
            <button onClick={()=>{  router.push('/searchPage');  }}  style={{ borderRadius:"15px", padding:'9px'}}> Submit </button>    
        </div>
    </div>
    )
}