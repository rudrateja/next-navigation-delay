import DateTime from '@/components/dateTime'

const now = new Date();
const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Asia/Kolkata'
};// import HeavyComponent from '@/components/heavyComponent'
import Ndynamic from 'next/dynamic'
const HeavyComponent = Ndynamic(() => import('@/components/heavyComponent'), { ssr: true })
import { Suspense } from 'react'

// export const dynamic = 'force-dynamic'
export const revalidate = 0


const SSRPage = () => {
    return (
        <div>
            <h1>SSR Page (Dynamic Import)</h1>
            <DateTime />
<p className="text-4xl font-semibold py-4 relative">{new Intl.DateTimeFormat('en-IN', options).format(now) }(IST) from Page</p>            <Suspense fallback={<div>Loading...</div>}>

            <HeavyComponent />
            </Suspense>
        </div>
    )
}

export default SSRPage