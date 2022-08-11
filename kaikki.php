<?php

$host = "localhost";
$username = "solitadev";
$password = "solitapw";
$database = "solitadev";

$conn = mysqli_connect($host, $username, $password, $database);

$sqlRead = "SELECT * FROM bikingroute";

$queryRead = mysqli_query($conn, $sqlRead);

if ($queryRead->num_rows > 0) {

while ($row = $queryRead->fetch_assoc()) {

  $rows[] = $row;

}

echo "<h3 style='text-decoration: underline'>Journey List View: </h3>";

echo "<table>";

echo "<tr>";

echo "<td><p style='color: #444488'><b>Departure station name</b></p></td>";

echo "<td><p style='color: #444488'><b>Return station name</b></p></td>";

echo "<td><p style='color: #444488'><b>Covered distance (km)</b></p></td>";

echo "<td><p style='color: #444488'><b>Duration (min.)</b></p></td>";

echo "</tr>";

foreach ($rows as $i => $oneRow) {

echo "<tr>";



echo "<td><p>" . $rows[$i]['Departure station name'] . "</p></td>";

echo "<td><p>" . $rows[$i]['Return station name'] . "</p></td>";

echo "<td><p>" . $rows[$i]['Covered distance (m)'] / 1000 . "</p></td><td><p>" . $rows[$i]['Duration (sec.)'] / 60 . "</p></td>";

echo "</tr>";

}

echo "</table>";

}

else {

  echo "<p>No data found</p>";

}


$conn->close();



 ?>
