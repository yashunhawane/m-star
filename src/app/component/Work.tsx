'use client'

import React from 'react'

const Work = () => {
  const videos = [
    { id: "dvR9Y0RyVgo", title: "Rang Ishq Ka" },
    { id: "BUOf_kBK5v8", title: "सर्वसामान्य घरातला कोरिओग्राफर शाहरुख खानला नाचवतो" },
    { id: "34qui8Kc2pU", title: "Shendur Laal Chadhayo" },
    { id: "KlFoUdGdow4", title: "Jai Jai Malhari" },
    { id: "UuwnRNiXrNw", title: "Kumari" },
    { id: "FG0GT-XnkPw", title: "Dhandho" },
    { id: "EWkJeV54EVw", title: "कोंबडा | Kombada" },
    { id: "GXruJbNjVp8", title: "Saari Raat Peg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">My Work</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-gray-700/50 hover:transform hover:scale-105 transition-all duration-300">
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white">{video.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
