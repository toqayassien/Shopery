export default function ViewFullProduct({ name, src, price, sale, category }) {
  return (
    <div className="grid grid-cols-10 h-100 px-20">
      <div className="col-span-5 grid grid-rows-4 grid-cols-5 gap-4">
        <div className="col-span-1">
          <img
            src={`http://localhost:1337${src}`}
            alt=""
          />
        </div>
        <div className="col-span-4 row-span-4">
          <img
            src={`http://localhost:1337${src}`}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="col-span-1">
          <img
            src={`http://localhost:1337${src}`}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            src={`http://localhost:1337${src}`}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            src={`http://localhost:1337${src}`}
            alt=""
          />
        </div>
      </div>
      <div className="col-span-5">
        <p className="text-4xl font-poppins font-bold">{name}</p>
        <p className="text-xs font-poppins">{category}</p>
      </div>
    </div>
  );
}
