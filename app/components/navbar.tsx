"use client";

import {usePathname, useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";


export default function NavBar() {

    const router = useRouter();

    return <div className="w-screen flex justify-center gap-[10px] absolute top-[12vw]  font-[600]">

        {buttonTile("home", "/pages/home", router)}
        {buttonTile("calendar", "/pages/calendar", router)}
        {buttonTile("details", "/pages/details", router)}
        {buttonTile("highlights", "/pages/highlights", router)}

    </div>
}


const buttonTile = (label: string, path: string, router: AppRouterInstance) => {
    const pathname = usePathname();


    const isSelected = pathname === path;

    const handleNav = () => {

        router.push(path);
    }

    return <button type="submit"
                   className="uppercase text-[3vw] "
                   style={{
                       background: isSelected ? "linear-gradient(180deg, transparent, transparent,var(--primary))" : undefined,
                       padding: "0px 10px 0px 10px",
                       color: isSelected ? "white" : "var(--primary)",
                       borderRadius: "3px",
                   }}

                   onClick={handleNav}
    >{label}</button>
}