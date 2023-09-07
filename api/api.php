<?php 
if (isset($_GET["view"])) {
  $data = $_GET["view"];
  echo $data;
}
else {
  echo "error";
}
?>
