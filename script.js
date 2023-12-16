const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((person) => {
        if(person.profession === "developer")
        {
            console.log(person.name);
        }
    });
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter your name: ").trim();
    const age = parseInt(prompt("Enter your age: "));
    const profession = prompt("Enter your profession: ").trim();
    
    if(!name || isNaN(age) || !profession)
    {
        alert("Please Enter valid details");
        return;
    }

    data.push({name, age, profession});
    console.log("the data has been added.")
   // console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i = data.length - 1; i >= 0; i--)
    {
        if(data[i].profession === "admin")
        {
            data.splice(i, 1);
        }
    }
    console.log("Admins are removed");
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummy = [
        {name: "Sweta", age: 21, profession: "developer"},
        {name: "Heera", age: 26, profession: "Architect"},
    ];

    const result = data.concat(dummy);
    console.log("here's your previous data", data);
    console.log("concatination done: ", result);
  }
  
  // 5. Average Age
  function averageAge() {
    const total = data.reduce((sum, person) => sum + person.age, 0);
    const avgage = Math.floor(total / data.length);
    console.log("The average age of all is: ", avgage);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some((person) => person.age > 25);
    console.log(above25? "yes there's a person with age above 25": "No one is there");
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const uprofession = [...new Set(data.map((person) => person.profession))];
    console.log(uprofession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a, b) => a.age - b.age);
    console.log("arrays has been sorted on ascending order by age", data)
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find((person) => person.name === "john" && person.profession !== "manager");

    if(john){
        john.profession = "manager";
        console.log("Profession has been updated");
    }

    else{
        console.log("No john found");
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const pcount = data.reduce((count, person) => {
      
      count[person.profession] = (count[person.profession] || 0) + 1;
      return count;
    
    }, {});

    console.log(pcount);
  }