import * as React from "react"
import Layout from "../components/Layout"
import About from "../sections/About"
import Hero from "../sections/Hero"
import Projects from "../sections/Projects"

// markup
const IndexPage = () => {
    return (
        <Layout>
            <title>Giselle Pacheco</title>
            <About/>
            <Projects/>
        </Layout>
    )
}

export default IndexPage