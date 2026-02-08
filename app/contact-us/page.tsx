import { headers } from 'next/headers'
import MainLayout from '@/layout/main/Index'
import SayHelloPage from '@/views/SayHelloPage'
import type { CountryCode } from 'libphonenumber-js/core'

const page = async () => {
  const headersList = await headers()
  const countryCode = (headersList.get('x-vercel-ip-country') || 'CA') as CountryCode

  return (
    <MainLayout>
      <SayHelloPage defaultCountry={countryCode} />
    </MainLayout>
  )
}

export default page