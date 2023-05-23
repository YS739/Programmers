const solution=(phone_number)=> {
   const arr = phone_number.split('');
    for(let i=0; i<phone_number.length-4; i++){
         arr[i] = '*';
    }
  return arr.join('');
}