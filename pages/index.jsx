import Head from 'next/head'
import { generateFakeApartment } from '@/utils/fakeData'
import { Category, Collection } from '@/components'
import { getApartments } from '@/services/blockchain'

export default function Home({ apartmentsData }) {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Category />
      <Collection appartments={apartmentsData} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const apartmentsData = await getApartments()

  return {
    props: {
      apartmentsData: JSON.parse(JSON.stringify(apartmentsData)),
    },
  }
}
