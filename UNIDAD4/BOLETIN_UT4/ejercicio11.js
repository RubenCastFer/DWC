//a
var tripleAndFilter=(arr)=>{
    return arr.map((value)=>{
            return value * 3;
         }).filter((value)=>{
           return value % 5 === 0;
      })
}
//b

var doubleOddNumbers=(arr)=>{
    return arr.filter((val)=>{
        return val % 2 !== 0;
    }).map((val)=>{
        return val *2;
    })
}


//c
var bar=()=>{ 
    let txt = ''; 
    for(let i in arguments){ 
    txt += arguments[i];
    } 
    return txt;
}
    
