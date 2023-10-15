import { useEffect,useState } from "react";
//hooks are basically functions.
//hooks purely js mein hi hote toh file js mein hi rakhna ek achi practice yeahi bolti h.
//custome hooks inbuild hooks ko bhi use krti hai
function useCurrency(currency){
    useEffect(()=>{
        const [data,setData]=useState({});
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)//api se jo data aaya hai vo jo hai vo basically string m hai  lg raha hai jsx type but  hai string.
        .then((res)=> res.json() )//convert to json
        .then((res)=> setData[currency])
        console.log(data);

    },[currency])
    console.log(data);
    return data

}
export default usecurrencyinfo;
