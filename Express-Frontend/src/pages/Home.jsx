import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Replaced the broken dynamic API with reliable, high-quality static Unsplash URLs
  const projects = [
    { 
      category: 'minimal', 
      img: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'nature', 
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80' 
    },
    { 
      category: 'architecture', 
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' 
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation - Glassmorphism wash effect */}
      <nav className="sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-semibold tracking-tight text-stone-800">Studio.</div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors">Work</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Journal</a>
            <a href="#" className="hover:text-stone-900 transition-colors">About</a>
          </div>
          <Link to="/login">
          <button className="text-sm font-medium bg-stone-900 text-stone-50 px-5 py-2 rounded-full hover:bg-stone-800 transition-all">
            Get Started
          </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-6 py-16 md:py-28 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 block">
            Spring Collection 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-stone-900 leading-tight mb-8">
            Digital experiences <br />
            <span className="italic font-serif text-stone-500">refined</span> by detail.
          </h1>
          <p className="text-lg text-stone-500 max-w-xl leading-relaxed">
            We build interfaces that breathe. Using soft palettes and organic movement to create 
            software that feels as natural as the world around us.
          </p>
        </div>
      </header>

      {/* Dynamic Image Gallery Grid */}
      <main className="px-6 pb-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Mapped Projects Array */}
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-stone-200">
                <img 
                  src={project.img} 
                  alt={project.category}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay wash */}
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <h3 className="text-sm font-medium text-stone-800 capitalize">{project.category}</h3>
                  <p className="text-xs text-stone-400 mt-1">Project 0{index + 1}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-stone-50 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          
          {/* Featured Large Card */}
          <div className="md:col-span-2 relative group cursor-pointer overflow-hidden rounded-3xl h-[400px] lg:h-auto bg-stone-200">
             <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
                alt="Workspace Featured"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent flex flex-col justify-end p-8">
                <h2 className="text-2xl font-medium text-white">The Future of Remote Work</h2>
                <p className="text-stone-200 text-sm mt-2 max-w-md">Exploring the intersection of architecture and productivity in modern workspaces.</p>
              </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-stone-400 text-sm italic font-serif">
            © 2026 Studio. All rights reserved.
          </div>
          <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest text-stone-500">
            <a href="#" className="hover:text-stone-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Instagram</a>
            <a href="#" className="hover:text-stone-900 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


// import React from 'react'
// import { Link } from 'react-router-dom'

// const Home = () => {
//   return (
//   <>
//     <div className='w-full h-screen flex items-center justify-center'></div>
//     <Link to="/login">
//     <button className='w-full px-4 py-2 font-bold'>Go to Login Page</button></Link>

//   </>
//   )
// }

// export default Home
