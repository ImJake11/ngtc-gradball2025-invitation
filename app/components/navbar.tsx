import {usePathname, useRouter} from "next/navigation";


export default function NavBar() {

    return <div className="w-screen flex justify-center gap-[10px] absolute top-[12vw]  font-[600]">

        {buttonTile("home", "/")}
        {buttonTile("calendar", "/pages/calendar")}
        {buttonTile("details", "/pages/details")}
        {buttonTile("highlights", "/pages/highlights")}


    </div>
}


const buttonTile = (label: string, path: string) => {
    const pathname = usePathname();

    const router = useRouter();

    const isSelected = pathname === path;

    const handleNav = () => {

        router.push(path);
    }

    return <button type="submit"
                   className="uppercase text-[2.5vw] "
                   style={{
                       background: isSelected ? "linear-gradient(180deg, transparent, transparent,var(--primary))" : undefined,
                       padding: "0px 10px 0px 10px",
                       color: isSelected ? "white" : "var(--primary)",
                       borderRadius: "px",
                   }}

                   onClick={handleNav}
    >{label}</button>
}