
// Push
{
    let foodItems = ["Apple", "Mango", "Banana", "Potato", "Orange"];
    foodItems.push("Peach", "Burger", "Rice");

    console.log(foodItems);
};



// Pop
{
    let foodItems = ["Apple", "Mango", "Banana", "Potato", "Orange"];
    let deletedItem = foodItems.pop();

    console.log(foodItems);
    console.log(`Deleted item is: ${deletedItem}`);
};


// toString 
{
    let marks = [23, 43, 42, 89];

    console.log(marks.toString());
};

//Concat
{
let fruits = ["Apple","Banana","Orange","Lemon"];
let fastFood = ["Pizza","Burger","Cake","Sandwich"];

let foods = fruits.concat(fastFood);
console.log(foods);

};

//Unshift
{
    let fruits = ["Apple","Banana","Orange","Lemon"];
    fruits.unshift("Mango");
    console.log(fruits);
};

//Shift
{
    let fruits = ["Apple","Banana","Orange","Lemon"];
    let val = fruits.shift();
    console.log(`Deleted ${val}`);
};

//Slice (it didnt change in the Original aray)
{
    let fruits = ["Apple","Banana","Orange","Lemon"];
    console.log(fruits.slice(1,3));
    console.log(fruits.slice(1));
};


