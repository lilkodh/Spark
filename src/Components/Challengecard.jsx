
export const Challengecard = ({mrDone,challenge}) => {

    return( 
    
    <div className="bg-gray-100   rounded-2xl p-4 w-200 mx-2 my-10 flex flex-col  ">

  <div className="flex justify-between items-center mb-10">
    <p className="text-lg font-bold ">🎁 Today is challenge</p>
    <span className="bg-[#1F2937] text-white text-xs px-3 py-1 rounded-xl">
      {challenge.category}
    </span>
  </div>

  <div className="flex jusrtify-between items-center gap-10 ">
    <div className="text-7xl p-3 w-30 h-30 rounded-full ">
      🔔
    </div>

    <div>
      <h2 className="font-bold text-2xl">
        {challenge.title}
      </h2>
 <br />
      <p className="text-xs text-gray-600 mt-2">
        {challenge.description}
      </p>
    <br />
    <div className="flex justify-center items-center  ml-20">
      <button className=" bg-[#FF8A3D] text-black font px-10 py-2 rounded-2xl text-sm  mt-6 " onClick={mrDone}>
        Mark As Done
      </button>
      </div>
    </div>
  </div>
</div>
    );
}