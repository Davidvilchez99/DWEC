examen1 = parseInt(prompt("Introduce primer examen"));
examen2 = parseInt(prompt("Introduce segundo examen"));
trabajo1 = parseInt(prompt("Introduce primer trabajo"));
trabajo2 = parseInt(prompt("Introduce segundo trabajo"));

media = ((examen1 + examen2) * 0.75) + ((trabajo1 + trabajo2) * 0.25)
if ((media < 5) && (examen1 < 4.5) && (examen2 < 4.5) && (trabajo1 < 4.5) && (trabajo2 < 4.5))
{
    console.log("Suspenso");
}