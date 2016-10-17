<?php
header('Content-Type: text/html');
$user = $_REQUEST['user'];
//2 连接MySQL服务器
$conn = mysqli_connect('127.0.0.1','root','root','yz',3306);
//3 提交SQL命令
mysqli_query($conn, "SET NAMES UTF8");
$sql = "SELECT userId FROM users WHERE userName='$user' ";
$result = mysqli_query($conn,$sql);
if($result===FALSE){
		echo 'SQL语法错误：'.$sql;
	}else{
		$row=mysqli_fetch_assoc($result);
		if($row===NULL){
			echo 'succ';
		}else{
			echo 'fail';
		}
	}

