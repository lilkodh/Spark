export const Historylist = ({ history }) => {
    return(
        <div className="bg-gray-200  rounded-2xl p-5 w-full mx-auto flex-col mb-10 ">

  
  <div className="bg-[#1F2937] text-white text-center py-2 rounded-xl mb-4 ">
    HISTORY LIST
  </div>

  <div className="space-y-2">

    <div className="flex justify-between items-center border rounded-xl px-3 py-2 bg-white">
      <p>🥇 {history[0]?.title}</p>
      <span className="text-purple-600 text-sm">{history[0]?.category}</span>
    </div>
<br />
    <div className="flex justify-between items-center border rounded-xl px-3 py-2 bg-white">
      <p> 🥈 {history[1]?.title}</p>
      <span className="text-green-500 text-sm">{history[1]?.category}</span>
    </div>
<br />
    <div className="flex justify-between items-center border rounded-xl px-3 py-2 bg-white">
      <p> 🥉 {history[2]?.title}</p>
      <span className="text-blue-500 text-sm">{history[2]?.category}</span>
    </div>

  </div>

</div>
    )
}