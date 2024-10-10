//function print_int(n:number):number{   
    //for (let i=0; i<5; i++){
        //console.log(i)
    //}
    
//console.log(print_int(5))

        //a.
        function print_int(n:number):number{
            for (let i=1; i<n; i++){
                console.log(i) 
            }
           return n 
        }
        //console.log(print_int(10))
        
        
                //b.
        function sum_int(m:number):number{
            let res=0
        
            for (let i=1; i<=m; i++){
                res = res + i    
            }
        
        return res
        
        }
        console.log(sum_int(5))
        
        
                //c.
                function mult_int(m:number):number{
                    let res=1
                
                    for (let i=1; i<=m; i++){
                        res = res * i    
                    }
                
                return res
                
                }
                console.log(mult_int(5))
        
                //d.
        
        function factorial(o:number):number{
            let res:number=1
            for(let i=0; i<o; i++){
                res*=i+1
            }
            return res
        }
        console.log(factorial(5))
        
        
                //e.
        function power(x:number, n:number):number{
                let res:number = 1
                 for (let i=0; i<n; i++) {
                    
                    res *=x
                }
                return(res);
            }
            console.log(power(2,2))
        
        
        
                //f.
        
        function sum_even(n:number):number{
        let res:number = 0
        for (let i=0; i<=n ; i++){
            if (i%2==0){
                res+=i             
                }
            }
            return res
        }
            // console.log(sum_even(10))
        
        
        
                //g.
        
        function isPrime(n:number):boolean{
            for (let i=2; i<n; i++ ){
                if(n%i==0){
                    return false;
                }
            }
                return true;     
        }        
        console.log(isPrime(13))
                
        
        
        //h.


        function pgcd(a:number, b:number):number{
            let res:number=0
            for (let i=a; i>0; i--){
                if(a%i==0 && b%i==0){
                        return i
                        }
                    }
                return res
                }
        console.log(pgcd(24,32))
        
        
//i.

function is_perfect(n:number):boolean{
    let res:number=0
    for(let i=1; i<n; i++){
        if(n%i==0){
            res+=i
        }
        if(res==n){
            return true
        }
    }
    return false
}
console.log(is_perfect(6))
console.log(is_perfect(7))
        
        
        