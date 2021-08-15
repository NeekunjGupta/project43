class System{
    constructor(){

    }
    check(ans,enterAns){
        textSize(45)
        fill("black");
        text(code,300,300);
        if(ans===enterAns.toUpperCase()){
        return true 

        }else{
            return false
        }
    }
}