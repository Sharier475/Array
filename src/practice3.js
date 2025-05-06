let comp = ["bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
{
    comp.shift();
    console.log(comp);
};

{
    comp.splice(2, 1, "Ola");
    console.log(comp);
};

{
    comp.push("Amazon");
    console.log(comp);
};