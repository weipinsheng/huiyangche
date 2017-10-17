// 左侧菜单栏开始
//点击小箭头显示章节
/*selectionPullDown();
function selectionPullDown(){
    $('.close-tab-btn').click(function (e) {
        e.stopPropagation();
        $(this).prev().toggleClass('tab-subtitle-current');
        $(this).next().slideToggle("fast");
        $(this).toggleClass('close-tab-btn-current');
    });
    $('.tab-subtitle').click(function (e) {
        e.stopPropagation();
        $(this).toggleClass('tab-subtitle-current');
        $(this).next().next().slideToggle("fast");
        $(this).next().toggleClass('close-tab-btn-current');
    });
}*/
$('.close-tab-btn').click(cl);
$('.tab-subtitle').click(cl2);

function cl(e) {
    e.stopPropagation();
    $(this).prev().toggleClass('tab-subtitle-current');
    $(this).next().slideToggle("fast");
    $(this).toggleClass('close-tab-btn-current');
}

function cl2(e) {
    e.stopPropagation();
    $(this).toggleClass('tab-subtitle-current');
    $(this).next().next().slideToggle("fast");
    $(this).next().toggleClass('close-tab-btn-current');
}
//拖拽重新排列函数
dragLis(); // 调用拖拽函数

function dragLis() {
    var lis = null;

    $('.tab-section').bind('dragstart', function(e) {
        lis = $(this);
    });

    $('.tab-section').bind('dragover', function(e) {
        e.preventDefault();
        $(this).css('border-top', '2px solid #ffab8c');
    });

    $('.tab-section').bind('dragleave', function(e) {
        e.preventDefault();
        $(this).css('border-top', '0');
    });

    $('.tab-section').bind('drop', function(e) {
        e.stopPropagation();
        $(this).css('border-top', '0');
        $(this).before(lis);

        serialAuto(); //拖拽完成执行章节序号自动排序
    });
}

//章节序号自动排序
serialAuto(); //调用

function serialAuto() {
    $('.section-number').each(function() {
        $(this).html($(this).parent().index() + 1);
    })
}


// 点击 “+增加章节” 添加章节
appearSection();

function appearSection() {
    var data1 = {};
    $('.add-tab-section').on('click', function() {
        $('.alert-classify').hide();
        data1.this = $(this);
        $('#section_description_add_all').fadeIn();
    });

    $('.description-sure').on('click', function() {
        var that = $(this);
        data1.this.before('<li class="tab-section" draggable="true">第<span class="section-number"></span>章 ' + that.parent().prev().children("input:last-child").val() + '<span class="tab-section-edit"></span><span class="tab-section-close"></span></li>');
        $(this).parent().parent().fadeOut('fast');
        dragLis(); //重新调用拖拽函数，否则添加之后不可操作
        disappearSection(); //重新调用点击删除函数
        serialAuto(); //重新调用自动排列章节序号
    });
}


$('.kuan-update').on('click', function() {
    $('#section_description_edit_all').fadeIn();
});



//总则以及款为空的 显示添加所有编辑题目

// function showALlExam(){
//     var ele = $('.normative-detail').length;
//     if(ele>0){
//         $('#section_description_option').fadeIn();
//     }else{
//         $('#section_description_add_all').fadeIn();
//     }
// }


// 点击 “X” 删除章节
disappearSection();
var dataOne = {}; //保存this
function disappearSection() {

    $('.tab-section-close').on('click', function(e) {
        e.stopPropagation();
        dataOne.that = $(this);
        $('#alert_delete_section').fadeIn("fast");
        console.log(dataOne.that)
    });
    $('#delete_section_sure').on('click', function() {
        console.log(dataOne.that);
        dataOne.that.parent().remove();
        $('#alert_delete_section').fadeOut("fast");
        serialAuto() //重新调用章节排序函数
    });
}


$('.alert-delete-cancel').on('click', function() {
    $('.alert-delete').fadeOut('fast');
});

$('.description-cancel').on('click', function() {
    $(this).parent().parent().fadeToggle();
});

// 搜索框的编辑小按钮
// $('.nav-bar-search-edit').on('click', function (e) {
//     $('#add_classify_alert').fadeIn("fast");
// });
// $('.content-nav').on('mouseover', function (e) {
//     // e.stopPropagation();
//     $('.nav-bar-search-edit').addClass('nav-bar-edit-show');
// });

// $('.content-nav').on('mouseleave', function (e) {
//     // e.stopPropagation();
//     $('.nav-bar-search-edit').removeClass('nav-bar-edit-show');
// });


$('.alert-classify-cancel').on('click', function() {
    $('.alert-classify').fadeOut("fast");
});

//版本说明小箭头点击
$('.close-statement-btn').on('click', function() {

    if ($('.vision-statement').css('bottom') == '0px') {
        $('.vision-statement').animate({
            bottom: '-545px'
        }, 500, function() {
            $('.close-statement-btn>span').addClass('rotate');
            $('.vision-statement-header').hide();
            $('.vision-statement-title').show();
        })
    } else {
        $('.vision-statement').animate({
            bottom: 0
        }, 500, function() {
            $('.close-statement-btn>span').removeClass('rotate');
            $('.vision-statement-header').show();
            $('.vision-statement-title').hide();
        })
    }

});

onlyStyle('.nav-bar-li', 'nav-bar-li-current');
toggleStyle('.look-test-icon', 'look-test-icon-opt');
onlyStyle('.vision-statement-number', 'vision-statement-current');
display('.tab-section-edit', '#section_description_edit');
display('.title-add', '#section_description_bar');
display('.title-update', '#section_description_bar_edit');
display('.kuan-add', '#section_description_all');


//点击条款只出现一道题
showExam();

function showExam() {
    $('.normative-detail-content').on('click', function() {
        $('.exam-show-other').hide();
    })
}

//鼠标经过编辑条款

$('.rules-content').on('mouseover', function() {
    $(this).find('span').addClass('rules-content-edit-btn-show');
});
$('.rules-content').on('mouseleave', function() {
    $(this).find('span').removeClass('rules-content-edit-btn-show');
});

//选择题编辑
editChoice(); //调用选择题编辑

function editChoice() {
    $('#select_pull_down').on('click', function() {
        $(this).next().slideToggle('fast');

    });

    $('.select-num').on('click', function() {
        if ($('#select_pull_down').prev().html() == '多选') {
            $(this).next().next().slideToggle('fast');

        } else {
            $(this).next().slideToggle('fast');

        }
    });

    $('.rules-option-drop-down>li').on('click', function() {
        $(this).parent().hide().siblings('.option').html($(this).html());

    });
    $('#radio_btn>li').on('click', function() {
        if ($('#select_pull_down').prev().html() == '多选') {
            $('.answer-input-js').show();
            $('.answer-input-js').prev().hide();
            $('#option_quantity').html(10);
        } else {
            $('.answer-input-js').hide();
            $('.answer-input-js').prev().show();
            $('#option_quantity').html(4);
        }
    })

}


myHidden('.close-section-add', '.section-description');

myShow('.rules-content-edit-btn', '#right_edit');
myHidden('.rules-comfirm-btn-cancel', '#right_edit');

//奖惩月分及功分的选中效果
rewards();

function rewards() {
    $('.chapter-jclx>span').on('click', function() {
        $(this).addClass('current').siblings().removeClass('current');
        $('.yuefen').html($(this).html().substr(2, 2));
    });
}

//点击增加类别  弹框出现
$('#add_classify').on('click', function() {
    $('#add_flow_alert').show();
    $('#section_description_option').hide();
});

// 新增类别

$('#sure_add_classify').on('click', function() {
    var that = $(this);
    $('#alert_classify_list').append('<li>' + that.parent().prev().val() + '<span class="alert-classify-close delete-classify"></span></li>');
    $('.nav-bar-search-edit').before('<li class="nav-bar-li"><a href="javascript:">' + that.parent().prev().val() + '<span></span></a></li>');
    that.parent().prev().val('');
    $('.alert-classify').hide();
    disappearClassify(); //重新调用删除类别函数；
});

//新增流程

$('#sure_add_flow').on('click', function() {
    var that = $(this);
    $('#alert_flow_list').append('<li>' + that.parent().prev().val() + '<span class="alert-classify-close delete-flow"></span></li>');
    $('#add_classify').before('<div class="tab-title"><p class="tab-subtitle">' + that.parent().prev().val() + '</p><div class="close-tab-btn"><span><i>◇</i></span></div><ul class="tab-section-box"><li class="tab-section" draggable="true">第<span class="section-number"></span>章 开发规范<span class="tab-section-edit"></span><span class="tab-section-close"></span></li><li class="tab-section" draggable="true">第<span class="section-number"></span>章 员工守则<span class="tab-section-edit"></span><span class="tab-section-close"></span><span class="tab-section-edit"></span><span class="tab-section-close"></span></li><li class="tab-section" draggable="true">第<span class="section-number"></span>章UI设计规范标准<span class="tab-section-edit"></span><span class="tab-section-close"></span></li><li class="tab-section" draggable="true">第<span class="section-number"></span>章 项目开发规范<span class="tab-section-edit"></span><span class="tab-section-close"></span></li><li class="add-tab-section">+ 增加章节</li></ul></div>');
    that.parent().prev().val('');
    $('.alert-classify').hide();
    serialAuto(); //重新调用自动排列章节序号
    $('.tab-title:last .close-tab-btn').on("click", cl); //给新加的元素注册点击事件；
    $('.tab-title:last .tab-subtitle').click(cl2); //给新加的元素注册点击事件；
    // sl = true;//重新调用小箭头下拉
    dragLis(); //重新调用拖拽函数，否则添加之后不可操作
    disappearClassify(); //重新调用删除类别函数；
    deleteFlow();
    disappearSection();
    display('.tab-section-edit', '#section_description_edit');
});

//点击切换class（唯一）
function onlyStyle(a, b) {
    $(a).on('click', function() {
        $(this).addClass(b).siblings().removeClass(b)
    });
}

// 点击切换class函数（不唯一）
function toggleStyle(a, b) {
    $(a).on('click', function() {
        $(this).toggleClass(b)
    });
}

//点击显示/隐藏
function display(a, b) {
    $(a).on('click', function(e) {
        e.stopPropagation();
        $(b).fadeToggle();
    })
}

// 点击只隐藏
function myHidden(a, b) {
    $(a).on('click', function() {
        $(b).fadeOut('fast');
    })
}

function myShow(a, b) {
    $(a).on('click', function() {
        $(b).fadeIn('fast');
    })
}

//点击 X 删除本项


//删除条
disappearBar();
var dataTwo = {}; //保存this
function disappearBar() {

    $('.title-delete').on('click', function(e) {
        e.stopPropagation();
        dataTwo.that = $(this);
        $('#alert_delete_bar').fadeIn("fast");
        console.log(dataTwo.that)
    });
    $('#delete_bar_sure').on('click', function() {
        console.log(dataTwo.that);
        dataTwo.that.parent().parent().remove();
        $('#alert_delete_bar').fadeOut("fast");
    });
}

//删除款
disappearKuan();
var dataThree = {}; //保存this
function disappearKuan() {

    $('.kuan-delete').on('click', function(e) {
        e.stopPropagation();
        dataThree.that = $(this);
        $('#alert_delete_kuan').fadeIn("fast");
        console.log(dataThree.that)
    });
    $('#delete_kuan_sure').on('click', function() {
        console.log(dataThree.that);
        dataThree.that.parent().remove();
        $('#alert_delete_kuan').fadeOut("fast");
    });
}


//删除分类
disappearClassify();
var dataFour = {}; //保存this
function disappearClassify() {

    $('.delete-classify').on('click', function(e) {
        e.stopPropagation();
        dataFour.that = $(this);
        $('#alert_delete_classify').fadeIn("fast");
        dataFour.ulIndex = $(this).parent().index();


    });
    $('#delete_classify_sure').on('click', function() {
        dataFour.that.parent().remove();
        $('#alert_delete_classify').fadeOut("fast");

        $('.nav-bar-ul').children()[dataFour.ulIndex].remove();
        dataFour = {}; //重置
    });
}


//删除流程
deleteFlow();

var dataFive = {};

function deleteFlow() {
    $('.delete-flow').on('click', function(e) {
        e.stopPropagation();
        dataFive.that = $(this);
        $('#alert_delete_flow').fadeIn("fast");
        dataFive.flowIndex = $(this).parent().index();
    });
    $('#delete_flow_sure').on('click', function() {
        dataFive.that.parent().remove();
        $('#alert_delete_flow').fadeOut("fast");
        $('.left-section').children()[dataFive.flowIndex].remove();
    });
}



//textarea高度自适应


function setHeight(element) {
    $(element).css({ 'height': 'auto', 'overflow-y': 'hidden' }).height(element.scrollHeight);
}
$('#textarea').each(function() {
    setHeight(this);
}).on('input', function() {
    setHeight(this);
});

// 必读人群
$("#readPeople").click(function() {
    $("#peopleShow").show('1000');
})
$("#peopleShow .pClose").click(function() {
    $(this).parents("#peopleShow").hide("1000");
})
$("#tab-b>.tab-btn").each(function(index, el) {
    var ele = $(el);
    ele.click(function() {
        if (ele.hasClass('active')) {
            return;
        } else {
            ele.addClass('active');
            ele.siblings().removeClass('active');
            console.log(index);
            $("#tab_com_" + index).css({ "display": "block" }).siblings().css({ "display": "none" })
        }
    })
});

//点击切换章节

$('.tab-section:first-child').on('click', function() {
    $('#normative_zero').show().siblings().hide();
    $('#right_pie').show().siblings().hide();
});
$('.tab-section:nth-child(2)').on('click', function() {
    $('#normative_one').show().siblings().hide();
    $('#right_pie_one').show().siblings().hide();
});
$('.tab-section:nth-child(3)').on('click', function() {
    $('#normative_two').show().siblings().hide();
    $('#right_pie_tw0').show().siblings().hide();
});
$('.tab-section:nth-child(4)').on('click', function() {
    $('#normative_three').show().siblings().hide();
    $('#right_pie_three').show().siblings().hide();
});

$('.nav-bar-li:nth-child(1)').on('click', function() {
    $('.main-content>.test-one').hide();
    $('.main-content>.test-two').hide();
    $('.main-content>.test-three').hide();
});