class MComponentGroup extends MComponent{

	group:MComponent[] = [];
	padding:string;
	direction:string;
	constructor(comp1:MComponent,comp2:MComponent,comp3?:MComponent){
		super();
		if(comp1){
			this.group.push(comp1);
		}
		if(comp2){
			this.group.push(comp2);
		}
		if(comp3){
			this.group.push(comp3);
		}
		
	}

	addToGroup(component:MComponent):MComponentGroup{
		this.group.push(component);
		return this;
	}

	getGroup():MComponent[]{
		return this.group;
	}

	getPadding():string{
		return this.padding;
	}

	setPadding(padding:string,dir?:string):void{
		this.padding = padding+this.unit;
		this.direction = dir;
	}





}