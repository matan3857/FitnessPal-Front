import { Homepage } from './pages/Homepage'
import { Menu } from './pages/Menu'
import { BuildWorkout } from './pages/BuildWorkout'


const routes = [
    {
        path: '/menu',
        component: Menu,
        label: 'Menu',
        isExact: true
    },
    {
        path: '/BuildWorkout',
        component: BuildWorkout,
        label: 'BuildWorkout',
        isExact: true
    },
    {
        path: '/',
        component: Homepage,
        label: 'Home 🏠',
        isExact: true
    },

]


export default routes;