import React from "react"
import Logo from "../images/svg/logo.inline.svg";
import * as style from "./About.module.css"

const About = () => (
    <div className={style.main}>
        <Logo width={64} height={64}/>
        <h2 className={style.header}>Giselle Pacheco</h2>

        <div className={style.container}>
            <div className={style.summary}>
            <p>Full Stack Engineer</p>
            <p>MS in CS, Georgia Institute of Technology</p>
            <p>BS in CS, Florida International Unitversity</p>
        </div>
        <div className={style.about}>
            <p>Welcome!</p>
            <p>My name is Giselle! By day I am a Software Engineer at FanDuel, by night I am just your average person trying to have time for all sorts of hobbies. 
</p>
<p>My most beloved activity is watching tv. To keep it balanced, I enjoy Ballroom Dancing, running, and recently been reading more. Once in a blue moon I feel inspired to write an article that I hope helps others.
</p>

        </div>

        </div>
    </div>
)

export default About