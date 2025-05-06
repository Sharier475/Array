// Solved by using for of loop

{
    let items = [250, 645, 300, 900, 50]
    let i = 0;

    for (let val of items) {

        let offer = val / 10;
        let finalPrice = items[i] - offer;
        console.log(finalPrice);
        i++;

    }
};


//  Solved by using for loop
{

    let items = [250, 645, 300, 900, 50]
    for (let i = 0; i < items.length; i++) {
        console.log(`Original price is: ${items[i]}`);
        let val = items[i];
        let offer = val / 10;
        items[i] -= offer;
        console.log(`After Discount the price is: ${items[i]}`);
    }

    console.log(`After discount all item's offer prices are: ${items}`);


};