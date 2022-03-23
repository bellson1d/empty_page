import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import s from './hunter.module.scss'
import axios from 'axios'
import {useRouter} from 'next/router'

const Shadow = ({ content }) => {
    const src = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"

    return (
      <div>

        <Head>
          <title>Shadow Hunter</title>
        </Head>

      <Link href="/">Back Home</Link>
        <Image 
          loader={() => src}
          src={src}
          height={200}
          width={200}
          alt='avatar'
      />
        <h1>Shadow</h1>
        {content.map((v, i) => <div key={v.title} className={s.content}>{v.title}</div>)}
        

        <style jsx>{`
          h1 {
            color: cyan;
            font-size: 40px;
          }
          `}</style>
      </div>
    )
}

export default Shadow;

export const getStaticPaths = async () => {
  return { paths: [{ params: {id: "shadow"}
}], fallback: false}
}

export const getStaticProps = async ({ params }) => {
  // const data = await axios.get('/api/blog');
  console.log('====================================');
  console.log(params);
  console.log('====================================');

  return {
    props: {
      content:
        Array(10).fill(1).map((v, i) =>
          ({ title: 'title-' + i, content: 'blabla'.repeat(100) }))
    }
  }
}