const usersArr = [
  { name: "Carlos", age: 25 },
  { name: "Ana", age: 32 },
  { name: "Luis", age: 19 },
  { name: "Marta", age: 45 }
];

const filterBtn = document.getElementById("filterBtn");
const searchBtn = document.getElementById("searchBtn");
const searchByLetterBtn = document.getElementById("searchByLetter");

filterBtn.addEventListener("click", () => {

    const number = parseFloat(document.getElementById("minAge").value);
    const filteredUsers = usersArr.filter((user) => user.age >= number);

    showUsers(filteredUsers);

})

searchBtn.addEventListener("click", () => {
    const nameSearch = document.getElementById("nameSearch").value;
    const filterName = usersArr.filter((user) => user.name === nameSearch);

    showUsers(filterName);
})

searchByLetterBtn.addEventListener("click", () => {
    const letterToSearch = document.getElementById("letterSearch").value.toLowerCase();
    
    const userFilterByLetter = usersArr.filter((user) => 
        user.name.toLowerCase().startsWith(letterToSearch)
    );
 showUsers(userFilterByLetter);
});

function showUsers(userArray) {
  const userList = document.getElementById("userList");
  userList.innerHTML = "";

  for (let i = 0; i < userArray.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${userArray[i].name} - ${userArray[i].age} años`;
    userList.appendChild(li);
  }
}

showUsers(usersArr);