import Image from "next/image";

export default function Main() {
  return (
    <main>
      <section className="relative">
        <h1 className="text-brand lg:text-8xl lg:mt-[-48px] lg:ml-[-151.055px] text-9xl absolute top-1/2 left-1/2 ml-[-201.415px] mt-[-64px]">Ableton</h1>
        <Image
          src='/../public/assets/header.jpg'
          alt='Intro Image'
          width={1720}
          height={960}
          className="mx-auto max-w-[90%] lg:h-[100vh] object-cover"
          priority
        />
      </section>
      <section className="my-12 lg:max-w-[90%] max-w-[50%] mx-auto mid-section">
        <p className="text-3xl mb-6">We make <a href="#">Live</a>, <a href="#">Push</a> and <a href="#">Link</a> — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.</p>
        <p className="text-lg">Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.</p>
      </section>
      <div className="relative flex w-full h-[50vw] items-center mx-4 lg:my-12 my-[6rem]">
        <div className="absolute bg-lemonade w-[80vw] h-[55vw] left-[40%]"></div>
        <div className="w-[50%] h-[40vw] z-10 bg-image-one bg-cover bg-center bg-no-repeat lg:mx-4 mx-14"></div>
        <div className="h-[20vw] w-[30%] z-10 bg-image-two bg-cover bg-center bg-no-repeat lg:mx-4 mx-14"></div>
      </div>
      <section className="py-10 lg:max-w-[90%] max-w-[50%] mx-auto">
        <p className="text-3xl mb-6">Making music isn't easy. It takes time, effort, and learning. But when you're in the flow, it's incredibly rewarding.</p>
        <p className="text-lg">We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.</p>
      </section>
      <div className="flex flex-col justify-center lg:w-auto w-[50%] lg:h-[50vw] h-[450px] lg:mx-4 m-auto mb-16">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9SbnhgjeyXA" title="Why Ableton - Juanpe" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <span className="text-sm">Why Ableton - Juanpe Bolivar</span>
      </div>
      <section className="py-10 lg:max-w-[90%] max-w-[50%] mx-auto">
        <p className="text-3xl mb-6">We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.</p>
        <p className="text-lg">Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.</p>
      </section>
      <div className="relative flex items-center mx-4 lg:my-[4rem] my-[8rem]">
        <div className="absolute bg-pearmint lg:w-[100vw] w-[80vw] h-[110%] lg:left-[-40%] left-[-20%] top-[-5%]"></div>
        <div className="w-[50%] z-10 flex flex-col gap-16">
          <div className="w-[80%] h-[30vw] z-10 bg-image-three bg-cover bg-center bg-no-repeat lg:mx-4 mx-14"></div>
          <div className="w-[80%] h-[30vw] z-10 bg-image-four bg-cover bg-center bg-no-repeat lg:mx-4 mx-14"></div>
        </div>
        <div className="h-[40vw] w-[50%] z-10 bg-image-five bg-cover bg-center bg-no-repeat"></div>
      </div>
      <section className="py-10 lg:max-w-[90%] max-w-[50%] mx-auto">
        <p className="text-3xl mb-6">We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.</p>
        <p className="text-lg">Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We've learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don't always agree with each other, but opinion and debate are valued and openly encouraged.</p>
      </section>
      <div className="h-[50vw] bg-image-poster bg-cover bg-center bg-no-repeat my-4 mx-4"></div>
      <section className="py-10 lg:max-w-[90%] max-w-[50%] mx-auto">
        <p className="text-3xl mb-6">We're passionate about what we do, but we're equally passionate about improving who we are.</p>
        <p className="text-lg mb-6">We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.</p>
        <p className="text-lg">Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.</p>
      </section>
      <div className="relative flex w-full h-[50vw] items-center mx-4 lg:my-12 my-[6rem] justify-around">
        <div className="absolute bg-lavender w-[50vw] h-[55vw] left-[25%]"></div>
        <div className="w-[30%] h-[20vw] z-10 bg-image-six bg-cover bg-center bg-no-repeat lg:mx-4 mx-14"></div>
        <div className="h-[35vw] w-[45%] z-10 bg-image-seven bg-cover bg-center bg-no-repeat lg:mx-4 mx-14"></div>
      </div>
      <section className="py-10 lg:max-w-[90%] max-w-[50%] mx-auto">
        <p className="text-3xl mb-6">We want our employees to love it here. Since we're looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.</p>
        <p className="text-lg mb-6">If you're joining us in Berlin, we'll help with relocation and paperwork. We'll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it's not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.</p>
      </section>
      <div className="xl:flex-col flex flex-row lg:w-[90%] w-[80%] mx-auto">
        <div className="xl:w-full w-1/2 bg-image-eight xl:h-[60vw] h-[40vw] bg-cover bg-no-repeat bg-left 2xl:bg-center"></div>
        <div className="bg-lightBlue xl:w-full w-1/2 py-4 text-center flex align-middle justify-center">
          <div className="xl:w-full w-1/2 m-auto lg:mx-8 mx-10 my-10 lg:text-2xl text-3xl flex flex-col justify-center">
            <p className="mb-6">We're really proud of the work we've done so far. But there's so much more to come. If you'd like to be a part of it, please join us.</p>
            <span className="mb-6 text-bold text-blue-900"><a href="#" className="inline-flex items-center after:content-['>'] after:ml-2 after:text-xl after:font-black after:mt-[5px]">See latest jobs</a></span>
          </div>
        </div>
      </div>
    </main>
  )
}
