import { Outlet } from "react-router";
import BreadCrumbs from "../../Components/BreadCrumbs";

export default function pagesLayout(){
    return <>
        <BreadCrumbs/>
        <Outlet/>
    </>
}