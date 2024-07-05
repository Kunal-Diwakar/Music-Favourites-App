import React from "react";

function Box({data, handleClick, index}) {
  const {img, song, artist, added} = data;

  return (
    <div className="w-56 rounded-md h-30 bg-zinc-100 p-4 pb-10 flex items-center justify-evenly gap-4 relative mt-10">
        <div className="w-16 h-16 rounded-md overflow-hidden">
            <img className="w-full h-full object-cover" loading="lazy" src={img} alt="icon" />
        </div>
        <div>
            <h3 className="text-lg leading-none font-semibold">{song}</h3>
            <h6 className="text-sm pt-2">{artist}</h6>
        </div>
        <button onClick={() => handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-teal-700"} absolute text-white text-xs rounded-full bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added === false ? "Add To Favourites" : "Added"}</button>
    </div>
  );
}
export default Box;
