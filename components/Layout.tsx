import { AuthSession } from '@supabase/supabase-js'
import Head from 'next/head'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Menu } from './Menu'

export interface Props {

}

export function Layout({ children }: PropsWithChildren<Props>) {
  return (

    <Head>
      <title>Next.js + TypeScript + Supabase + TailwindCSS</title>


      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@400&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Mono&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap" />


    </Head>

  )
}
