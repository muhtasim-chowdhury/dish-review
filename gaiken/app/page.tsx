'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./ui/Map'), { ssr: false })


export default function Home() {

  const [selectedPlace, setSelectedPlace] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-full" style={{border: "1px solid green"}}>
      <div className="basis-2/3 h-full grow" style={{border: "1px solid red"}}
        
      >
        <Map setSelectedPlace={setSelectedPlace}/>
      </div>
      {selectedPlace && (
        <div className="basis-1/3" style={{border: "1px solid blue"}}>Place View</div>
      )}
    </div>
  );
}
