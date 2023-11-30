import styles from './style.module.scss';
import Image from 'next/image';
import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Index() {

    const events = [
        {
            title: "Harmonie Canadienne Festive (HCF)",
            src: "music-concert-unsplash.jpg"
        },
        {
            title: "Festival des Couleurs Vibrantes (FCV)",
            src: "couleur-art-unsplash.jpg"
        },
        {
            title: "Carnaval des Glaces Mystiques",
            src: "glacier-unsplash.jpg"
        },
        {
            title: "Fête des Feux de Camp Ensorcelés",
            src: "camping-unsplash.jpg"
        },
    ]

    const [hoverEvents, setHoverEvents] = useState(0);
    const imageContainer = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger); // Enregistre le plugin ScrollTrigger de GSAP
        ScrollTrigger.create({
            trigger: imageContainer.current,
            start:"-=100px", // déclenche l'animation Xpx avant le trigger. Haut du viewport
            end: document.body.offsetHeight,
            pin: true // pin the trigger element while active
        })
    }, [])

    return (
        <section className={styles.evenements}>
            <div className={styles.evenementsDescription}>
                <div ref={imageContainer} className={styles.imageContainer}>
                    <Image 
                        src={`/images/${events[hoverEvents].src}`}
                        fill={true}
                        alt={events[hoverEvents].title}
                    />
                </div>
                <div data-scroll data-scroll-speed="0.3" className={styles.column}>
                    <p>FestivaForge excelle dans la planification stratégique d&apos;événements, offrant des festivals immersifs où chaque détail est méticuleusement façonné pour captiver vos participants.</p>
                </div>
                <div data-scroll data-scroll-speed="0.2" className={styles.column}>
                    <p>Avec FestivaForge, plongez dans l&apos;univers des festivals exceptionnels, où la créativité fusionne avec une exécution impeccable, créant ainsi des moments magiques et des souvenirs durables.</p>
                </div>
            </div>
            <div className={styles.evenementsList}>
                {
                    events.map((event, index) => {
                        return <div onMouseOver={() => {setHoverEvents(index)}} className={styles.evenementEl} key={`p_${index}`}>
                            <p>{event.title}</p>
                        </div>
                    })
                }
            </div>
        </section>
    )
}