import React from 'react';

const Profile = () => {
  return (
    // Outer container: Full screen height, light wash background
    <div className="min-h-screen bg-stone-50 py-10 px-4 font-sans">
      
      {/* Max width container to keep content readable on large screens */}
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
          
          {/* Cover Photo Area (Subtle solid wash) */}
          <div className="h-32 bg-stone-200 w-full"></div>
          
          <div className="px-6 sm:px-8 pb-8">
            {/* Avatar - Negative margin pulls it up into the cover photo area */}
            <div className="relative -mt-12 mb-4">
              <div className="w-24 h-24 rounded-full bg-white p-1 border border-stone-100 shadow-sm">
                <div className="w-full h-full rounded-full bg-stone-800 flex items-center justify-center text-stone-50 text-3xl font-medium tracking-tight">
                  SH
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div>
              <h1 className="text-2xl font-semibold text-stone-800 tracking-tight">Sunny Hirani</h1>
              <p className="text-stone-500 mt-1">Full-Stack Web Developer</p>
              
              {/* Location Indicator */}
              <p className="text-sm text-stone-400 mt-2 flex items-center">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                Surat, Gujarat, India
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-stone-800 text-stone-50 text-sm font-medium rounded-lg hover:bg-stone-700 focus:ring-2 focus:ring-offset-2 focus:ring-stone-800 transition-all">
                Edit Profile
              </button>
              <button className="px-5 py-2.5 bg-stone-50 text-stone-700 text-sm font-medium rounded-lg border border-stone-200 hover:bg-stone-100 focus:ring-2 focus:ring-offset-2 focus:ring-stone-200 transition-all">
                Share Profile
              </button>
            </div>
          </div>
        </div>

        {/* Content Grid: 1 column on mobile, 3 columns on medium screens and up */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* About Section (Takes up 2/3 width on desktop) */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sm:px-8">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">About Me</h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Passionate web developer currently focused on building interactive and responsive web applications. Experienced in designing, coding, and debugging full-stack projects. I enjoy exploring new technologies and building unique features, including 3D web experiences and scalable backend architectures.
            </p>
          </div>

          {/* Skills Section (Takes up 1/3 width on desktop) */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sm:px-8">
            <h3 className="text-lg font-semibold text-stone-800 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind CSS', 'MERN Stack', 'Angular', 'Three.js', 'Python'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-stone-100 text-stone-700 text-xs font-medium rounded-md border border-stone-200/60"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;