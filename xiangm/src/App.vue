	<template>
	<el-container>
	<el-header>
	<el-row :gutter="20">
			<el-col :span="6">
					<div class="grid-content">
						 <el-button-group>
									<el-button type="primary" class='u-btn' icon="el-icon-arrow-left">登录
									</el-button>
									<el-button type="primary" class='u-btn'><span>注册</span><i class="el-icon-arrow-right el-icon--right"></i></el-button>
							</el-button-group>
					</div>

			</el-col>
			<el-col :span="16">
					<div class="grid-content">
							<i class="el-icon-search">快速查找</i>
							<el-input class='u-input2' v-model="input" placeholder="类别搜索"></el-input>
							
							<el-input class='u-input1' placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2">
							</el-input>
							
							
					</div>
			</el-col>
			<el-col :span="2"><div class="grid-content"></div></el-col>
	</el-row>

	

	</el-header>
		<el-container>
			<el-aside width="">
				<HelloWorld></HelloWorld>
			</el-aside>
			<el-main>
			    <navbutton></navbutton>
				<doctable></doctable>
			</el-main>
		</el-container>
	</el-container>
	</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import doctable from './components/doctable'
    import navbutton from './components/navbutton'
	export default {
		name: 'app',
		data () {
			return {
				input:''

			}
		},
		components:{
		    HelloWorld,
		    doctable,
		    navbutton
		}
	}
</script>

	<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body{
	    margin:0;
	    padding:0;
    }
	.el-header, .el-footer {
		background-color: #ffffff;
		border:1px solid #dfe3ec;
		color: #333;
	    padding:0;
	    margin:0;
		line-height: 60px;
	}

	.el-aside {
		
		width:250px;
		height:calc(100vh - 60px); /*高度自适应*/
		border:solid  #DCDFE6;
		border-width:0 1px 1px 1px;
		color: #333;
		text-align: center;
		//line-height: 200px;  /*行间距*/
	}

	.el-main {
		//background-color: #E9EEF3;
		color: #333;
		text-align: center;
		
	}

	body > .el-container {
		//margin-bottom: 40px;
	}

	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}

	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}

	.el-row {
    margin-bottom: 20px;
    &:last-child {/*sass语法 上一级选择器*/
        margin-bottom: 0;
    }
  }
	.el-col {
	    border-radius: 4px;
	}

	.grid-content {
	    border-radius: 4px;
	    height: 30px;
	}
	
	.row-bg {
	    padding: 10px 0;
	    //background-color: #f9fafc;
	}
	h1, h2 {
		font-weight: normal;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
 
    .el-col {
		border-radius: 4px;
		}
	.bg-purple {
		
	 }
	.grid-content {
		border-radius: 4px;
		min-height: 10px;

		}
	.row-bg {
		padding: 10px 0;
		//background-color:#f9fafc;
	}
	.el-button{
		padding:0;
	}
	.u-btn{
	    width:100px;
	    height:30px;
	   
          
	}
	.u-bth span{

		
	}
	.u-input1{
		width:230px;
		display:inline-block;
		//margin:0 0px 0 5px;
	}
	.u-input2{
	    //float:right;
	    width:230px;
	    display:inline-block;
        //margin-right:200px;

	}
	.el-icon-search{
	    display:inline-block;
		//float:left;
		line-height:60px;
		
	}

</style>
