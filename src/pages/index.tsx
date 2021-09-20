import React from 'react'
import Head from 'next/head'

import BrunoSantana from '../assets/bruno.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Title project</title>
      </Head>

      <BrunoSantana />
      <h1>ReactJS Structture</h1>
      <p>
        A ReactJS + Next.js structure made by Bruno Santana &#38;{' '}
        <a href="https://rocketseat.com.br" target="_blank" rel="noreferrer">
          Rocketseat
        </a>
        .
      </p>
    </Container>
  )
}

export default Home
