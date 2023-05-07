import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
  <>
    <section id="hero">
    
      <div
        class="container flex flex-col-reverse items-center -mt-10 px-6 mx-auto space-y-0 md:space-y-0 md:flex-row w-full h-screen text-center'"
      >
       
        <div class="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            class="max-w-md text-5xl font-bold mt-10 text-center md:text-5xl md:text-left"
          >
           Digital Share Management
          </h1>
          <p class="max-w-sm text-center text-red-950 md:text-left">
          Save time, money and be more effective with our share management tool.
          </p>
          
        </div>
        <div class="md:w-1/2 ">
          <img src="img/manage.jpg" alt=""  className='rounded-xl hover:scale-110 ease-in duration-300'/>
        </div>
      </div>
    </section>
    ,
    <section id="2">
      
    
      <div
        class="container flex flex-col-reverse items-center mx-auto space-y-0 md:space-y-0 md:flex-row"
      >
        
       
        <div class="flex flex-col mb-20 space-y-10 md:w-1/2">
       
      <dev className=" flex-col items-center p-6 space-y-6 bg-slate-100 border-green-500 md:flex rounded-xl hover:scale-105 ease-in duration-300 ">
      <a
          href="#"
          class="hidden p-1  text-white text-center bg-slate-400 hover:bg-purple-600 rounded-full focus:outline-none md:w-1/2 md:block"
          >Reduce the risk of non-compliance</a
        >
          <h1
            class="max-w-md text-5xl font-bold pb-6 text-center md:text-5xl md:text-left"
          >
          Paperless boards
          </h1>
          <p  class="max-w-sm px-3 text-center text-red-700 md:text-left" >
          It’s 2022, time to stop printing and scanning.
          </p>
          <p class="max-w-sm pt-3 text-center text-red-950 md:text-left">
          
Manage every aspect of your board meetings in our secure cloud platform. Store all your documents, prepare and share your agendas, compile board packs and digitise your minutes, plus much more..
          </p>
          </dev>
        </div>
        <div class="md:w-1/2 wt-10 ">
          <img src="img/plb.jpg" alt=""  className='rounded-xl hover:scale-105 ease-in duration-300'/>
        </div>
      </div>
    </section>
    ,
    <section id="features">
     
      <div
        class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row"
      >
       
        <div class="flex flex-col space-y-12 md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage?
          </h2>
          <p class="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div class="flex flex-col space-y-8 md:w-1/2">
         
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
          
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  01
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Track company-wide progress
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track company-wide progress
              </h3>
              <p class="text-darkGrayishBlue">
                See how your day-to-day tasks fit into the wider vision. Go from
              tracking progress at the milestone level all the way down to the
                smallest of details. Never lose sight of the bigger picture
                again.
              </p>
            </div>
          </div>

         
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
            
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  02
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Advanced built-in reports
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Advanced built-in reports
              </h3>
              <p class="text-darkGrayishBlue">
                Set internal delivery estimates and track progress toward
                company goals. Our customisable dashboard helps you build out
                the reports you need to keep key stakeholders informed.
              </p>
            </div>
          </div>

          
          <div
            class="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
          >
          
            <div class="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div
                  class="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed"
                >
                  03
                </div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Everything you need in one place
                </h3>
              </div>
            </div>

            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Everything you need in one place
              </h3>
              <p class="text-darkGrayishBlue">
                Stop jumping from one service to another to communicate, store
                files, track tasks and share documents. Manage offers an
                all-in-one team productivity solution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    ,
    <section id="testimonials">
     
      <div class="max-w-6xl px-5 mx-auto mt-32 text-center">
        
        <h2 class="text-4xl font-bold text-center">
          What's Different About Manage?
        </h2>
       
        <div class="flex flex-col mt-24 md:flex-row md:space-x-6">
        
          <div
            class="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3"
          >
            <img src="img/avatar-anisha.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Anisha Li</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>

         
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-ali.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Ali Bravo</h5>
            <p class="text-sm text-darkGrayishBlue">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>

          
          <div
            class="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3"
          >
            <img src="img/avatar-richard.png" class="w-16 -mt-14" alt="" />
            <h5 class="text-lg font-bold">Richard Watts</h5>
            <p class="text-sm text-darkGrayishBlue">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
        </div>
       
        <div class="my-16">
          <a
            href="#"
            class="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight"
            >Get Started</a
          >
        </div>
      </div>
    </section>
    ,
    <section id="cta" class="bg-brightRed">
      
      <div
        class="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0"
      >
       
        <h2
          class="text-5xl font-bold text-center text-white md:text-4xl md:max-w-xl md:text-left"
        >
          Simplify how your team works today
        </h2>
       
        <div>
          <a
            href="#"
            class="p-3 px-6 pt-2 text-brightRed bg-white rounded-full shadow-2xl baseline hover:bg-gray-900"
            >Get Started</a
          >
        </div>
      </div>
    </section>
    </>
  );
};

export default Main;
