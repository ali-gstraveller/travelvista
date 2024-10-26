import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react';

export default function Dashboard() {

    const [hotels, setHotels] = useState([]);

    const { data: session } = useSession();

    useEffect(() => {
        fetchHotels();
      }, []);    
    
    const fetchHotels = async () => {
        const res = await fetch('/api/hotels');
        const { data } = await res.json();
        setHotels(data);
      };
    

    return (<div>
        <h4 style={{border:"1px solid black" ,width:'90px',padding:"2px"
         }} > Travel Vista </h4>
        {!session ? (    
        <>  
        <button style={{ marginLeft: '1150px' }} onClick={() => signIn()}>Sign in</button>
<h1 style={{ textAlign: 'center' }} > Welcome, Kindly Login to Continue </h1>
        </>
        ) : (
        <>
            <button style={{ marginLeft: '1150px' }} onClick={() => signOut()}>Sign out</button>
            <h1 style={{ textAlign: 'center' }} > Welcome, {session.user.name} !  </h1>
        </>
        )}
        <div style={{ backgroundImage:  'url("/cover.webp")',width:'1250px',height:"700px" }} >
            {/* <h1 style={{color:"white", marginLeft:"450px" }} >Kindly enter your preference !</h1> */}
            <input placeholder="where to ?" type="text" style={{ borderRadius:"15px", padding:'9px',marginLeft:"550px" ,marginTop:"50px"   }} />
            <button style={{ borderRadius:"15px", padding:'9px'}}  > Submit </button>
    
        
        </div>
    </div>
    )
}