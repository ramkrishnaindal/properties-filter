import React from 'react'
import img1 from '../assets/images/img1.jpg'
const ImageCard = () => {
    const arrImageIndex=[1,2,3,4,5,6,7,8,9,10]
    // console.log("arrImageIndex",arrImageIndex);
  return (
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {arrImageIndex.map((item,index)=>{
            console.log("'../assets/images/' + item + '.jpg'",'../assets/images/img' + item + '.jpg');
            const image = require('../assets/images/img' + ((item % 6)+1) + '.jpg');
            return(
    <div key={index} class="rounded overflow-hidden shadow-lg ">
      <img class="w-full h-52" src={image} alt="Mountain"/>
      <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">Mountain</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>)
        })}
    
    
    </div>
  )
}

export default ImageCard