export default function Loader() {
  return (
      <div className="flex flex-row gap-2 fixed inset-0 h-screen w-screen mx-auto bg-white z-20 justify-center items-center">
        <div className="w-4 h-4 rounded-full bg-green-800 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-green-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-green-600 animate-bounce [animation-delay:.7s]"></div>
      </div>
  );
}
