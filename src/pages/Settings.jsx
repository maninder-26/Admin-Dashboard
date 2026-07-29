const Settings = ()=>{


return (

<div className="
p-4
md:p-8
min-w-0
">


<div className="
bg-white
rounded-xl
shadow
p-6
max-w-xl
">


<h1 className="
text-2xl
font-bold
mb-5
">

Profile Settings

</h1>



<input
className="
w-full
border
p-3
rounded
mb-4
"
placeholder="Name"
/>



<input
className="
w-full
border
p-3
rounded
"
placeholder="Email"
/>



<button
className="
mt-5
bg-gray-900
text-white
px-5
py-2
rounded
"
>

Save

</button>



</div>


</div>

)

}


export default Settings;