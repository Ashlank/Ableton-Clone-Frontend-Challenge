import Image from "next/image"
import logo from "../public/assets/ableton-logo.svg"
import { useState } from "react"

export default function Navbar() {

  const [showMore, setShowMore] = useState(false);

  const toggleMore = () => {
    setShowMore(!showMore);
  }

  return (
    <header>
      <nav className="border-b-2 border-solid border-border">
        <div className="flex gap-8 py-4 px-4 items-center overflow-visible">
          <Image src={logo} alt="Ableton Logo"/>
          <button type="button" onClick={() => {}} className="lg:inline-flex items-end after:content-[''] after:w-0 after:h-0 after:border-[6px] after:border-t-black after:border-transparent after:ml-2 after:inline-block after:scale-[.85] after:mb-[1px] hidden">Menu</button>
          <section className='flex w-full lg:hidden'>
            <ul className="flex gap-5 flex-1">
              <li><a href="#">Live</a></li>
              <li><a href="#">Push</a></li>
              <li><a href="#">Note</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Packs</a></li>
              <li><a href="#">Help</a></li>
              <li className="text-brand" onClick={toggleMore}><a href="#" className={`after:ml-2 after:absolute ${showMore ? `after:content-['-'] after:top-[.16rem] after:text-[2rem]` : `after:content-['+'] after:top-[.7rem] after:text-[1.5rem]`}`}>More</a></li>
            </ul>
            <ul className="flex gap-4 items-baseline">
              <li className="text-blue-800"><a>Try Live for free</a></li>
              <li className="text-sm"><a>Log in or register</a></li>
            </ul>
          </section>
        </div>
        <div id="primary-menu" className={`flex flex-col w-full ${showMore ? 'block' : 'hidden'}`}>
          <section className="top-full left-0 pt-2 px-4 pb-5 bg-white w-screen">
            <span className="text-xl font-semibold">More on Ableton.com:</span>
            <ul className="flex gap-4 mt-1 mb-4">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Ableton for the Classroom</a></li>
              <li><a href="#">Ableton for Colleges and Universities</a></li>
              <li><a href="#">Certified Training</a></li>
              <li><a href="#" className="text-brand">About Ableton</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Apprenticeships</a></li>
            </ul>
            <span className="text-xl font-semibold">More from Ableton:</span>
            <div className="mt-1">
              <ul className="flex gap-8 justify-between overflow-x-auto">
                <li className=" min-w-[17rem] w-1/4">
                  <a href="#">
                    <div>
                      <h3 className="font-medium">Loop</h3>
                      <p>Watch Talks, Performances and Features from Ableton's Summit for Music Makers.</p>
                    </div>
                  </a>
                </li>
                <li className=" min-w-[17rem] w-1/4">
                  <a href="#">
                    <div>
                      <h3 className="font-medium">Learning Music</h3>
                      <p>Learn the fundamentals of music making right in your browser.</p>
                    </div>
                  </a>
                </li>
                <li className=" min-w-[17rem] w-1/4">
                  <a href="#">
                    <div>
                      <h3 className="font-medium">Learning Synths</h3>
                      <p>Get started with synthesis using a web-based synth and accompanying lessons.</p>
                    </div>
                  </a>
                </li>
                <li className=" min-w-[17rem] w-1/4">
                  <a href="#">
                    <div>
                      <h3 className="font-medium">Making Music</h3>
                      <p>Some tips from 74 Creative Strategies for Electronic Producers.</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </nav>
      <nav id="secondary-menu" className="sticky top-1 h-auto">
        <ul className="flex gap-6 py-4 px-4">
          <li><a href="#" className="text-brand">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Apprenticeships</a></li>
        </ul>
      </nav>
    </header>
  )
}
