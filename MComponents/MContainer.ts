class MContainer extends MComponent{

    
    components:MComponent[]  = [];
    context:MComponent = null;
    layout:any=null;
    
    constructor(context:MComponent);
    constructor(context:MComponent,name:string);
    constructor(context:MComponent,name?:any){
        super();
        this.context = context;
        this.cssClass = (name)? name : 'container';
        this.id = (context)? context.getId()+"-"+this.cssClass : this.cssClass;
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.cssClass);
    }
    
    add(component:MComponent):void;
    add(component:MComponent,layoutPosition:number):void;
    add(component:MComponent,layoutPosition?:any):void{
        
        this.getElement();
        if(this.layout == null){
            this.components.push(component);
            this.addComponents();
        }else{
            this.layout.add(component);
        }
        
    }
    
    addComponents():void{
        
        
        if(this.components.length>0){
            
            if(this.htmlElement != undefined){
                for(var c in this.components){
                    
                    var component = this.components[c];
                    component.setIndex(c);
                    this.appendChild(component,c); 
                }    
            }
        }
    }
    
    appendChild(component:MComponent):void;
    appendChild(component:MComponent,index:number):void;
    appendChild(component:MComponent,index?:any):void{
        
        this.htmlElement.appendChild(component.getElement());
        
    }

    setLayout(layout:MLayout):void{
        if(this.layout == null){
            this.layout = layout;
            this.htmlElement.appendChild(this.layout.getElement());
        }
        
    }
    
   
    
}