import { useLocation, Link, NavLink } from "react-router";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export default function BreadCrumbs() {
  const location = useLocation();
  const crumbs = location.pathname.split("/");

  return (
    <div className="bg-[url(/src/Assets/breadcrumbs.jpg)] bg-cover bg-center w-full h-10 lg:h-20 flex px-5 md:px-10 lg:px-20">
      <div className="flex items-center gap-3 text-gray text-sm md:text-md lg:text-lg ">
        {crumbs.map((path) =>
          path == "" ? (
            <Link to="/">
              <GoHome />
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-2 capitalize ">
                <IoIosArrowForward />
                <p className="text-green-600" to={path}>
                  {path.replaceAll('-', " ")}
                </p>
              </div>
            </>
          ),
        )}
      </div>
    </div>
  );
}
