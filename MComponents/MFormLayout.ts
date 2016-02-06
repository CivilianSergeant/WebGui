class MFormLayout extends MLayout{
    htmlElement:HTMLElement;
    id:string="form";
    
    constructor(id:string,name:string,align:number){
        super(align);
        this.id = id;
        this.align = align;
        this.htmlElement = document.createElement('div');
        this.htmlElement.setAttribute("id",id);
        this.htmlElement.setAttribute("name",name);

    }
    
    add(component:MComponent,align?:number):void{
        
        if(component instanceof MComponentGroup){
        	this.appendGroupChild(component,align);
        }
    }

    appendGroupChild(components:any,align?:number):void{
    	var group = components.getGroup();
        
    	var groupHolder = document.createElement('div');
    	groupHolder.setAttribute("class","form-group");
        if(components.getPadding() != undefined){
            if(components.direction == "left"){
                groupHolder.style.paddingLeft = components.getPadding();
            }else if(components.direction == "right"){
                groupHolder.style.paddingRight = components.getPadding();
            }else if(components.direction == "top"){
                groupHolder.style.paddingTop = components.getPadding();
            }else if(components.direction == "bottom"){
                groupHolder.style.paddingBottom = components.getPadding();
            }
            
        }
        
        if(align){
            this.align = align;
        }

        if(this.align != undefined){
            switch(this.align){
                case Align.LEFT:
                    groupHolder.style.cssFloat="left";
                case Align.RIGHT:
                    groupHolder.style.cssFloat="left";
                case Align.NONE:
                    groupHolder.style.cssFloat="clear";
                break;
                    default:
                    break;
            }
        }
    	
    	for(var c in group){
    		var component = group[c]; 
    		groupHolder.appendChild(component.getElement());
    	}
    	this.htmlElement.appendChild(groupHolder);
    }
    
    
}

class Align{
    static LEFT:number=1;
    static RIGHT:number=2;
    static NONE:number=3;
}