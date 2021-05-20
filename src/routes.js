import Home from './components/Home';
import Booklist from './components/Booklist';
import BookDetail from './components/BookDetail';

export default {
    routes: [
        {
            name:'Home',
            path: '/Home',
            component: Home
        },
        {
            name:'Booklist',
            path: '/Booklist',
            component: Booklist
        },
        {
            name:'BookDatail',
            path: '/BookDetail/:id',
            component: BookDetail
        }
    ]
}
