import React from 'react'
import Link from "next/link";
import styled from 'styled-components'


const Ul = styled.ul`
list-style: none;
display: flex;
justify-content: center;
li {
    padding: 22px 15px;
    font-size: x-large;
}
@media (min-width: 1023px){ 
display: none;
}
@media (max-width: 1023.1px){ 
    
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)': 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    margin: 0;
    align-items:center;
    transition: transform .3s ease-in-out;
}
`;

export default function NavMenu(props) {

    const setOpen = props.setOpen
    const open = props.open

    return (
        <Ul  open={props.open}>
            <div></div>
            <Link href={'/'}>
                <li onClick={() => setOpen(!open)} className="text-black text-2xl">Home</li>
            </Link>

            <Link href={'/about'}>
                <li onClick={() => setOpen(!open)} className="text-black text-2xl">About</li>
            </Link>

            <Link href={'/work'}
                >
                <li onClick={() => setOpen(!open)} className="text-black text-2xl">Work</li>
            </Link>

            <Link href={'/contact'}
                >
                 <li onClick={() => setOpen(!open)} className="text-black text-2xl">Contact</li>
            </Link>
        </Ul>
    )
}