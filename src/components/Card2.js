import React from 'react'

function Card2({imageUrl,title,description,paragraph}) {
  return (
    <div>
     <div className="card items-center max-w-full md:h-72 mx-4 rounded-lg md:mx-12 md:rounded-sm  md:card-side bg-base-100 shadow-xl">
  <figure><img className=' md:h-full w-full' src={imageUrl} alt="Album"/></figure>

  <div className="card-body">
    <h2 className="card-title text-2xl ">{title}</h2>
    <p className=' text-base'>{paragraph}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn More </button>
    </div>
  </div>


</div>
        
        
        
        </div>
  )
}

export default Card2