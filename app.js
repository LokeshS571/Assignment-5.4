var Employee=new Array(5);
Employee[0]= {name:"Lokesh S",age:21,salary:"3.3 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560040}};
Employee[1]= {name:"Sathya",age:20,salary:"3.3 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560010}};
Employee[2]= {name:"Vijay",age:20,salary:"3.3 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560017}};
Employee[3]= {name:"Balram",age:21,salary:"3.5 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560019}};
Employee[4]= {name:"Umesh",age:20,salary:"3.4 lpa",address: {city:"Bengaluru", state:"Karnataka",pincode:560020}};







// to display in console
console.log("Employee Name :",Employee[2].name); 
console.log("Age :",Employee[2].age);
console.log("Salary :",Employee[2].salary);
console.log("City :",Employee[2].address.city);
console.log("State :",Employee[2].address.state);
console.log("Pincode :",Employee[2].address.pincode);
