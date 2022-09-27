//调用$post(),$get(),$ajax()时
//会先调用ajaxPrefilter这个函数
$.ajaxPrefilter(function (options) {
    //再发起ajax请求之前,统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    console.log(options.url)
})