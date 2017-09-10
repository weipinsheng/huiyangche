$(".in>li>a").click(function () {
    if ($(this).next().is(":hidden")) {
        $(this).next().slideDown("5000");
    } else {
        $(this).next().slideUp("5000");
    }
});
$("table tbody tr:odd").css("backgroundColor", "#F8F8F8");

// 入职管理
$(".event table td>a").click(function () {
    $(".shade").show("3000");
});
$(".details>p>a").click(function () {
    $(".shade").hide("3000");
});
//上传文件
$(".file").on("change", "input[type='file']", function () {
    var filePath = $(this).val();
    if (filePath.indexOf("jpg") != -1 || filePath.indexOf("png") != -1 || filePath.indexOf("doc") != -1 || filePath.indexOf("docx") != -1) {
        $(".fileerrorTip").html("").hide();
        var arr = filePath.split('\\');
        var fileName = arr[arr.length - 1];
        $(".showFileName").html(fileName);
    } else {
        $(".showFileName").html("");
        $(".fileerrorTip").html("您未上传文件，或者您上传文件类型有误！").show();
        return false;
    }
});

// 筛选框

$(".select>li").click(function () {
    var $this = $(this);
    if ($this.children(".hide-box").is(":hidden")) {
        $this.children(".hide-box").css({
            'display': 'block',
        });
        $this.find(".hide").slideDown("2000", function () {
            if ($this.hasClass("sJobName")) {
                $('.nicescroll').getNiceScroll().show();
                $('.nicescroll').getNiceScroll().resize();
            }
        });
        $this.find(".triangle").css({
            "display": 'block',
        });
    } else {
        $this.find(".hide").slideUp("2000", function () {
            if ($this.hasClass("sJobName")) {
                $('.nicescroll').getNiceScroll().hide();
            }
            $this.find(".triangle").css({
                "display": 'none',
            });
            $this.children(".hide-box").css({
                'display': 'none',
            });
        });
    }
});
// 侧边
$(".icon-menu").click(function () {
    $(".page-detail").hide();
    $(".page-simple").show();
    $(".page-sidebar")[0].style.width = "3.5%";
    $(".main-container")[0].style.width = "96.5%";
});
$(".simple-menu").click(function () {
    $(".page-detail").show();
    $(".page-simple").hide();
    $(".page-sidebar").removeAttr('style');
    $(".main-container").removeAttr('style');
});

// 表单下拉框
$(".down>a").click(function () {
    if ($(this).next().is(":hidden")) {
        $(this).next().show("2000");
    } else {
        $(this).next().hide("2000");
    }
});
$(".down-option>li").click(function (event) {
    $(this).parent("ul").hide("1000").parent(".down").children('span').html($(this).html());
});
//下拉框
$(".select>.down-icon").click(function (event) {
    if ($(this).next().is(":hidden")) {
        $(this).next().show("2000");
    } else {
        $(this).next().hide("2000");
    }
});
$(".select-option>li").click(function () {
    $(this).parents(".select").children(".select-text").html(this.innerHTML);
    $(this).parent().hide("2000");
});
// 字数检测
$(".text_area").on("keyup", function () {
    var $this = $(this);
    var counter = $this.val().length;
    $this.next().children('span').html(counter);
})
// 删除
$(".delete>a").click(function () {
    $(".box-shadow").show("3000");
    $(".box").show("3000");
    $(this).parents("tr").attr("class", "choose");
})

$(".btn button").click(function () {
    if (this.className == "cancel") {
        $(".choose").removeClass("choose");
    } else {
        $(".choose").remove();
    }
    $(".box-shadow").hide("3000");
    $(".box").hide("3000");
})



// // 简历
$(".main-section ul li").click(function () {
    $(".main-more").show("3000");
    $(".main-section")[0].style.width = "55%";
    $(".main-section ul li").each(function () {
        this.style.width = "43.1%";
        $(this).removeClass('current');
    });
    this.style.width = "43.1%";
    $(this).addClass('current');
});
$(".main-more .close").click(function () {
    $(this).parent().hide("3000");
    $(".main-section").removeAttr("style");
    $(".main-section ul li").each(function () {
        $(this).removeAttr("style");
    });
});


//确认提交
$(".confirm").click(function (event) {
    $(".box-shadow").show("3000");
    $(".box").show("3000");
});
$(".confirm-btn .cancel").click(function (event) {
    $(".box-shadow").hide("3000");
    $(".box").hide("3000");
});

// 标签选择
$(".buttona").click(function () {
    $(this).toggleClass('active');
});

//发布职位 选择职位
$(".list-nav .list-item").click(function () {
    $(".list-nav .list-item a").removeClass('active');
    $(this).children('a').addClass('active');
    if (false) {
        $(".context .tip").css({
            "display": 'block',
        });
    } else {
        var value1 = $(this).find('.txt').html();
        var value2 = $(this).find('.sub-txt').html();
        $(".context .text-input").html(value1);
        $(".context .info").html(value2).css({
            "display": 'block',
        });
    }
});
