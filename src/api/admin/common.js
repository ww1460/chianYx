import request from '@/router/axios'
// 获取banner列表
export function GetBannerList(query) {
    return request({
        url: '/api/services/app/CommonApi/GetBannerList',
        method: 'post',
        data: query
    })
}
// 获取新闻图片列表
export function GetPhotoList(query) {
    return request({
        url: '/api/services/app/Photo/GetPhotoList',
        method: 'post',
        data: query
    })
}
// 新闻动态列表
export function GetNewsList(query) {
    return request({
        url: '/api/services/app/Newsapi/GetNewsList',
        method: 'post',
        data: query
    })
}
// 通知公告列表
export function GetNotificList(query) {
    return request({
        url: '/api/services/app/Photo/GetNotificList',
        method: 'post',
        data: query
    })
}
// 测试班列表
export function GetExaminerClassList(query) {
    return request({
        url: '/api/services/app/TestClass/GetExaminerClassList',
        method: 'post',
        data: query
    })
}
// 考评员列表
export function GetExaminerClassList2(query) {
    return request({
        url: '/api/services/app/ExaminerClass/GetExaminerClassList',
        method: 'post',
        data: query
    })
}
// 精彩图片视频列表
export function GetPhotoVideosList(query) {
    return request({
        url: '/api/services/app/Photo/GetPhotoVideosList',
        method: 'post',
        data: query
    })
}
// 合作伙伴列表
export function GetParterList(query) {
    return request({
        url: '/api/services/app/CommonApi/GetParterList',
        method: 'post',
        data: query
    })
}
// 常见问题列表
export function GetQuestionsList(query) {
    return request({
        url: '/api/services/app/Photo/GetQuestionsList',
        method: 'post',
        data: query
    })
}
// 联系我们
export function GetContactUsList(query) {
    return request({
        url: '/api/services/app/AboutUs/GetContactUsList',
        method: 'post',
        data: query
    })
}
// 获取省市地区
export function GetDistrictList(query) {
    return request({
        url: '/api/services/app/CommonApi/GetDistrictList',
        method: 'post',
        data: query
    })
}
// 级别列表
export function GetTestClassLevel(query) {
    return request({
        url: '/api/services/app/CommonApi/GetTestClassLevel',
        method: 'post',
        data: query
    })
}

// 运动员证书查询
export function OpenQuery(query) {
    return request({
        url: '/api/services/app/CommonApi/OpenQuery',
        method: 'post',
        data: query
    })
}

//获取字典表数据
export function GetDicData(query) {
    return request({
        url: '/api/services/app/CommonApi/GetDicData',
        method: 'post',
        data: query
    })
}