class MTextLabel extends MComponent{
    
    
    value:string = null;
    type:string = null;
    context:MComponent = null;
    
    constructor(value:string,type:string,context?:MComponent){
        super();
        this.context = context;
        this.cssClass = 'text-label';
        this.id = (context!=undefined)? context.getId()+"-"+this.cssClass : this.cssClass;
        this.value = value;
        this.type  = type;
        
        this.htmlElement = document.createElement(type);
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.cssClass);
        this.htmlElement.innerHTML = this.value;
    }
    
    getText():string{
        return this.value;
    }
    
    setText(value:string):void{
        this.value = value;
        this.getElement();
        this.htmlElement.innerHTML = value;
    }
    
    
}