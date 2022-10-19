let age = prompt('Entrez votre age:');
if(age == 0)
{
    console.log("Vous n.avez pas d'age");
}
else if(age >0 && age < 5)
{
    console.log("Vous etes bebe");
}
else if(age > 4 && age < 12)
{
    console.log("Vous etes gamin");
}
else if(age > 11 && age < 18)
{
    console.log("Vous etes ado");
}
else if(age > 17 && age < 31)
{
    console.log("Vous etes adulte");
}
else
{
    console.log("Vous etes bien papy");
}