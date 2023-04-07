import Page from "../../core/template/page";

    // конструктор для ошибки 
    export const enum ErrorTypes{
    Error_404 = 404,
    }   

// создаем проверку 
class ErrorPage extends Page{
    // создадим тип ошибки так как в родители его нет
    private errorType: ErrorTypes | string;//либо числовая ошибка либо строчка
    
    // укз тип ему где каждый ключ строка и значение строка
    static TextObject:{[prop:string]: string} = {
        '404': 'Error!'
    };

    constructor(id:string, errorType:ErrorTypes | string){
        super(id);
        this.errorType = errorType;
    }

    // теперь рендерим ошибку
    render(){
        // передаем ключ в массиве
        const title = this.createHeaderTitle(ErrorPage.TextObject[this.errorType]);
        this.container.appendChild(title);
        return this.container;
    }
}

export default ErrorPage;