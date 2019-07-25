<template>
    <div id="areaTree">
        <div class="">
            <a href="#">文档<i class="fa  fa-refresh" @click="freshArea"></i></a>
        </div>
        <div class="tree-box">
            <div class="zTreeDemoBackground left">
                <ul id="treeDemo" class="ztree"></ul>
            </div>
        </div>
    </div>

 </template>

<script>
export default {
    name: "helloWorld",
    data:function(){
        return{
            setting:{
                data:{
                    simpleData:{
                        enable: true,
                        idKey: "id",
                        pIdKey: "pId",
                        rootPId: 0
                        }
                    },
                view:{
                    showLine:false
                }
                },
            zNodes:[
                {id:1, pId:0, name: "公司文档",icon:'../../static/images/mx-5.jpg'},
                {id:11, pId:0, name: "admin",icon:'../../static/images/mx-5.jpg'},
                {id:12, pId:0, name: "财务部",icon:'../../static/images/mx-5.jpg'},
                {id:13, pId:0, name: "生产部",icon:'../../static/images/mx-5.jpg'},
                {id:14, pId:0, name: "研发部",icon:'../../static/images/mx-5.jpg'},
                {id:15, pId:0, name: "行政部",icon:'../../static/images/mx-5.jpg'},
                ]
            }
        },
        methods:{
            freshArea:function(){
                $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
            }
        },
            mounted(){
            $.fn.zTree.init($("#treeDemo"), this.setting, this.zNodes);
        }

    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ztree{
    //line-height:60px;
}
.ztree li{
    line-height:60px;
}
.ztree li span.button{
    line-height:100px;

}


</style>
