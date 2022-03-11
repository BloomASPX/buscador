import React from 'react';
import './Card.css';



export default function Card(props){
    return (
        <main className='mainCard'>
            <h2>CEP: {props.info.cep}</h2>

            <span>Log: {props.info.logradouro}</span>
            <span>Complemento: {props.info.complemento}</span>
            <span>Bairro: {props.info.bairro}</span>
            <span>{props.info.localidade} - {props.info.uf}</span>
            <span>ddd: {props.info.ddd}</span>
        </main>
    );
}