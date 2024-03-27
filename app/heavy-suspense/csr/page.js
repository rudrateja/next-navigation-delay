'use client'
import DateTime from '@/components/dateTime'

const now = new Date();
const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Asia/Kolkata'
};import HeavyComponent from '@/components/heavyComponent'
import { Suspense } from 'react'

const CSRPage = () => {
    return (
        <div>
            <h1>CSR Page (Suspense)</h1>
            <DateTime />
<p className="text-4xl font-semibold py-4 relative">{new Intl.DateTimeFormat('en-IN', options).format(now) }(IST) from Page</p>            <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
            </Suspense>

        </div>
    )
}

export default CSRPage