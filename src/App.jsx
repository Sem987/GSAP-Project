import React from 'react'
import {ScrollTrigger, SplitText} from "gsap/all";
import gsap from "gsap";
import {Navbar} from "./components/navbar.jsx";
import {Hero} from "./components/Hero.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className="h-dvh bg-black"></div>
        </main>
    )
}
