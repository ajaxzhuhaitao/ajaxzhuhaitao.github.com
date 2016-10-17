<?php
//1 接收客户端提交的数据
$user = $_REQUEST['user'];
$pwd = $_REQUEST['pwd'];
$rpwd = $_REQUEST['rpwd'];
$email = $_REQUEST['email'];
$phone=$_REQUEST['phone'];
//2 连接MySQL服务器
$conn = mysqli_connect('127.0.0.1','root','root','yz',3306);
//3 提交SQL命令
mysqli_query($conn, "SET NAMES UTF8");
$sql = "INSERT INTO users VALUES(NULL,'$user','$pwd','$rpwd','$email','$phone')";
$result = mysqli_query($conn,$sql);
if($result){
	echo 'succ';
}else {
	echo 'fail';
}