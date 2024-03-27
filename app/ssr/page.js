import DateTime from '@/components/dateTime'
import { unstable_noStore as noStore } from 'next/cache';



const options = {
  year: 'numeric', month: 'numeric', day: 'numeric',
  hour: 'numeric', minute: 'numeric', second: 'numeric',
  timeZone: 'Asia/Kolkata'
};
export const dynamic = 'force-dynamic'
export const revalidate = 0

async function fetchTime() {
    noStore()
    try {
      const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
      
      // Check if the fetch was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Wait for the JSON conversion to complete
      const data = await response.json();
  
      // Now you can log or return the data
      console.log(data.datetime);
      return data.datetime
    } catch (error) {
      console.error("Failed to fetch time:", error);
    }
  }

const SSRPage = async () => {
    // noStore()
    // const url = 'http://worldtimeapi.org/api/timezone/Asia/Kolkata'
    // const time = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: 'no-store' })
    
    // console.log(time.json())
    // fetchTime();
    const now = new Date();
    const DateTimeComp = await import('@/components/dateTime')
    const time = fetchTime();
    const time2 =new Intl.DateTimeFormat('en-IN', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Asia/Kolkata' }).format(new Date())
    return (
        <div>
            <h1>SSR Page</h1>
            <div className='text-4xl font-semibold py-4 relative'>
            {/* {new Intl.DateTimeFormat('en-IN', options).format(fetchTime()) } */}
                {time2}
            </div>
            <DateTime />
<p className="text-4xl font-semibold py-4 relative">{new Intl.DateTimeFormat('en-IN', options).format(now) }(IST) from Page</p>        </div>
    )
}

export default SSRPage