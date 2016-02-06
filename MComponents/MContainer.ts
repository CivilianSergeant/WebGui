class MContainer extends MComponent{

    
    components:MComponent[]  = [];
    context:MComponent = null;
    layout:any=null;
    
    constructor(context:MComponent){
        super();
        this.context = context;
        this.cssClass = 'container';
        this.id = (context)? context.getId()+"-"+this.cssClass : this.cssClass;
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id",this.id);
        this.htmlElement.setAttribute("class",this.cssClass);
    }
    
    add(component:MComponent):void;
    add(component:MComponent,layoutPosition:number):void;
    add(component:MComponent,layoutPosition?:any):void{
        
        this.getElement();
        this.components.push(component);
        this.addComponents();
    }
    
    addComponents():void{
        
        
        if(this.components.length>0){
            
            if(this.htmlElement != undefined){
                for(var c in this.components){
                    
                    var component = this.components[c];
                    this.appendChild(component,c); 
                }    
            }
        }
    }
    
    appendChild(component:MComponent):void;
    appendChild(component:MComponent,index:number):void;
    appendChild(component:MComponent,index?:any):void{
        if(index){
            var id = component.getId().toLowerCase();
            var i = (parseInt(index)+1);
            
            var idSections:any = id.split('-');
            var index:any = (idSections.length - 1);
            var pattern = /^\d$/
            
            if(!pattern.test(idSections[index])){
                var newId = id + "-" + i;
                component.setId(newId);
                component.getElement().setAttribute("id",newId);
            }
        }
        if(this.layout != null){
            this.layout.add(component);
        }else{
            this.htmlElement.appendChild(component.getElement());
        }
    }

    setLayout(layout:MLayout):void{
        this.layout = layout;
        this.htmlElement.appendChild(this.layout.getElement());
    }
    
   
    
}