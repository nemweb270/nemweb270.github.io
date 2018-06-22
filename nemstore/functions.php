<html>
<body>
  <form action="functions.php" method="post">
  <title>Nem's Store</title>
  <h1>Nem's Store</h1>
<?php $qaunt = " "

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["qaunt"])) {
    echo "Name is required";

    ?>

  number of items:
<input type="text" name="qaunt"><br>

  <br> <input type="submit" name="action" value="Add to Cart"
  <?php if isset ?>/><br>


  </form>
</body>
</html>

<?php




 ?>
