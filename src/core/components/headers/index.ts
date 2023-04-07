import Component from "../../template/components";
import { PageId } from "../../../pages/app";

// создаем массив кнопок для их внутренних содержаний
const Buttons = [
    {
        id: PageId.MainPage,
        text: 'MainPage',
    },
    {
        id: PageId.SettingsPage,
        text: 'SettingsPage',
    },
    {
        id: PageId.StatisticsPage,
        text: 'StatisticsPage',
    },
]

class Header extends Component{
    constructor(tagName: string, className: string){
        super(tagName, className)
    }

    // создадим рендор который будет работать при нажатии
     rendorPageButtons(){
        // создаем переменную кнопок 
        const pageButtons = document.createElement('div')
        // создам цикл для перебора кнопок
        Buttons.forEach((buttons)=>{
            const buttonHTML = document.createElement('a');
            // создаем ссылку где вначале ставим хэш и потом вставляем id роута
            buttonHTML.href = `#${buttons.id}`
            // добавим текст
            buttonHTML.innerText = buttons.text
            // также добавим в див
            pageButtons.appendChild(buttonHTML) 
        })
        // добавим в контейнер
        this.container.appendChild(pageButtons)
     }

    render(){
        // вызываем рендер по кнопке
        this.rendorPageButtons()
        return this.container;
    }
}

export default Header;