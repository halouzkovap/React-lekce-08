import React,{useState, useEffect} from "react";

const Formlar=()=>{
const[state,setState]=useState("")
const[city,setCity]=useState("")
const[name,setName]=useState("")
const handleInput=(event)=>{
    setState(event.target.value)
}
const handlSelect=(event)=>{
    setCity(event.target.value)
}


useEffect(
 ()=>{
    fetch('https://svatky.adresa.info/json' )
    .then(response => response.json())
    .then(json=>{
      setName  (json[0].name)
    })
 },
 []
)
const [data,setData]=useState("")

useEffect(
    ()=>{
       fetch('https://svatky.adresa.info/json?name='+ state )
       .then(response => response.json())
       .then(json=>{
         setData  (json[0].date)
       })
    },
    [state]
   )

    return(
        <>
           <h2>Dnes má svátek {name}</h2>
         
            <input type="text" value={state} onInput={handleInput}/>
            <h2> date : {data}</h2>

            <h2>Ahoj {state}</h2>

            <select onChange={handlSelect} value={city}>
                <option value ="Ostrava">Ostrava</option>
                <option value="Praha">Praha</option>
                <option value="Brno">Brno</option>
            </select>

            <h2>{city}</h2>
        </>
    )
}

export default Formlar;