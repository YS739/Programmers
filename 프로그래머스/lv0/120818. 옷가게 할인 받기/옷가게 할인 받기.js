const solution=(price)=> {
    let discountedPrice = 0;
    if(price >= 500000){
        discountedPrice = (price*0.80) 
    }
    else if(price >= 300000){
        discountedPrice = price*0.90
    }
    else if(price >= 100000){
        discountedPrice = price*0.95
    }
    else{
            return price
    }
    return Math.trunc(discountedPrice)

}