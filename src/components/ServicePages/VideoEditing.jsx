
import React from 'react'
import { ArrowLeft, Video, Film, Palette, Music } from 'lucide-react'

const VideoEditing = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-max section-padding py-20">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sky-400 hover:text-sky-500 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Services
        </button>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Video <span className="text-sky-400">Editing</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Professional video editing services that bring your vision to life. From corporate videos 
            to social media content, we create engaging visual stories that captivate your audience.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Video Services</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Film className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Motion Graphics</h3>
                    <p className="text-gray-600">Eye-catching animations and graphics</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Palette className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Color Grading</h3>
                    <p className="text-gray-600">Professional color correction and grading</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Music className="text-sky-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Audio Enhancement</h3>
                    <p className="text-gray-600">Crystal clear sound design</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="/Programmer-bro_1754317120912.png" 
                alt="Video Editing"
                className="w-full h-80 object-contain"
              />
            </div>
          </div>
          
          <div className="text-center">
            <a
              href="#contact"
              className="bg-sky-400 hover:bg-sky-500 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Video Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoEditing
