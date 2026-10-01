import { GoPlus } from "react-icons/go";
import "./index.css";

export default function Faq() {
  return (
    <>
      <div className="grid grid-cols-10 px-5 py-10 md:px-10 lg:px-20 min-h-screen items-center">
        <div className="flex flex-col col-span-10 md:col-span-5 gap-10">
          <p className="font-semibold md:col text-lg md:text-2xl lg:text-4xl font-poppins">
            Welcome, Let's Talk About Our Ecobazar
          </p>
        <img src="src/Assets/faq.png" alt="" className="col-span-5 md:hidden" />
          <div className="w-full lg:w-100 accordion col-span-10 md:col-span-5">
            <div className="accordion-item">
              <input type="radio" id="section1" name="accordion" />
              <label for="section1" className="accordion-header">
                <label className="accordion-title font-poppins font-semibold">
                  In elementum est a ante sodales iaculis.
                </label>
                <div className="accordion-icon rounded-full bg-white p-1">
                  <GoPlus className=" text-sm" />
                </div>
              </label>
              <div className="content text-gray">
                <p>
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                  tellus at accumsan. Donec a eros non massa vulputate ornare.
                  Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <input type="radio" id="section2" name="accordion" />
              <label for="section2" className="accordion-header">
                <label className="accordion-title font-poppins font-semibold">
                  In elementum est a ante sodales iaculis.
                </label>
                <div className="accordion-icon rounded-full bg-white p-1">
                  <GoPlus className=" text-sm" />
                </div>
              </label>
              <div className="content text-gray">
                <p>
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                  tellus at accumsan. Donec a eros non massa vulputate ornare.
                  Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <input type="radio" id="section3" name="accordion" />
              <label for="section3" className="accordion-header">
                <label className="accordion-title">
                  In elementum est a ante sodales iaculis.
                </label>
                <div className="accordion-icon rounded-full bg-white p-1">
                  <GoPlus className="text-sm" />
                </div>
              </label>
              <div className="content">
                <p>
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                  tellus at accums5an. Donec a eros non massa vulputate ornare.
                  Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <input type="radio" id="section4" name="accordion" />
              <label for="section4" className="accordion-header">
                <label className="accordion-title">
                  In elementum est a ante sodales iaculis.
                </label>
                <div className="accordion-icon rounded-full bg-white p-1">
                  <GoPlus className="text-sm" />
                </div>
              </label>
              <div className="content">
                <p>
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                  tellus at accumsan. Donec a eros non massa vulputate ornare.
                  Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
              </div>
            </div>
            <div className="accordion-item">
              <input type="radio" id="section5" name="accordion" />
              <label for="section5" className="accordion-header">
                <label className="accordion-title">
                  In elementum est a ante sodales iaculis.
                </label>
                <div className="accordion-icon rounded-full bg-white p-1">
                  <GoPlus className="text-sm" />
                </div>
              </label>
              <div className="content">
                <p>
                  Morbi porttitor ligula in nunc varius sagittis. Proin dui
                  nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis
                  ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel
                  tellus at accumsan. Donec a eros non massa vulputate ornare.
                  Vivamus ornare commodo ante, at commodo felis congue vitae.
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <img src="src/Assets/faq.png" alt="" className="hidden md:block col-span-5" />
      </div>
    </>
  );
}
