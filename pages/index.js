import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/layout/Layout';
import { PrismaClient } from '@prisma/client'

export default function Home() {
  return (
    <Layout>
      <h1>Inicio</h1>
    </Layout>
  )
}

