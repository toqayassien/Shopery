export default function SingleReview({ text, name, job, img }) {
  return (
    <>
      <div className="col-span-2 bg-white p-4 rounded-sm">
        <img src="src/Assets/quote.png" alt="" />
        <p className="text-gray font-poppins text-sm my-3">{text}</p>
        <div className="flex md:flex-col lg:flex-row md:gap-4 justify-between items-center">
          <div className="grid grid-cols-3 w-fit gap-2 items-center lg:px-0">
            <img src={img} alt="" className="rounded-full" />
            <p className="col-span-2 font-poppins font-semibold text-sm">
              {name} <br />
              <span className="text-gray font-normal text-xs">{job}</span>
            </p>
          </div>
          <img src="src/Assets/client-stars.png" alt="" className="w-20"/>
        </div>
      </div>
    </>
  );
}
