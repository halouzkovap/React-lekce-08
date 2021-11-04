import React,{useState,useEffect} from 'react';

const WordTime=()=>{
    const [timezone,setTimezone]=useState("")
    const [datetime,setDatetime]=useState("")

    useEffect(
        ()=>{
           fetch('https://worldtimeapi.org/api/timezone/'+ timezone )
           .then(response => response.json())
           .then(json=>{
             setDatetime  (json.datetime)
           })
        },
        [timezone]
       )

    return(
        <>
          <select  value={timezone}
              onChange={(e) => setTimezone(e.target.value)}>
	          <option value="America/New_York">New York</option>
	          <option value="Europe/London">Londýn</option>
	          <option value="Europe/Moscow">Moskva</option>
	          <option value="Europe/Prague">Praha</option>
	          <option value="Asia/Hong_Kong">Hong Kong</option>
	          <option value="Asia/Jerusalem">Jeruzalém</option>
            </select>

            <h3>time: {datetime}</h3>
        </>
    )
}

export default WordTime;