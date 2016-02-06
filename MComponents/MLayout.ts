class MLayout extends MComponent{
    htmlElement:HTMLElement;
    id:string = "layout";
    components:MComponent[];
    align:number;

    constructor(align:number){
        super();
        this.components = [];
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.id);
    }
   
    add(component:MComponent):void;
    add(component:MComponent,align?:number):void;
    add(component:MComponent,align?:any):void{
        this.components.push(component);
        this.renderComponents();
    }

    renderComponents():void{
        
        if(this.components.length>0){
            
            if(this.htmlElement != undefined){
                for(var c in this.components){
                    
                    var component = this.components[c];
                    this.appendChild(component,c); 
                }    
            }
        }
    }
    
    getElement():HTMLElement{
        return this.htmlElement;
    }
    
    
}