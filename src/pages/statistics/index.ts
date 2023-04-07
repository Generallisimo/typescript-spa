import Page from "../../core/template/page";

class StatisticsPage extends Page{
    static TextObject = {
        MainTitle: 'Statistics page'
    };

    constructor(id: string){
        super(id);
    }

    render(){
        const title = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle);
        this.container.appendChild(title);
        return this.container;
    }
}

export default StatisticsPage;