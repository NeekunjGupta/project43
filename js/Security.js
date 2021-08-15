class Security{
    constructor(){
        this.access1 = createInput("Code1");
        this.access1.position(100,90);
        this.access1.style('background','white');

        this.button1 = createButton("Check");
        this.button1.position(100,110);
        this.button1.style('background','white');

        this.access2 = createInput("Code2");
        this.access2.position(700,190);
        this.access2.style('background','white');

        this.button2 = createButton("Check");
        this.button2.position(700,210);
        this.button2.style('background','white');

        this.access3 = createInput("Code3");
        this.access3.position(100,290);
        this.access3.style('background','white');

        this.button3 = createButton("Check");
        this.button3.position(100,310);
        this.button3.style('background','white');
    }
    display(){
        this.button1.mousePressed(()=>{
         if(system.check(accessCode1,this.access1.value())){
         this.access1.hide();
         this.button1.hide();
         score=score+1;
         }
        })

        this.button2.mousePressed(()=>{
            if(system.check(accessCode2,this.access2.value())){
                this.access2.hide();
                this.button2.hide();
                score=score+1;
            }
               })

        this.button3.mousePressed(()=>{
            if(system.check(accessCode3,this.access3.value())){
                this.access3.hide();
                this.button3.hide();
                score=score+1;
            }
        })
    }
}