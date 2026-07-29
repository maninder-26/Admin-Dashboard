import {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Card from "../components/Card";

import {
 LineChart,
 Line,
 XAxis,
 YAxis,
 Tooltip,
 ResponsiveContainer
} from "recharts";


const data=[
{
name:"Jan",
sales:400
},
{
name:"Feb",
sales:700
},
{
name:"Mar",
sales:500
},
{
name:"Apr",
sales:900
},
{
name:"May",
sales:800
}
]



const orders=[

{
id:"#101",
customer:"Alex",
amount:"$200",
status:"Completed"
},

{
id:"#102",
customer:"John",
amount:"$500",
status:"Pending"
},

{
id:"#103",
customer:"Mike",
amount:"$300",
status:"Completed"
}

]


const Dashboard = () => {


const [open,setOpen]=useState(false);



return (

<div className="
min-h-screen
bg-gray-100
flex
overflow-x-hidden
">


<Sidebar 
open={open}
setOpen={setOpen}
/>



<div className="
flex-1
min-w-0
">


<Navbar setOpen={setOpen}/>



<main className="
p-4
md:p-8
">


<h1 className="
text-2xl
font-bold
mb-6
">
Dashboard
</h1>



{/* Cards */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
">


<Card 
title="Users"
value="1200"
/>


<Card 
title="Products"
value="350"
/>


<Card 
title="Orders"
value="890"
/>


<Card 
title="Revenue"
value="$25K"
/>


</div>





{/* Chart */}


<div className="
bg-white
rounded-xl
shadow
p-5
mt-8
">


<h2 className="
font-bold
text-xl
mb-5
">

Sales Overview

</h2>



<div className="
h-[300px]
w-full
">


<ResponsiveContainer width="100%" height="100%">


<LineChart data={data}>


<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>


<Line
type="monotone"
dataKey="sales"
/>


</LineChart>


</ResponsiveContainer>


</div>


</div>





{/* Orders Table */}



<div className="
bg-white
rounded-xl
shadow
mt-8
p-5
">


<h2 className="
font-bold
text-xl
mb-5
">

Recent Orders

</h2>




<div className="
overflow-x-auto
">


<table className="
w-full
min-w-[600px]
">


<thead
className="bg-gray-100"
>

<tr>

<th className="p-3 text-left">
ID
</th>


<th className="p-3 text-left">
Customer
</th>


<th className="p-3 text-left">
Amount
</th>


<th className="p-3 text-left">
Status
</th>


</tr>


</thead>



<tbody>


{
orders.map((order,index)=>(


<tr 
key={index}
className="border-t"
>


<td className="p-3">
{order.id}
</td>


<td className="p-3">
{order.customer}
</td>


<td className="p-3">
{order.amount}
</td>



<td className="p-3">

<span className="
bg-green-100
px-3
py-1
rounded-full
text-sm
">

{order.status}

</span>

</td>


</tr>


))
}


</tbody>


</table>


</div>


</div>



</main>


</div>


</div>

)

}


export default Dashboard;