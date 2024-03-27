import DateTime from '@/components/dateTime'

const now = new Date();
const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Asia/Kolkata'
};import HeavyComponent from '@/components/heavyComponent'


// export const dynamic = 'force-dynamic'

export const revalidate = 0

const SSRPage = () => {
    return (
        <div>
            <h1>SSR Page (Heavy)</h1>
            <DateTime />
<p className="text-4xl font-semibold py-4 relative">{new Intl.DateTimeFormat('en-IN', options).format(now) }(IST) from Page</p>            <HeavyComponent />
        </div>
    )
}

export default SSRPage