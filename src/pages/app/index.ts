import Page from "../../core/template/page";
import MainPage from "../main";
import SettingsPage from "../settings";
import StatisticsPage from "../statistics";
import Header from "../../core/components/headers";
import ErrorPage, {ErrorTypes}from "../errors";

// создаем структуры/константы
export const enum PageId{
    MainPage = 'main-page',
    SettingsPage = 'settings-page',
    StatisticsPage = 'statistics-page',
}

// здесь будут отвчеать за рендер страницы и вывод
class App{
    // создадим контейнер который должен быть статическим так как нельзя внутри static использовать this
    private static container: HTMLElement = document.body; // любой тип данных
    // создаем id для каждой стр по которому будем удалять
    private static defaultPageId: string = 'current-page'
    // cоздаем начальную стр
    private initialPage: MainPage;
    // инциализируем кнопки
    private headers: Header;

    // создадим фун которая буде отвечать за рендеринг стр где передадим значение названий стр
    static renderNewPage(idPage: string){
        // так как id идет в div то мы дожны очистить боди
        // document.body.innerHTML = '';
        // для обращения к контейниру мы сделали его статическим
        // App.container.innerHTML = '';
        //теперь вместо пустоты возвращаем id
        const curretPageHTML = document.querySelector(`#${App.defaultPageId}`) 

        //если он существует то мы удаляем
        if (curretPageHTML){
            curretPageHTML.remove(); 
        }
        // создаем переменную стр c классом который рендерит стр
        let page: Page | null = null;
        // создаем проверку
        if(idPage === PageId.MainPage){//вызываем константы
            // теперь мы вызываем страницу
            page = new MainPage(idPage)
        }else if(idPage === PageId.SettingsPage ){
            page = new SettingsPage(idPage)
        }else if(idPage === PageId.SettingsPage){
            page = new StatisticsPage(idPage )
        }else{
            // выводим ошибку если ничего не найдено
            page = new ErrorPage(idPage, ErrorTypes.Error_404)
        }
        // проверяем сущ ли стр
        if(page){
            const pageHTML = page.render();
            // теперь добавляем id для стр
            pageHTML.id = App.defaultPageId;
            App.container.appendChild(pageHTML);
        }
    }

    // создадим конструктро который будет менять роутеры
    private enableRouteChange(){
        // здесь при смени хэша мы получать его и выводить страницу по хэшу
        window.addEventListener('hashchange', ()=>{
            // получаем его где убираем еще сам хэш - # первым
            const hash = window.location.hash.slice(1);
            // выводим его в фун которую мы сделали для рендера
            App.renderNewPage(hash);
        })
    }

    // создадим конструктор куда будем передоват наши значения для страниц
    constructor(){
        // присвоем значение body
        // this.container = document.body;
        // создаем стр с id 
        this.initialPage = new MainPage('main-page');
        // создаем кнопки
        this.headers = new Header('header', 'header-container')
    }

    //  метод который будет отвечать за запуск приложения и метод DOM  
    run(){
        // то что мы выводим
        // this.container.innerText="SPA GOOOD"
        
        // так мы выводим то, что мы писали в классах с помощью методов
        // const MainPageHTML = this.initialPage.render();
        // this.container.appendChild(MainPageHTML);
        
        // рендер кнопок
        App.container.appendChild(this.headers.render())
        // рендер стр
        App.renderNewPage('main-page');
        // выводим стр по хэш
        this.enableRouteChange();
    }
}

// Создаем страницы Main, Statistics, Setting

// вывод
export default App;