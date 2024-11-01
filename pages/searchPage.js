import Image from 'next/image'

export default function searchPage(){

    return (
        <div>
            {/* <h1 style={{textAlign:'center'}}>   Search page </h1> */}
            <Image
      src="/tripCom.webp"
      width={400}
      height={400}
      alt="Picture of the author"
      onClick={  ()=>{   window.location.href="https://www.trip.com/flights/?to=home&Allianceid=5546479&SID=124875388&trip_sub1=gstravellers&trip_sub3=D656182"   }    }
    />
        </div>
    )

}