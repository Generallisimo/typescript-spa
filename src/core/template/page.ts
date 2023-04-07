// пишем абстарктный метод который может создержать в себе схожие методы также делаем ооп чтобы файлы не повторялись
abstract class Page{
    protected container: HTMLElement;
    static TextObject = {};
 
    // передаем id чтобы стр отличались
    constructor(id: string){
        // создаем ему теги
        this.container = document.createElement('div');
        // присваеваем id который передадим в конструктор
        this.container.id = id;
    }
    // для наследоваения
    protected createHeaderTitle(text: string){ // создадим метод который будет создавать загаловок для станицы
        const headerTitle = document.createElement('h1');
        headerTitle.innerText = text;
        // возврщ
        return headerTitle;
    }
    render(){
        return this.container
    }
}

export default Page;