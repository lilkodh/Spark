export const StreakTraker = ({fstreak}) => {
    return(
    <div className="bg-gray-100 rounded-2xl p- w-130 mx-2 my-10 flex-col">

  <p className="text-sm ml-5 mt-3 font-bold ">🔥 Your Streak</p>
  <br />

  <p className="text-xs mt-2 ">🎉 YOU HAVE REACHED...</p>
  <h2 className="text-green-500 text-3xl font-bold mt-1 text-center ">
    {fstreak}
  </h2>
   <div>
    <br />
   </div>

  <div className="bg-[#FF8A3D] text-center text-sm py-2 rounded-xl mt-17  w-100 mx-auto">
    <p className="font-bold ">Monday</p>
  </div>

</div>
    )

}