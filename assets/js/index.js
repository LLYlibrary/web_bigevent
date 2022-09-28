$(function () {
    //调用 getUserInfo()方法获取用户信息
    getUserInfo()
})
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token') || ''
        // },
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            // 调用 renderAvatar 渲染用户的头像
            renderAvatar(res.data)
        }

    })
}
//渲染用户的头像
function renderAvatar(user) {
    //获取用户名称
    var name = user.nickname || user.username
    // 设置欢迎文本
    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)
    //按需渲染用户头像
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src'.user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}
//退出登录模块
$('#btnLogout').on('click', function () {
    //提示用户是否退出
    layer.confirm('确认退出登录', { icon: 3, title: '提示' }, function (index) {
        //点击确定后执行什么
        //1 清空本地存储
        localStorage.removeItem('token')
        //2 重新跳转登陆页面
        location.href = '/login.html'
        //关闭confirm确认框
        layer.close(index);
    });
})