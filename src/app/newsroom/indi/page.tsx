import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="px-5 lg:px-56 mt-7 lg:mt-20">
        <div className="block lg:flex justify-between items-center gap-7">
          <TransitionVertical>
            <div className="w-full lg:w-1/2">
              <h1 className="text-[#727272] lg:text-base text-sm">
                12 January, 25
              </h1>

              <h1 className="text-xl lg:text-2xl">
                Why is Holtz the largest greenfield Indian investor in the US?
              </h1>
            </div>
          </TransitionVertical>

          <div className="w-full lg:w-1/2 lg:mt-0 mt-5">
            <TransitionVertical>
              <div className="h-60 w-full bg-amber-200">
                <img
                  src="/images/update2.png"
                  className="w-full h-60 object-fill"
                />
              </div>
            </TransitionVertical>
          </div>
        </div>

        <TransitionVertical>
          <div className="mt-10 lg:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
            ipsam nihil voluptates similique nesciunt veritatis harum, iste
            fugit veniam illo a modi tempora nulla maiores expedita repudiandae
            unde quibusdam assumenda, cumque itaque officiis? Eaque deleniti
            fugiat vero beatae consectetur qui quos id, voluptatum nostrum
            asperiores recusandae consequuntur illo nesciunt unde eum voluptas
            rerum quis, est commodi optio labore eveniet! Eos eum sequi saepe,
            nobis reprehenderit, vel, labore suscipit quaerat aspernatur cumque
            facere! Minima tempora a similique soluta architecto dolores magni
            eius deserunt quod, nemo ad illum labore omnis repellendus veniam
            possimus voluptatum adipisci quibusdam nihil veritatis. Minus eum a
            blanditiis!
          </div>

          <div>
            <h1 className="text-xl mt-20">Lorem ipsum dolor sit amet</h1>

            <div className="mt-7 lg:text-base text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              ipsam nihil voluptates similique nesciunt veritatis harum, iste
              fugit veniam illo a modi tempora nulla maiores expedita
              repudiandae unde quibusdam assumenda, cumque itaque officiis?
              Eaque deleniti fugiat vero beatae consectetur qui quos id,
              voluptatum nostrum asperiores recusandae consequuntur illo
              nesciunt unde eum voluptas rerum quis, est commodi optio labore
              eveniet! Eos eum sequi saepe, nobis reprehenderit, vel, labore
              suscipit quaerat aspernatur cumque facere! Minima tempora a
              similique soluta architecto dolores magni eius deserunt quod, nemo
              ad illum labore omnis repellendus veniam possimus voluptatum
              adipisci quibusdam nihil veritatis. Minus eum a blanditiis!
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-3 mt-7">
              <div className="w-full lg:w-1/2 bg-gray-200 h-64"></div>
              <div className="w-full lg:w-1/2 bg-gray-200 h-64"></div>
            </div>
          </div>
        </TransitionVertical>
      </div>

      <Footer />
    </>
  );
};

export default page;
