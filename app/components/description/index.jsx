import styles from './style.module.css';
import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

    const textes = ["Événements uniques", "créativité débordante et expertise inégalée définissent FestivaForge", "votre partenaire idéal pour des expériences festives mémorables."]

    

    return (
        <div className={styles.description}>
            {
                textes.map( (texte, index) => {
                    return <AnimatedText key={index}>{texte}</AnimatedText>
                })
            }
        </div>
    )
}

function AnimatedText({children}) {

    const text = useRef(null);

    useLayoutEffect( () => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
            },
            // Valeur initial
            left: "-100px",
            opacity: 0
        })
        
    }, [])

    return (
        <p ref={text}>{children}</p>
    )
}