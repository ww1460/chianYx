const getters = {
    screen: state => state.common.screen,
    routeList:state => state.common.routeList,
    register_step:state => state.common.register_step,
    register_role:state => state.common.register_role,
    userInfo: state => state.user.userInfo,
    userToken:state => state.user.userToken,
    userRole:state => state.user.userRole,
    personalInfo:state => state.user.personalInfo,
}

export default getters