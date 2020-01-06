import {
    setStore
} from "@/util/store"

const common = {
    state: {
        screen: -1,
        routeList: [{
            title: "首页",
            path: "/index"
        }]
    },
    actions: {},
    mutations: {
        SET_SCREEN: (state, screen) => {
            state.screen = screen
            setStore({
                name: 'screen',
                content: state.screen,
                type: 'session'
            })
        },
        SET_ROUTELIST: (state, routeList) => {
            state.routeList = routeList
            setStore({
                name: 'routeList',
                content: state.routeList,
                type: 'session'
            })
        },
    }
}

export default common