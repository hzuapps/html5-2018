
//test.php

<?php

header("content-type:text/html;charset=utf-8");

header('Access-Control-Allow-Origin:*');//解决跨域问题

$result = array(
    'code' => "123",
    'message' => "请求成功",
);

echo json_encode($result);//json_encode：
