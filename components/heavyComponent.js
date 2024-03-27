
import Image from 'next/image'
const HeavyComponent = () => {
    return (
        <div className=' mt-52'>
            <h1>Heavy Component</h1>
            {/* fill this with 1 mb text */}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='w-screen overflow-hidden hidden'>
            </div>

        </div>
        
    )
}

export default HeavyComponent