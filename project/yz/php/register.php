<?php
//1 接收客户端提交的数据
$user = $_REQUEST['user'];

$pwd = $_REQUEST['pwd'];
//2 连接MySQL服务器
$conn = mysqli_connect('127.0.0.1','root','root','yz',3306);
//3 提交SQL命令
mysqli_query($conn, "SET NAMES UTF8");
$sql = "SELECT userId FROM users WHERE userName='$user' AND userPwd='$pwd'";
$result = mysqli_query($conn,$sql);
if($result===FALSE){
	echo 'fail';
}else {
	$row = mysqli_fetch_assoc($result);
	if($row===NULL){
		echo 'fail' ;
	}else {
		echo 'succ';

	}
}