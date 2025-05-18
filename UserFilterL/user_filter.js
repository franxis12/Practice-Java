const usersArr = [
  { name: "Carlos", age: 25 },
  { name: "Ana", age: 32 },
  { name: "Luis", age: 19 },
  { name: "Marta", age: 45 }
];


const btn = document.getElementById("filterByLength");

btn.addEventListener("click", () => {
   const number4 = 4;
   const filterArray4 = usersArr.filter((user) => user.name.length === number4) ;

   showUser(filterArray4);
});

function showUser(array){
    const ulist = document.getElementById("userList");
    document.getElementById("userList").innerHTML = "";


    for (let i = 0; i < array.length; i++){
        const li = document.createElement("li");
        li.textContent =`${array[i].name} - ${array[i].age}`;
        ulist.appendChild(li);
    }

}

showUser(usersArr);