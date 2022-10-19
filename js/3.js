function entryValid()
{
    while(true)
    {
        number = prompt('nombre:');
        if(parseInt(number))
        {
            return number;
        }else
        {
            alert('Veuillez entrez un nombre');
        }
    }
}

function greatest(a,b,c)
{
    if(a==b && b==c)
    {
        console.log('Les trois variables sont identiques');
    }
    else if(a==b || b==c || a==c)
    {
        console.log('deux des variables sont de valeurs égales')
    }
    else
    {
        console.log('Les trois variables sont différentes')
    }
}

let number_1 = entryValid();
let number_2 = entryValid();
let number_3 = entryValid();
 
greatest(number_1, number_2,number_3);