class MFlowLayout extends MLayout{
	constructor(){
		super();
		this.cssClass = 'fl-layout';
		this.htmlElement.setAttribute("class", this.cssClass);
	}
}