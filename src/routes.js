import { Homepage } from './pages/Homepage'
import { Menu } from './pages/Menu'
import { BuildWorkout } from './pages/BuildWorkout'
import { Info } from './pages/Info'
import { MyWorkouts } from './pages/MyWorkouts'
import { WeightTrack } from './pages/WeightTrack'


const routes = [
    {
        path: '/menu',
        component: Menu,
        label: 'Menu',
        isExact: true
    },
    {
        path: '/buildWorkout',
        component: BuildWorkout,
        label: 'buildWorkout',
        isExact: true
    },
    {
        path: '/myWorkouts',
        component: MyWorkouts,
        label: 'myWorkouts',
        isExact: true
    },
    {
        path: '/info',
        component: Info,
        label: 'info',
        isExact: true
    },
    {
        path: '/weight',
        component: WeightTrack,
        label: 'weight',
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