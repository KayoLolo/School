        //a.
        function hello():string{
            return'Hello world'
        }
        //console.log(hello())
        
                //b.
        function add(x:number, y:number):number{
            return x+y
        }
        //console.log(add(2,3))
        
                //c.
        function mult(x:number, y :number):number{
            return x*y
        }
        //console.log(mult(2,3))
        
        
                //d.
        function max_nb(x:number, y:number):number{
            if (x > y){
                return x
            }
            return y
        }
        //console.log(max_nb(3,2))
        
        
                //e.
        function min_nb(x:number, y:number):number{
            if (x < y){
                return x
            }
            return y
        }
        //console.log(min_nb(3,2))
        
        
                //f.
        function is_even(x:number):boolean{
            if(x%2==0){
                return true;
            }
            return false;
        }
        //console.log(is_even(5))
        
        
                //g.
        function is_div(x:number,y:number):boolean{
            if(x%y==0){
                return true;
            }
            return false;
        }
        //console.log(is_div(4,4))
        
        
                //h.
        function is_leap(year:number):boolean{
            if(year%100==0){
                return false
            }
        
        
            if (year%4==0){
                return true
            }
        
            if(year%400==0){
                return true
            }
        
            return false
        
        }
        console.log(is_leap(2100))
        
        
                //i.
        function delta(a:number, b:number, c:number):number{
            return b**2-4*a*c
        }
        //console.log(delta(2,2,2))
        
        
                //j.
        function root(a:number,b:number, c:number):number[]{
            let res:number=b**2-4*a*c
        
            if(res=0){
                return [-b/2*a]
            }
        
            if(res<0){
                return []
            }
        
            return [-b - res**2/2*a , -b + res**2/2*a ]
        }
        //console.log(root(4,2,2))