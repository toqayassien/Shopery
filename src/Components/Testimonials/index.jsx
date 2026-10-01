import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SingleReview from "../SingleReview";

export default function Testimonials() {
  const reviews = [
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      job: "First",
      img: "src/Assets/robert-fox.png"
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Dean Russell",
      job: "Second",
      img: "src/Assets/dianne-russell.png"
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Edward Pena",
      job: "Third",
      img: "src/Assets/eleanor-pena.png"
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      job: "Fourth",
      img: "src/Assets/robert-fox.png"
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Dean Russell",
      job: "Fifth",
      img: "src/Assets/dianne-russell.png"
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Edward Pena",
      job: "Sixth",
      img: "src/Assets/eleanor-pena.png"
    },
    {
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      name: "Robert Fox",
      job: "Seventh",
      img: "src/Assets/robert-fox.png"
    },
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  let visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  function slider(e) {
    if (e == "next") {
      if(currentIndex < reviews.length - 3){
        setCurrentIndex(prev => prev + 1)
      }
    }
    if (e == "previous") {
      if(currentIndex > 0 ){
        setCurrentIndex(prev => prev - 1)
      }
    }
    visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
    console.log(currentIndex);
  }
  return (
    <>
      <div className="py-10 px-5 lg:px-20 bg-gray-200">
        <div className="flex items-center justify-between">
          <p className="font-poppins text-3xl font-semibold my-10">
            Client Testimonials
          </p>
          <div className="flex gap-2 items-center">
            <button
              onClick={(e) => slider("previous")}
              className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white"
            >
              <FaArrowLeftLong className="text-sm" value="previous" />
            </button>
            <button
              onClick={(e) => slider("next")}
              className="p-2 bg-white rounded-full hover:bg-green-500 hover:text-white"
              value="next"
            >
              <FaArrowRightLong className="text-sm" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
          {visibleReviews.map((review) => {
            return (
              <SingleReview
                name={review.name}
                job={review.job}
                text={review.text}
                img={review.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
