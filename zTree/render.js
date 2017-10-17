var zTreeObj;
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
var setting = {
    check: {
        enable: true,
        chkStyle: "checkbox",
        chkboxType: { "Y": "ps", "N": "s" }
    },
    view: {
        showIcon: false,
        selectedMulti: false
    },
};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
var zNodes = [{
        name: "惠养车公司",
        open: true,
        children: [
            { name: "惠养车广佛分布" },
            { name: "惠养车上海分布" },
            { name: "惠养车武汉分布" },
            { name: "人事服务部" },
            { name: "行政服务部" },
            { name: "财务服务部" },
            {
            	name: "惠养车广佛分布",
            	open: false,
            	children:[{name:"1111"},{name:"2222"},{name:"3333"},{name:"4444"},]
            },
            {
            	name: "惠养车上海分布",
            	open: false,
            	children:[{name:"1111"},{name:"2222"},{name:"3333"},{name:"4444"},]
            },
            {
            	name: "惠养车武汉分布",
            	open: false,
            	children:[{name:"1111"},{name:"2222"},{name:"3333"},{name:"4444"},]

            },
            {
            	name: "人事服务部",
            	open: false,
            	children:[{name:"1111"},{name:"2222"},{name:"3333"},{name:"4444"},]
            },
            {
            	name: "行政服务部",
            	open: false,
            	children:[{name:"1111"},{name:"2222"},{name:"3333"},{name:"4444"},]
            },
            {
            	name: "财务服务部",
            	open: false,
            	children:[{name:"1111"},{name:"2222"},{name:"3333"},{name:"4444"},]
            },
        ]
    }
];
$(document).ready(function() {
    zTreeObj = $.fn.zTree.init($("#jobtree"), setting, zNodes);
});