import Page from "../../core/template/page";

class SettingsPage extends Page{
    static TextObject = {
        MainTitle: 'Settings page'
    };

    constructor(id: string){
        super(id);
    }
    
    render(){
        const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle); 
        this.container.appendChild(title);
        return this.container;
    }
}

export default SettingsPage;