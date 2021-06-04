
import React, { useState, useEffect } from 'react';


const TextChange = () => {
    
    
    const [name, setName] = useState('graduation by kanye west')

    useEffect(() => {
        let names = ['graduation by kanye west', 'MBDTF by kanye west', 'deann by zach bryan', 'kiwanuka by michael kiwanuka',
                     'the life of pablo by kanye west', 'ginger by brockhampton', 'elisabeth by zach bryan',
                     'process by sampha', 'because the internet by childish gambino', 'man on the moon by kid cudi', 'care for me by saba'];
        let count = 0;

        const timer = setInterval(() => {
            setName(() => {
                const newName = count >= names.length ? (count = 0, names[count++]) : names[count++];
                return newName;
            })
            console.log(count)
        }, 2700);

        return () => {
            clearInterval(timer);
          };
          
    }, []);
    
    return(
        <p style={{ color: '#026acc'}}>  {name}</p>
    )
}

export default TextChange;