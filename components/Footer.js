import Image from "next/image"
import logo from "../public/assets/ableton-logo.svg";

export default function Footer() {
  return (
    <div className="footer mt-20 pt-20 border-t-2 border-solid border-border">
      <div className="px-[10%]">
        <h2 className="text-6xl bold">Ableton</h2>
        {/* First Section Footer */}
        <div className="mt-6 flex justify-between lg:flex-col gap-10 first">
          <ul className="flex flex-col gap-1 flex-[1]">
            <li><a href="#">Register Live or Push</a></li>
            <li><a href="#">About Ableton</a></li>
            <li><a href="#">Jobs</a></li>
            <ul className="flex gap-2">
              <li><Image className="bg-facebook" src="/./assets/logo-1.svg" alt="logo-facebook" width="30" height="30"/></li>
              <li><Image className="bg-twitter" src="/./assets/logo-2.svg" alt="logo-twitter" width="30" height="30"/></li>
              <li><Image className="bg-youtube" src="/./assets/logo-3.svg" alt="logo-youtube" width="30" height="30"/></li>
              <li><Image className="bg-instagram" src="/./assets/logo-4.svg" alt="logo-instagram" width="30" height="30"/></li>
            </ul>
          </ul>
          <ul className="flex flex-col gap-1 flex-[1]">
            <li className="font-medium bold">Education</li>
            <li><a href="#">Offers for students and teachers</a></li>
            <li><a href="#">Ableton for the Classroom</a></li>
            <li><a href="#">Ableton for Colleges and Universities</a></li>
          </ul>
          <div className="lg:max-w-full max-w-[40%] flex flex-col gap-1 lg:order-[-1] flex-[1.3]">
            <span className="font-medium bold">Sign up to our newsletter</span>
            <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
            <div className="flex mt-4">
              <input type="email" placeholder="Email Address" className=" indent-2 bg-selects p-1 flex-1"></input>
              <button type="button" className="bg-blue-800 p-1 text-white px-6">Sign up</button>
            </div>
          </div>
        </div>
        {/* Second Section Footer */}
        <div className="mt-10 flex justify-between lg:flex-col gap-10 second">
          <ul className="flex flex-col gap-1 flex-[1]">
            <li className="bold">Community</li>
            <li><a href="#">Find Ableton User Groups</a></li>
            <li><a href="#">Find Certified Training</a></li>
            <li><a href="#">Become a Certified Trainer</a></li>
          </ul>
          <ul className="flex flex-col gap-1 flex-[1]">
            <li className="bold">Distributors</li>
            <li><a href="#">Find Distributors</a></li>
            <li><a href="#">Try Push in-store</a></li>
          </ul>
          <div className="flex flex-col gap-1 flex-[1.3]">
            <span className="bold">Language and Location</span>
            <div className="flex gap-1 bold-select sm:flex-col flex-row lg:max-w-[60%]">
              <select name="language" className="bg-selects p-1" defaultValue={'English'}>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
                <option value="jp">日本語</option>
                <option value="zh-cn">简体中文</option>
              </select>
              <select name="country" className="bg-selects p-1 flex-1" defaultValue={'Argentina'}>
                <option value="arg">Argentina</option>
              </select>
            </div>
          </div>
        </div>
        {/* Third Section Footer */}
        <div className="my-14 flex justify-between lg:flex-col gap-10 small-footer">
          <ul className="flex lg:flex-col flex-row lg:gap-2 gap-4 bold-footer">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Press Resources</a></li>
            <li><a href="#">Legal Info</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Settings</a></li>
            <li><a href="#">Imprint</a></li>
          </ul>
          <div className="flex gap-4">
            <span className="lg:order-1 bold">Made in Berlin</span>
            <Image src={logo} alt="Ableton Logo"/>
          </div>
        </div>
      </div>
    </div>
  )
}
