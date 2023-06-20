const solution=(s)=> {
   const newS = s.split('').sort((a, b) => a > b ? -1 : 1)
   return newS.join('')
}