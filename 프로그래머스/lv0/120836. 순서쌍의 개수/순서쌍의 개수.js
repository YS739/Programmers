const solution=(n) =>{
    let divN = [];
    for(let i=1; i<=n; i++){
        if(n%i === 0){
            divN.push(i)
        }        
    }
    return divN.length;
}