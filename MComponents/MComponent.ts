interface IComponent{

    getElement():HTMLElement;
    getId():string;
}

interface IEventListener{
    handleEvent(e:Event):void;
}

class MComponent implements IComponent{
    
    // Hold HTML Object
    htmlElement:HTMLElement;
    
    unit:string="px";
    
    id:string = null;
    cssClass:string = null;
    
    getCssClass():string{
        return this.cssClass;    
    }
    
    getElement():HTMLElement{
        var documentHTMLElement = document.getElementById(this.id);
        if(documentHTMLElement != null){
            this.htmlElement = document.getElementById(this.id);
            console.log('here',this.id);
        }
        return this.htmlElement;
    }
    
    getId():string{
        return this.id;
    }
    
    setId(id:string):void{
        this.id = id;
    }
    
    
    
}



