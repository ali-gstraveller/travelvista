import Image from 'next/image';


// components/Item.js
export default function Hotel({ hotel }) {
    return (
      <div>
        <h3> Name:  {hotel.name}</h3>
        <Image src={hotel.image}  width={500} height={500}  />
        <p> Price:   {hotel.price}  </p> 
        <p> Rating:  {hotel.rating} </p>
    </div>
    );
} 
  