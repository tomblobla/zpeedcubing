function randomInt(max)
{
    return Math.floor(Math.random() * (max + 1));
}

function randomIntInRange(start, end){
    return Math.floor(Math.random() * (1 + end)) + start;
}