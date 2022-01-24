export default function Sample(Props){
    
        var a=10;
        let b=2;
        const c=3;    
    return(
         <>
         <p>{Props.x+a} </p>
         <p>{Props.y+b} </p>
         <p>{Props.z+c} </p>
         </>
     );
}
