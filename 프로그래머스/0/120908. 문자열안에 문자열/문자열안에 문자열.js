const solution=(str1, str2)=>{
    const regex = new RegExp(str2)
    if(regex.test(str1)){
        return 1
    }
    else{
        return 2
    }  
}