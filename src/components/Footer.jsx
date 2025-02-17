import React, { useEffect, useState } from 'react'

export const Footer = () => {

    const [ year, setYear ] = useState('2025');

    useEffect(() => {
        const date = new Date();
        setYear(date.getFullYear()); 
        return () => { 
        };
    }, [ year ]);

    return (
        <div className='text-slate-400 mb-10 text-center text-sm font-thin'>@ {year} All Rights Reserved</div>
    )
}
