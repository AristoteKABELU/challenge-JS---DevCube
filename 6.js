let population_rdc = 20000000;
let population_ny = 8000000;
let year;
while(population_ny < population_rdc)
{
    population_rdc += 30000000;
    population_ny += (population_ny * 0.2);
    year++;
}
console.log(year);