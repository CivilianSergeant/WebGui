class MTitleBar extends MComponent{
    
    context:MComponent = null;
    textLabel:MTextLabel = null;
    constructor(context:MComponent);
    constructor(context:MComponent,textLabel:MTextLabel);
    constructor(context:MComponent,textLabel?:any){
        super();
        this.context = context;
        this.cssClass = 'title-bar';
        this.id = context.getId()+"-"+this.cssClass;
        
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.cssClass);
        if(textLabel){
            this.textLabel = textLabel;
            this.htmlElement.appendChild(textLabel.getElement());
        }
    }
    
    
    setTextLabel(textLabel:MTextLabel){
        this.textLabel = textLabel;
        this.htmlElement.appendChild(textLabel.getElement());
    }
    
    setText(text:string):void{
        if(this.textLabel != null){
            this.textLabel.setText(text);
        }
    }
    
    getText():string{
        if(this.textLabel != null){
            return this.textLabel.getText();
        }
        return null;
    }
}