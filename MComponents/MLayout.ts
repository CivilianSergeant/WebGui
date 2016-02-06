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
        this.renderComponents();
    }

    appendChild(component:MComponent):void;
    appendChild(component:MComponent,index:number):void;
    appendChild(component:MComponent,index?:any):void{
        if(index){
            var id = component.getId().toLowerCase();
            var i = (parseInt(index)+1);
                    
            var idSections:any  = id.split('-' );
            var x:any = (idSections.length - 1);
            var pattern = /^\d$/
                    
            if (!pattern.test(idSections[index])){
                var newId = id + "-" + i;
                component.setId(newId);
                component.getElement().setAttribute("id",newId);
            }
        }
            
        this.htmlElement.appendChild(component.getElement());
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
    
    
    
    
}