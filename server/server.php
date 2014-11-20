<?php
/**
 * Created by PhpStorm.
 * User: ncvitak
 * Date: 14-11-19
 * Time: 8:38 PM
 */

include("server.php");

$databaseLocation = "db.json";

$action = $_POST["action"];

if ($action) {
    if ($action == "db_create") {

        $name = $_POST["name"];
        $firebase = $_POST["firebase"];
        $disqus = $_POST["disqus"];

        $db = new database();
        $db->fromFile($databaseLocation);
        $db->addSite($name, $firebase, $disqus);
        $db->toFile($databaseLocation);

    } else {
        die("ERROR: Invalid Action!");
    }
}