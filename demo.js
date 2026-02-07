const user=[
    {
        name: "Monojit palit",
        age:"20",
        address:"Kolkata"
    },
    {
        name: "Ashish palit",
        age:"20",
        address:"Kolkata"
    },
    {
        name: "monojit palit",
        age:"20",
        address:"Kolkata"
    }
    
]

console.log(user.filter((ele)=>ele.name.toLowerCase().includes("monojit")));
