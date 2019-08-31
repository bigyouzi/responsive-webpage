/**
 * Created by 25512 on 2019/3/23.
 */
window.onload = function(){
    search();
    secondKill();
};

var search = function(){
    /*搜索框对象*/
    var search = document.getElementsByClassName('jd_header_box')[0];
    /*banner对象*/
    var banner = document.getElementsByClassName('jd_banner')[0];
    /*高度*/
    var height = banner.offsetHeight;

    window.onscroll = function(){
        var top = document.body.scrollTop;
        console.log(top);
        /*当滚动高度大于banner的高度时候颜色不变*/
        if(top > height)
        {
            search.style.background  = "black";
        }
        else{
            var op = top/height * 0.85;
            search.style.background  = "rgba(201,21,35,"+op+")";
        }
    };
};

var secondKill =function(){
    //var last_time = document.getElementsByClassName("time")[0];
    var lis = document.getElementsByClassName("num");
    console.log(lis.length)
    var times = 4*60*60;
    setInterval(function () {
        times --;
        var h = Math.floor(times/60/60);
        var m = Math.floor(times/60%60);
        var s = Math.floor(times%60);

        lis[0].innerHTML = h>10?Math.floor(h/10) : 0;
        lis[1].innerHTML = h%10;

        lis[2].innerHTML = m>10?Math.floor(m/10):0;
        lis[3].innerHTML = m%10;

        lis[4].innerHTML = s>10?Math.floor(s/10):0;
        lis[5].innerHTML = s%10;
    },1000)
}