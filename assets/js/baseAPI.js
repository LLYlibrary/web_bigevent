//调用$post(),$get(),$ajax()时
//会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function (options) {
    //再发起ajax请求之前,统一拼接请求的根路径
    // console.log(options.url)

    options.url = 'http://www.liulongbin.top:3007' + options.url
    //统一为有权限的接口,设置 headers 请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
})