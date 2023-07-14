const solution=(sides)=> {
    const sortSides = sides.sort((a,b)=> b-a)
    return sortSides[0] < sortSides[1] + sortSides[2] ? 1 : 2
}