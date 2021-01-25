<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if (file_put_contents('page_1.txt', file_get_contents("php://input")) === FALSE) {
	echo json_encode("FAILED");
} else {
	echo json_encode("SUCCESS");
}

?>