<?php

$host = "localhost";
$username = "solitadev";
$password = "solitapw";
$database = "solitadev";

$conn = mysqli_connect($host, $username, $password, $database);

$sql2 = "SELECT * FROM helsingin_ja_espoon_kaupunkipy_c3_b6r_c3_a4asemat_avoin";

$sqlRead2 = mysqli_query($conn, $sql2);

if ($sqlRead2->num_rows > 0) {

while ($row2 = $sqlRead2->fetch_assoc()) {

  $rows2[] = $row2;

}

echo "<h3 style='text-decoration: underline'>Station Info View: </h3>";

  foreach ($rows2 as $t => $row2) {

      echo "<table><tr>";

      echo "<td style='width: 300px'><span style='display: flex'><p style='color: #444488'>Station Name: </p><p>" . $rows2[$t]['Nimi'] . " </p></span></td>
      <td style='width: 300px'><span style='display: flex'><p style='color: #444488'>Station Address: </p><p>" . $rows2[$t]['Osoite'] . "</p></span></td></tr>";

      $statId = $rows2[$t]['ID'];

      $sql3 = "SELECT COUNT(`Number`) AS c FROM bikingroute WHERE (`Departure station id` = '$statId')";

      $sqlRead3 = mysqli_query($conn, $sql3);

      if ($sqlRead3->num_rows > 0) {

      while ($row3 = $sqlRead3->fetch_assoc()) {

        $countDep = $row3['c'];

      }

      }

      echo "<tr><td style='width: 300px'><span style='display: flex'><p style='color: #444488'>Number of departures: </p><p>" . $countDep . "</p></span></td>";

      $sql4 = "SELECT COUNT(`Number`) AS c FROM bikingroute WHERE (`Return station id` = '$statId')";

      $sqlRead4 = mysqli_query($conn, $sql4);

      if ($sqlRead4->num_rows > 0) {

      while ($row4 = $sqlRead4->fetch_assoc()) {

        $countRet = $row4['c'];

      }

      }

      echo "<td style='width: 300px'><span style='display: flex'><p style='color: #444488'>Number of returns: </p><p>" . $countRet . "</p></span></td></tr></table>";

      echo "<hr/>";

    }

  }



else {

  echo "<p>No data found</p>";

}


$conn->close();



 ?>
