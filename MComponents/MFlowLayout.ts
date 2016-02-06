class MFlowLayout extends MLayout{
	public static HORIZONTAL=1;
	public static VERTICAL = 2;
	constructor(align:any){
		super();
		this.cssClass = 'fl-layout';
		if(align == MFlowLayout.HORIZONTAL){
			this.cssClass = this.cssClass+ ' horizontal';
		}else if(align == MFlowLayout.VERTICAL){
			this.cssClass = this.cssClass+' vertical';
		}
		this.htmlElement.setAttribute("class", this.cssClass);
	}
}