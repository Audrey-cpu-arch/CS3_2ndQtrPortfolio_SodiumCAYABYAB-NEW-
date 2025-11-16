const Cats = [
    {
        name: "Whiskers",
        breed: 'tabby',
        age: 2,
        isPlayful: true
    },
    {
        name: "Aki",
        breed: 'siamese',
        age: 4,
        isPlayful: false
    },
    {
        name: "Mimi",
        breed: 'persian',
        age: 1,
        isPlayful: true
    }
];
//Object: catSactuary
//1. Has a Method that returns the total number of cats in the sanctuary
//2. Has a Method that adds a new cat to the sanctuary
//3. Displays all cats in the sanctuary in the console log
//4. Finds the cat by name and returns if playful or not.
//5. Remove cat if not playful

let catSanctuary = {

    newCat: function addition(){

        Cats.push({
        name: "Milo",
        breed: 'persian',
        age: 1,
        isplayful: true
    })
    },

    
numberOfCats: function(){
    return Cats.length;},

  
name: function(){
    for(let i = 0; i <Cats.length; i++){
        console.log(Cats[i].name)
    }},
    

isplayful: function(){for(let i = 0; i <Cats.length; i++){
    
    if(Cats[i].isPlayful == true){
  
     console.log(Cats[i].name)
     console.log("This cat is playful")

        
}
 else {
        console.log(Cats[i].name)
     console.log("This cat isn't playful")
    }

    
}


},


removeNotPlayful: function(){

    for(let i = 0; i <Cats.length; i++){
    
    if(Cats[i].isPlayful == false){
    //Cats[i].isPlayful is a a part of the element within the array
     Cats.splice(i,1);
    //splice method only works on numbers

        
}
    }}
    };


catSanctuary.newCat();
console.log(catSanctuary.numberOfCats());
catSanctuary.name();
catSanctuary.isplayful();
catSanctuary.removeNotPlayful();
catSanctuary.name();