// импорт для создания дальше дочерних классов
import Page from "../../core/template/page";

// пишем структуру страницы
class MainPage extends Page{//создаем Page родительским классом
    // создаем статик где будут хранится все строки, он нужен для точно чтобы вручную не создавать все время инстансы
    static TextObject = {
        MainTitle: 'Mane page'
    };

    // передаем id чтобы стр отличались
    constructor(id: string){
        // так мы вызываем из родительского класса фун конструктора
        super(id);
    }

    // рендерим заголово
    render(){
        // передаем загаловок
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle);
        // теперь добавляем в наш контейнер 
        this.container.appendChild(title);
        return this.container;
    }
}

export default MainPage;