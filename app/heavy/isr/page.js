import DateTime from '@/components/dateTime'

const now = new Date();
const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Asia/Kolkata'
};import HeavyComponent from '@/components/heavyComponent'


export const revalidate = 3600 // revalidate at most every hour

export const dynamic = 'force-static'
const ISRPage = () => {
    return (
        <div>
            <h1>ISR Page (Heavy) (force-static) (Revalidate 1 hour)</h1>
            <DateTime />
<p className="text-4xl font-semibold py-4 relative">{new Intl.DateTimeFormat('en-IN', options).format(now) }(IST) from Page</p>            <HeavyComponent />
            
        </div>
    )
}

export default ISRPage