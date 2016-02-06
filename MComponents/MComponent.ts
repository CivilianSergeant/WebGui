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
    index:any = null;
    getCssClass():string{
        return this.cssClass;    
    }
    
    getElement():HTMLElement{
        var documentHTMLElement = document.getElementById(this.id);
        if(documentHTMLElement != null){
            this.htmlElement = document.getElementById(this.id);
        }
        return this.htmlElement;
    }
    
    getId():string{
        return this.id;
    }
    
    setId(id:string):void{
        this.id = id;
    }

    setIndex(index:string):void{

        if(this.index == null){
            this.index = (parseInt(index)+1);
        }
        var pattern = /[0-9]/
        if(!pattern.test(this.getId())){
            if (this.index != null) {
                this.setId(this.getId() + "-" + this.index);
                this.htmlElement.setAttribute('id', this.id);
            }
        } 

    }
    
    
    
}



