export const Historylist = () => {
    return(
        <div className="bg-gray-200  rounded-2xl p-5 w-full mx-auto flex-col mb-10 ">

  
  <div className="bg-[#1F2937] text-white text-center py-2 rounded-xl mb-4 ">
    HISTORY LIST
  </div>

  <div className="space-y-2">

    <div className="flex justify-between items-center border rounded-xl px-3 py-2 bg-white">
      <p>🥇 Write down 3 things you're grateful for</p>
      <span className="text-purple-600 text-sm">Creative</span>
    </div>
<br />
    <div className="flex justify-between items-center border rounded-xl px-3 py-2 bg-white">
      <p> 🥈 Take a 10-minute walk outside</p>
      <span className="text-green-500 text-sm">Wellness</span>
    </div>
<br />
    <div className="flex justify-between items-center border rounded-xl px-3 py-2 bg-white">
      <p> 🥉 Give a genuine compliment to someone</p>
      <span className="text-blue-500 text-sm">Social</span>
    </div>

  </div>

</div>
    )
}