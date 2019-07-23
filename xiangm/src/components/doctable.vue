<template>
    <table class='m-table'>
	    <tr>
	        <th>创始时间</th>
		    <th>文件名称</th>
		    <th>文件版本</th>
		    <th>文件大小</th>
		    <th>创建人</th>
	    </tr>
	    <tr v-for='item in dataList'>
    		<td>{{item.time}}</td>
    	    <td>{{item.name}}</td>
    	    <td>{{item.version}}</td>
    	    <td>{{item.size}}</td>
    	    <td>{{item.creator}}</td>
    	</tr>

    </table>
</template>

<script>

export default{

	data(){
		return {
			dataList:[{
       			//"name": "市场部文件",
      			//"version": 1,
      			//"size": 30,
     			//"creator": "admin",
      			//"time":"2019-7-1",
      			//"imgPic": "static/img/test.jpg"
        	}]
		}
	},
	methods:{
		getData(){
			this.axios.get('../../static/resource/file.json').then((res)=>{
			    console.log(res.data.file);
				this.dataList=res.data.file;
			})
		}
	},
	mounted:function(){
		this.getData();
	}
}
</script>

<style>
.m-table{
	margin-left:20%;
	border-collapse:collapse;
}
.m-table tr{
	height:20px;
	line-height:60px;
	border:1px solid;
	border-color: #DCDFE6 #ffffff;
	border-radius:2px;
}
.m-table td,th{
	width:200px;
	//border:solid #DCDFE6;
	//border:1px 0 1px 1px;
	//colspan:5;
}
</style>