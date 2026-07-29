import { Menu } from "lucide-react";
import { useState } from "react";


const Navbar = ({setOpen}) => {
const [dark,setDark]=useState(false)



return (

<header className="
h-16
bg-white
border-b
flex
items-center
px-4
md:px-8
justify-between
">


<Menu
onClick={()=>setOpen(true)}
className="md:hidden cursor-pointer"
/>


<h2 className="font-semibold text-xl">
Dashboard
</h2>


<div className="
w-10
h-10
rounded-full
bg-gray-900
text-white
flex
items-center
justify-center
">

M

</div>


</header>

)

}


export default Navbar;