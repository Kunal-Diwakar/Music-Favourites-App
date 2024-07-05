import React from "react";

function Navbar({data}){
    return (
        <div className="w-full px-14 py-3 flex justify-between items-center">
            <h3 className="font-semibold text-2xl">Orange</h3>

            <div className="flex p-2 px-4 gap-2 rounded-md text-sm font-medium bg-orange-600 text-white">
                <h3>Favourites</h3>
                <h4>{data.filter(item => item.added).length}</h4>
            </div>
        </div>
    )
}

export default Navbar;