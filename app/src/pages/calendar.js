import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/layout'

export default function Calendar() {
  return (
    <Layout>
      <Head>
        <title>Calendario</title>
      </Head>
      <h1 className="text-3xl">Calendario</h1>
      <h2>
        <Link href="/">
          <a href="/">Back to home</a>
        </Link>
      </h2>
      <iframe title="Calendar" className="w-full h-4/5" src="https://calendar.google.com/calendar/embed?src=c_e8vccf6jvcv8utn7eoeu8kjn48%40group.calendar.google.com&ctz=America%2FLima" />
    </Layout>
  )
}
