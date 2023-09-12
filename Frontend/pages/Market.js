import Head from 'next/head';
import Home from "./marketplace";
import Link from 'next/link';

import Navbar from "../Component/Course/Nav";
// import Navbar from "../Component/"

const style = {
  wrapper: `relative`,
  container: `max-w-4xl mx-auto p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`,
  button: `border border-[#282b2f] bg-[orange] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text-[#282b2f] font-semibold mt-4`,
  cardsize: `px-6 py-4`,
  bigFont: `text-[#D37506]-700 font-bold text-xl mb-2`,
  smallFont: `text-gray-700 text-base`,
  bigButton: `text-white text-[23px] bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-9 py-6 text-center mr-1 mb-1`,
};

function Market() {
  return (
    <div className="">
      <Navbar/>

      <div className={style.wrapper}>

        <nav className={`${style.container} border-b p-10`}>
          <p className="text-7xl font-medium">Educational Dev Marketplace</p>

          {/* <div className="flex mt-4">
            <Link href="/">
              <div className="mr-6 text-black-500">
                HOME
              </div>
            </Link>
            <Link href="/sellnft">
              <div className="mr-6 text-black-500">
                SELL COURSE
              </div>
            </Link>
            <Link href="/mynft">
              <div className="mr-6 text-black-500">
                My COURSES
              </div>
            </Link>
            <Link href="/dashboard">
              <div className="mr-6 text-black-500">
                Dashboard
              </div>
            </Link>
            <Link href="/Review">
              <div className="mr-6 text-black-500">
                COURSE Review
              </div>
            </Link>
          </div> */}
          <Home/>
        </nav>
      </div>
    </div>
  );
}

export default Market;
