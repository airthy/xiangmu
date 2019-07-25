<template>
	<el-row class='m-btns'>
    <el-button type="primary" class='u-navbtn'>上传</el-button>
    <el-button type="primary" class='u-navbtn'>筛选</el-button>
    <el-button type="primary" class='u-navbtn'>创建</el-button>
</el-row>
</template>

<script>
	export default{
		name:'navbutton',
		data(){

		}
	}
</script>

<style scoped>
	.m-btns{
		margin-left:10px;
		width:400px;
	}
	.u-navbtn{
		width:58px;
		height:24px;
		padding:0;
		
	}

</style>
