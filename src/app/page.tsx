import Navbar from "@/components/globals/Navbar";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { LampComponent } from "@/components/ui/lamp";
import { clients, products } from "@/lib/constants";
import { CheckCheckIcon } from "lucide-react";

export default function Home() {
  return (
    <main className='h-screen w-full'>
      <Navbar />
      <section className='h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased'>
        <div className='absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]'></div>
        <div className='flex flex-col mt-[-100px] md:mt-[-50px] w-full'>
          <ContainerScroll
            titleComponent={
              <div className='flex items-center flex-col'>
                <Button
                  size={"lg"}
                  className='p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500'
                >
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black'>
                    Start For Free Today
                  </span>
                </Button>
                <h1 className='text-5xl md:text-8xl mb-10  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold'>
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <section className='flex items-center justify-center'>
        <InfiniteMovingCards
          className='md:mt-[18rem] mt-[-100px]'
          items={clients}
          direction='right'
          speed='slow'
        />
      </section>
      <section>
        <HeroParallax products={products} />
      </section>
      <section className='mt-[-500px]'>
        <LampComponent />
        <div className='flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72'>
          <CardContainer className='inter-var'>
            <CardBody className=' bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border '>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'
              >
                Hobby
                <h2 className='text-6xl'>$0</h2>
              </CardItem>
              <CardItem
                translateZ='60'
                className='text-sm text-neutral-500 max-w-sm mt-2 dark:text-neutral-300'
              >
                Discover our software's full potential with a sneak peek. Once
                you try it, you'll never leave! Our hobby plan offers free
                access to our SaaS platform. Get started today!
                <ul className='my-4 flex flex-col gap-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> 3 Free Automations
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> 100 tasks per month
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> 2 step actions
                  </li>
                </ul>
              </CardItem>
              <div className='flex  justify-between items-center mt-8'>
                <CardItem
                  translateZ='50'
                  className=' px-4 py-2 rounded-xl text-xs dark:text-white'
                >
                  Try Now {"-->"}
                </CardItem>
                <CardItem
                  translateZ='50'
                  as='button'
                  className=' px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                >
                  Get Started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className='inter-var'>
            <CardBody className='bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border'>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'
              >
                Pro Plan
                <h2 className='text-6xl'>$30</h2>
              </CardItem>
              <CardItem
                translateZ='60'
                className='text-sm text-neutral-500 max-w-sm mt-2 dark:text-neutral-300'
              >
                Experience our software's full potential with a sneak peek. Once
                you try it, you'll never want to leave! Our hobby plan offers
                free access to our SaaS platform.
                <ul className='my-4 flex flex-col gap-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> 12 automations per month
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> 500 tasks per month
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> 7-step actions
                  </li>
                </ul>
              </CardItem>
              <div className='flex justify-between items-center mt-8'>
                <CardItem
                  translateZ='50'
                  className='px-4 py-2 rounded-xl text-xs dark:text-white'
                >
                  Try Now {"--> "}
                </CardItem>
                <CardItem
                  translateZ='50'
                  as='button'
                  className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                >
                  Get Started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          <CardContainer className='inter-var'>
            <CardBody className=' bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border '>
              <CardItem
                translateZ='50'
                className='text-xl font-bold text-neutral-600 dark:text-white'
              >
                Commercial
                <h2 className='text-6xl'>$100</h2>
              </CardItem>
              <CardItem
                translateZ='60'
                className='text-sm text-neutral-500 max-w-sm mt-2 dark:text-neutral-300'
              >
                Unlock the power of our software for your business needs! Our commercial plan offers tailored solutions to scale your operations efficiently.
                <ul className='my-4 flex flex-col gap-2'>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> Customized automations
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> Unlimited tasks
                  </li>
                  <li className='flex items-center gap-2'>
                    <CheckCheckIcon /> Priority support
                  </li>
                </ul>
              </CardItem>
              <div className='flex  justify-between items-center mt-8'>
                <CardItem
                  translateZ='50'
                  className=' px-4 py-2 rounded-xl text-xs dark:text-white'
                >
                  Try Now {"-->"}
                </CardItem>
                <CardItem
                  translateZ='50'
                  as='button'
                  className=' px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                >
                  Get Started
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
