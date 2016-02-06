interface IComponent{
    
    setSize(width:number,height:number):void;
    getElement():HTMLElement;
    getId():string;
}

interface IEventListener{
    handleEvent(e:Event):void;
}

class MComponent implements IComponent{
    htmlElement:HTMLElement;
    width:number;
    height:number;
    unit:string="px";
    id:string = null;
    bootstrapClassFlag:boolean;
    bootstrapClass:string;
    
    add(component:MComponent):void{
        this.components.push(component);
        this.renderComponents();
    }
    
    appendChild(component:MComponent):void;
    appendChild(component:MComponent,index:any):void;
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
        this.htmlElement.appendChild(component.getElement());
    }
    
    setBootstrapClass(flag:boolean):void{
        this.bootstrapClassFlag = flag;
    }
    
    setId(id:string):void{
        this.id = id;
    }
    
    setSize(width:number,height:number):void{
        this.width  = (width)? width: null;
        this.height = (height)? height: null;
        
    }  
    
    getElement():HTMLElement{
        return this.htmlElement;
    }
    
    getId():string{
        return this.id;
    }
    
    show():void{
        if(this.bootstrapClassFlag){
            this.htmlElement.setAttribute("class",this.bootstrapClass);
        }
        document.writeln(this.htmlElement.outerHTML);
    }
    
}



