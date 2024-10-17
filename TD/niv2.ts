        //a.
function h_triangle(n:number):string{
    let res=""
    for(let i=0; i<=n; i++){
        for(let k=0; k<i; k++){
            res+= "*"
        }
        res+="\n"
    }
    return res
    
}
console.log(h_triangle(5))

        //b.
function rectangle(n:number, m:number):string{
    let res=""
    for(let i=1; i<=n; i++){
            res+= "*"        
    }
    for(let k=1;k<m;k++){        
            res+="\n"
            for(let l=1;l<=n;l++){
                res+="*"
            }            
    }      
    return res    
}
console.log(rectangle(9,2))

        //c.
function reverse_ints(n:number):string{
    let res:string=""
    for(let i=n;i>=1;i--){
        res=res+i
    }
    return res
}
console.log(reverse_ints(10))


        //d.
function int_pyramid(n:number):string{
    let res=""
    for(let i=0; i<n;i++){
        for(let j=0; j<=i; j++){
            
            res+=j+1
        }
        res+="\n"
    }
    return res
}
console.log(int_pyramid(5))


        //e.
//Pas fait seul
function beautifulMult(n: number): string {
    let res = "";
    for (let i = 1; i <= 10; i++) {
        res += `${n} x ${i} = ${n * i}`;
        if (i < 10) {
            res += ", "+"\n";
        }
    }
    return res;
}
console.log(beautifulMult(5));