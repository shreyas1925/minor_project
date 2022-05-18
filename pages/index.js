import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeBanner from "../components/HomeBanner"
import SlidingCards from "../components/SlidingCards"
import img from "../public/images/slide_img.jpg"
const index = () => {
  return (
    <div>
      <Header />
      <HomeBanner />
      {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
      <section>
        {/* <h2 className="text-3xl font-semibold py-4">Live your Life </h2> */}
        <div className="flex space-x-5 md:ml-5 ml-4 overflow-scroll scrollbar-hide p-3 ">
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
          <SlidingCards img={img} title="Okay for now" />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default index
