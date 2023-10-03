let dogArray = [
    "Husky",
    "Shih Tzu",
    "Corgi",
    "Catahoula",
    "Shiba",
    "Golden Retriever"
]

//for (dog of dogArray) {
//    console.log("For of Loop: ", dog)
//}

for (dog of dogArray) {
    // Use and if conditional to make a separate console.log for husky
    if (dog === "Husky"){
        console.log(`I think the ${dog} is yelling/screaming for his breakfast`)
    } else if(dog ==="Shiba") {
        console.log(`The $[dog] is sitting there judging everyone`)
    }
    
    else{
        console.log(`The ${dog} is sitting there quietly.`)
    }
}