<?php
	header('Content-Type:application/json');
	$conn=mysqli_connect('127.0.0.1','root','root','yz',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	//��ȡ�����������ܼ�¼��
	$sql="SELECT * FROM img";
	$result=mysqli_query($conn,$sql);
//	$row=mysqli_fetch_assoc($result);
	$arr=[];
	while(($row=mysqli_fetch_assoc($result))!==null){
		$arr[]=$row;
	}
	echo json_encode($arr);
?>