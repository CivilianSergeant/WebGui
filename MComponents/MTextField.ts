class MTextField extends MComponent{
    
    context:MComponent = null;
    value:string = null;
    constructor(placeholder:string,value?:string,context?:MComponent){
        super();
        
        this.context = context;
        this.cssClass = 'text-field';
        this.id = (context)? context.getId() + "-"+ this.cssClass : this.cssClass;
        this.htmlElement = document.createElement('input');
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.cssClass);
        this.htmlElement.setAttribute("type","text");
        this.htmlElement.setAttribute("placeholder",placeholder);
        if(value){
            this.value = value;
            this.htmlElement.setAttribute("value",value);
        }
        
    }
    
    setOnChangeListener(itemChanged:EventListener):void{
        
        this.htmlElement = document.getElementById(this.id);
        this.htmlElement.addEventListener("keyup",itemChanged,false);
    }

 
}