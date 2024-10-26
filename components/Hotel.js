import Image from 'next/image';


// components/Item.js
export default function Hotel({ hotel }) {
    return (
      <div>
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <Image src={hotel.image}  width={500} height={500}  /> 
    </div>
    );
} 
  