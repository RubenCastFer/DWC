var array =[5,6,8,8,9,6,4,5,1,3,7,5,8,6,1,2,3,1,7,5,6,4,6,5,4];
const lista = new Set([...array].sort())
for(let l of lista){
    document.write(l+",");
}