let div = document.getElementById("launched");

function exercice(number)
{
    let script = document.createElement('script');
    script.src ='./js/'+number+'.js';
    div.appendChild(script);
    div.removeChild(script);
}
