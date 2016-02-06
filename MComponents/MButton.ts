class MButton extends MComponent{
    htmlElement:HTMLElement;
    id:string = "button";
    context:MComponent = null;
    bootstrapClass:string = "btn btn-primary";
    constructor(name:string,context?:MComponent){
        super();
        this.context = context;
        this.id = (context)? context.getId() +"-"+ name : this.id;
        this.htmlElement = document.createElement('button');
        this.htmlElement.innerHTML = name;
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("type","button");
        if(context.bootstrapClassFlag){
            this.htmlElement.setAttribute('class',this.bootstrapClass);
        }
    }
    
    getElement():HTMLElement{
        return this.htmlElement;
    }
    
    getId():string{
        return this.id;
    }
    
    setId(id:string):void{
        this.id = id;
    }
    
    setOnClickListener(actionPerformed:EventListener):void{
        this.htmlElement = document.getElementById(this.id);
        this.htmlElement.addEventListener("click",actionPerformed,false);
    }

    
}