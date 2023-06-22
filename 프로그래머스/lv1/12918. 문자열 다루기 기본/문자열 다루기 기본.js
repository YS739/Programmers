const solution=(s)=> {
    if(s.length === 4 || s.length === 6){
        const regex = /^[0-9]+$/
        return regex.test(s)
    }
    return false
}