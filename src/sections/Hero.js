import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { TypeAnimation } from "react-type-animation"

const style = {
  about: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%'

  },
  container: {
    display: 'flex',
    backgroundColor: '#264653',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  header: {
    color: '#FFEDDF',
    fontSize: 48,
    whiteSpace: 'pre-wrap',
    marginBottom: 0
  },
  greeting: {
    color: '#FFEDDF'
  },
  p: {
    color: '#FFEDDF'
  },
  a: {
    color: '#FFEDDF',
    outline: 'none',
    '&:hover': {
      color: '#FFEDDF'
    },
    '&:focus': {
      color: '#FFEDDF'
    },
    '&:active': {
      color: '#FFEDDF'
    }
  },
  img: {
    borderRadius: '50%',
    width: 250,
    height: 250
  }
}
const Hero = () => (
    <div style={style.container}>
      <StaticImage style={{width: 250, height: 250}} src="../images/GP.JPG" alt="Avatar" imgStyle={style.img}/>
      <div style={style.about}>
        <div style={{display: 'flex', alignItems: 'baseline'}}>
          <h1 style={style.header}>{'Hi, I\'m'}</h1>
          <h1 style={style.header}>{' '}</h1>
          <TypeAnimation
              sequence={[
                'GISELLE PACHECO',
                1000,
              ]}
              wrapper={'b'}
              speed={50}
              style={style.header}
              repeat={0}
          />
        </div>
        <p style={style.p}><b>Experienced Software Engineer focused on building intuitive experiences</b>.</p>
        <p style={style.p}>Software Engineer, Full Stack, {' '}<a style={style.a} href="https://www.fanduel.com/" target="_blank" rel="noreferrer">fanduel</a>.</p>
        <p style={style.p}>MS in CS, HCI, {' '}<b>Georgia Institute of Technology</b>.</p>
        <p style={style.p}>BS in CS, {' '}<b>Florida International Unitversity</b>.</p>
      </div>
    </div>
)

export default Hero