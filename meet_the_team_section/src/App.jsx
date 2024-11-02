import arrowUp from "/arrow up right.svg";

function App() {
  return (
    <>
      <main className="bg-design bg-[#F3F4F6]    relative grid rounded-lg overflow-hidden place-items-center my-9 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] w-full mx-auto shadow-lg ">
 
        <div className=" p-8 pb-28 md:col-span-2  relative z-10">
          <h2 className="text-blue-400 text-md">Our team</h2>
          <h1 className="text-4xl my-6">Meet the brain</h1>
          <p className="text-[#394150] font-semibold">
            We are proud to have them as part of our community and look forward
            to continuing to push the boundaries of what's possible in the world
            of digital art.
          </p>
        </div>
        <div className="w-full relative h-[300px]  bg-[#C1B6F8] lg:min-h-full flex items-end card overflow-hidden">
          <picture className="relative inline-block z-30">
            <source
              srcset="/person_1.png"
              aria-hidden="true"
              alt=""
              media="(max-width:850px)"
            />
            <img
              src="/person_1@2x.png"
              alt=""
              className="brightness-90 md:max-w-[310px] relative z-20 transition-all duration-300 ease-in-out"
            />
          </picture>
          <div className="absolute bottom-5 left-5 text-[#FFFEFE] z-50">
            <h3 className="font-bold text-xl">Liam Novak</h3>
            <h4 className="text-md mt-2">Software Engineer</h4>
          </div>
        </div>
        <div className="w-full relative h-[300px]  bg-[#EDACD2] lg:min-h-full flex items-end card overflow-hidden">
          <picture className="relative inline-block z-30">
            <source
              srcset="/person_2.png"
              aria-hidden="true"
              alt=""
              media="(max-width:850px)"
            />
            <img
              src="/person_2@2x.png"
              alt=""
             className="brightness-90 max-w-[300px] relative z-20 transition-all duration-300 ease-in-out"
            />
          </picture>
          <div className="absolute bottom-5 left-5 text-[#FFFEFE] z-50">
            <h3 className="font-bold text-xl">Sophia Moretti</h3>
            <h4 className="text-md mt-2">Business Development Manager</h4>
          </div>
        </div>
        <div className="w-full relative h-[300px]  bg-[#9DC4F8] lg:min-h-full flex items-end card overflow-hidden">
          <picture className="relative inline-block z-30">
            <source
              srcset="/person_3.png"
              aria-hidden="true"
              alt=""
              media="(max-width:850px)"
            />
            <img
              src="/person_3@2x.png"
              alt=""
              className="brightness-90 max-w-[300px] relative z-20 transition-all duration-300 ease-in-out"
            />
          </picture>
          <div className="absolute bottom-5 left-5 text-[#FFFEFE]  z-50">
            <h3 className="font-bold text-xl">Ethan Rossi</h3>
            <h4 className="text-md mt-2">Business Development Manager</h4>
          </div>
        </div>
        <div className="w-full relative h-[300px]   bg-[#F8D8B0] lg:min-h-full flex items-end card overflow-hidden">
          <picture className="relative inline-block z-30">
            <source
              srcset="/person_4.png"
              aria-hidden="true"
              alt=""
              media="(max-width:850px)"
            />
            <img
              src="/person_4@2x.png"
              alt=""
              className="brightness-90 max-w-[300px] relative z-20 transition-all duration-300 ease-in-out"
            />
          </picture>
          <div className="absolute bottom-5 left-5 text-[#FFFEFE] z-50">
            <h3 className="font-bold text-xl">Isabella Ricci</h3>
            <h4 className="text-md mt-2">UX Designer</h4>
          </div>
        </div>
        <div className="w-full relative h-[300px]   bg-[#86E7D4]  lg:min-h-full flex items-end card overflow-hidden">
          <picture className="relative inline-block z-30">
            <source
              srcset="/person_5.png"
              aria-hidden="true"
              alt=""
              media="(max-width:850px)"
            />
            <img
              src="/person_5@2x.png"
              alt=""
              className="brightness-90 max-w-[300px]  relative z-50"
            />
          </picture>
          <div className="absolute bottom-5 left-5 text-[#FFFEFE] z-50">
            <h3 className="font-bold text-xl">Noah Conti</h3>
            <h4 className="text-md mt-2">Content Creator</h4>
          </div>
        </div>
        <div className="bg-[#F3F4F6] w-full flex items-end h-[300px] p-8 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
          <a href="#none" className="flex items-center gap-2 transition-all border-2 border-transparent duration-300 hover:text-red-400 hover:border-b-2 hover:border-b-red-500 ">
            See all members <img src={arrowUp} alt="" />
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
