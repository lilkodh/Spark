export const Header = () => {
    return (
    <div className='flex w-full mx-auto justify-between items-center bg-[#FF8A3D] p-4 rounded-2xl'>

        <h1 className='text-4xl font-bold '>✨Spark</h1>
        <ul className='flex gap-x-4 text-sm text-white '>
            <li className="border-b-black rounded-2xl p-1 w-20 text-center bg-[#1F2937]">Today</li>
            <li className="border-b-black rounded-2xl p-1 w-20 text-center bg-[#1F2937]">History</li>
            <li className="border-b-black rounded-2xl p-1 w-20 text-center bg-[#1F2937]">About</li>
        </ul>
    </div>
    );
}