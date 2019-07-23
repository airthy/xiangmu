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
                    }
                },
            zNodes:[
                {id:1, pId:0, name: "公司文档"},
                {id:11, pId:0, name: "admin"},
                {id:12, pId:0, name: "财务部"},
                {id:13, pId:0, name: "生产部"},
                {id:14, pId:0, name: "研发部"},
                {id:15, pId:0, name: "行政部"},
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

</style>
