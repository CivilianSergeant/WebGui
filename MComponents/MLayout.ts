class MLayout extends MComponent{
   
    components:MComponent[];
    
    constructor(){
        super();
        this.cssClass = 'layout';
        this.id = this.cssClass;
        this.components = [];
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.cssClass);
    }
   
    add(component:MComponent):void;
    add(component:MComponent,align?:number):void;
    add(component:MComponent,align?:any):void{
        this.getElement();
        this.components.push(component);
        this.addComponents();
    }

    appendChild(component:MComponent):void;
    appendChild(component:MComponent,index:number):void;
    appendChild(component:MComponent,index?:any):void{
            
        this.htmlElement.appendChild(component.getElement());
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
    
    
    
    
}