class MPanel extends MComponent{
   
    
    container:MContainer = null;
    context:MComponent = null;
    titleBar:MTitleBar = null;
    constructor(id:string);
    constructor(id:string,context:MComponent);
    constructor(id:string,context?:any){
        super();
        this.context = context;
        this.cssClass = "panel";
        this.id = (context)? context.getId()+ "-" + this.cssClass : this.cssClass;
        var textLabel:MTextLabel = new MTextLabel("Title Bar","h3",this);
        this.titleBar = new MTitleBar(this,textLabel);
        this.container = new MContainer(this);
        
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.cssClass);

        this.htmlElement.appendChild(this.titleBar.getElement());
        this.htmlElement.appendChild(this.container.getElement());
    }
    
    add(component:MComponent):void;
    add(component:MComponent,layoutPosition:number):void;
    add(component:MComponent,layoutPosition?:any):void{
        this.getElement();
        
        if(layoutPosition != null){
            this.container.add(component,layoutPosition);
        }else{
            this.container.add(component);
        }
        
    }

    getContainer():MComponent{
        
        return this.container;
    }
    
    getTitleBar():MTitleBar{
        return this.titleBar;
    }
    
    removeTitleBar():void{
        this.titleBar.getElement().remove();
    }
    
    setTitleBar(titleBar:MTitleBar):void{
        this.htmlElement.insertBefore(titleBar.getElement(),this.container.getElement());
    }
    
    setTitleBarText(text:string):void{
        this.titleBar.setText(text);
    }
    
    show():void{
        document.write(this.htmlElement.outerHTML);
    }
    
    
    
}