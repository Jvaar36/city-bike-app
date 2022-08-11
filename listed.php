<?php

$host = "";
$username = "";
$password = "";
$database = "";

$conn = mysqli_connect($host, $username, $password, $database);

$sqlRead = "SELECT * FROM helsingin_ja_espoon_kaupunkipy_c3_b6r_c3_a4asemat_avoin";

$queryRead = mysqli_query($conn, $sqlRead);

if ($queryRead->num_rows > 0) {

while ($row = $queryRead->fetch_assoc()) {

  $rows[] = $row;

}

foreach ($rows as $x => $row) {

  $stat[$x] = $rows[$x]['Nimi'];

}

$sorted = array_unique($stat);

echo "<h3 style='text-decoration: underline'>Station List View: </h3>";

foreach ($sorted as $k => $sort) {

echo "<span style='display: flex'><p style='color: #444488'>Station name: </p><p>" . $sorted[$k] . "</p></span>";

echo "<hr/>";

}

}

else {

  echo "<p>No data found</p>";

}


$conn->close();



 ?>
