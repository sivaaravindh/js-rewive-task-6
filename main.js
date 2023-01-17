let a=parseInt (prompt("Enter the value"));
let b=parseInt (prompt("Enter the value"));
let c=parseInt (prompt("Enter the value"));



if (a<b && a<c){
        if(b<c){
                console.log(a + ", " + b+ ", " +c);
        }
        else
        {
            console.log(a + ", " + c + ", " +b);
        }
}
else if(b<a && b<c){
        if(a<c){
                console.log(b + ", " + a+ ", " +c);
        }
        else
        {
            console.log(b + ", " + c + ", " +a);
        }
}
else if(c<a && c<b){
        if(a<b){
                console.log(c+","+a+","+b);
        }
        else{
                console.log(c+","+b+","+a);
        }

}

// if(a>b){
//         if(a>c){
//                 if(a>d){
//                         console.log(a + ", " + b + ", " +c +", "+d);
//                         }
//                 else{
//                         console.log(d + ", " + c + ", " +b +", " +a);
//                         }
//                 }
// else if(c>d){
//         console.log(c + ", " + b + ", " + a +", "+d);
//         }
// else{
//         console.log(d + ", " + b + ", " + a +", " +c);
// }
// }
// else{
//         if(b>c){
//                 if(b>d){
//                         console.log(b + ", " + a + ", " + c +", " +d);
//                         }
//                 else{ 
//                         console.log(d + ", " + b + ", " + c +", " +b);
//                 }
//                 }
//                 else if(c>d){
//                         console.log(c + ", " + b + ", " + d +", " +a);
//                 }
//                 else{
//                         console.log (d+ ", " + b + ", " + c +", " +a);
//                 }
//         }
