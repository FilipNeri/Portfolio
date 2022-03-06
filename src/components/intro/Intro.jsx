import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"


export default function Intro(){


    const textRef = useRef()
    useEffect(()=>{
        init(textRef.current,{
            showCursor:true,
            backDelay:1500,
            backSpeed:60,
            strings:["Freelancer","Web","Mobile", "Vue", "React"]   
        })

    },[])


    return(
        <div className="intro" id='intro'>
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/filipeneri.png" alt="Imagem de Filipe Neri" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Olá, sou o  </h2>
                    <h1>Filipe Neri</h1>
                    <h3>Desenvolvedor <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio" >
                    <img src="assets/arrowdown.png" alt="down" />
                </a>
            </div>
        </div>
    )
}