import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Settings,
  X
} from "lucide-react";

import { NavLink } from "react-router-dom";


export default function Sidebar({open,setOpen}) {


return (

<>

{/* Overlay mobile */}
{
open && (
<div
onClick={()=>setOpen(false)}
className="
fixed
inset-0
bg-black/50
z-40
md:hidden
"
/>
)
}



<aside className={`
fixed
top-0
left-0
z-50

w-64
h-screen

bg-gray-900
text-white
p-4

transform

${open ? "translate-x-0" : "-translate-x-full"}

md:translate-x-0

transition-transform
duration-300

md:static
`}>



<div className="
flex
justify-between
items-center
mb-8
">


<h1 className="
text-2xl
font-bold
">
AdminPro
</h1>


<X
onClick={()=>setOpen(false)}
className="md:hidden cursor-pointer"
/>


</div>



<nav className="
flex
flex-col
gap-2
">


<NavLink
to="/"
className={({isActive})=>
`
flex items-center gap-3 p-3 rounded

${
isActive
?
"bg-blue-600"
:
"hover:bg-gray-800 text-gray-300"
}

`
}
>

<LayoutDashboard size={20}/>
Dashboard

</NavLink>



<NavLink
to="/users"
className={({isActive})=>
`
flex items-center gap-3 p-3 rounded

${
isActive
?
"bg-blue-600"
:
"hover:bg-gray-800 text-gray-300"
}

`
}
>

<Users size={20}/>
Users

</NavLink>



<NavLink
to="/products"
className={({isActive})=>
`
flex items-center gap-3 p-3 rounded

${
isActive
?
"bg-blue-600"
:
"hover:bg-gray-800 text-gray-300"
}

`
}
>

<ShoppingBag size={20}/>
Products

</NavLink>




<NavLink
to="/settings"
className={({isActive})=>
`
flex items-center gap-3 p-3 rounded

${
isActive
?
"bg-blue-600"
:
"hover:bg-gray-800 text-gray-300"
}

`
}
>

<Settings size={20}/>
Settings

</NavLink>



</nav>



</aside>


</>

)

}