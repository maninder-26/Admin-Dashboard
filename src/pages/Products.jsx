const products=[

{
name:"Laptop",
price:"$900",
category:"Electronics"
},

{
name:"Phone",
price:"$500",
category:"Mobile"
},

{
name:"Watch",
price:"$200",
category:"Accessories"
}

]


const Products = ()=>{


return (

<div className="
p-4
md:p-8
min-w-0
">


<h1 className="text-2xl font-bold mb-6">
Products
</h1>



<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-5
">


{
products.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-xl
shadow
p-5
"
>


<h2 className="text-xl font-bold">
{item.name}
</h2>


<p className="text-gray-500 mt-2">
{item.category}
</p>


<p className="font-semibold mt-3">
{item.price}
</p>


</div>


))
}


</div>


</div>


)

}


export default Products;