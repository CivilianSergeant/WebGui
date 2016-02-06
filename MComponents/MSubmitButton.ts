class MSubmitButton extends MButton{
    htmlElement:HTMLElement;
    id:string = "button";
    context:MComponent = null;
    bootstrapClass:string = "btn btn-success";
    
    constructor(name:string,context?:MComponent){
        super(name,context);
        this.htmlElement.setAttribute("type","submit");
        
        if(context.bootstrapClassFlag){
            this.htmlElement.setAttribute('class',this.bootstrapClass);
        }
    }
}