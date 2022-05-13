// Week 1 Day 1 
// Make Grid 

// Line by line
console.log("Line by line")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("--------------")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("--------------")
console.log("    |    |    ")
console.log("    |    |    ")
console.log("    |    |    ")

// While loop
console.log("While loop")
let gridArray1 = ["    |    |    ", "--------------"]
let i = 1
while (i < 12) {
    // if i ? 4 = 0
    if (i % 4 === 0){
    // print item 1 "----------"
    console.log(gridArray1[1])}
    // print item 1 "    |    |    "
    else {console.log(gridArray1[0])}
    // i = i+1
    i++;}

// For Loop - nested loops
console.log("Nest for loop")
const gridArray = ["    |    |    ", "--------------"]
// i is the outer loop 
// l is the inner loop 
for(let i=0; i<3; i++){
    // for 3 iteration (l=3)
    for (let l=0; l<3; l++)
        console.log(gridArray[0])
    // if i does not equal 2
    if (i !== 2) 
    console.log(gridArray[1])
    }
