<?php
/**
 * Created by PhpStorm.
 * User: ncvitak
 * Date: 14-11-13
 * Time: 2:54 PM
 */

class database {

    private $data;

    function __construct() {
        $this->data = array();
        $this->data["version"] = "1.00";
        $this->data["sites"] = array();
    }

    function __destruct() {

    }

    function addSite($name, $firebase, $disqus) {
        $uuid = uniqid("site_");
        $this->data["sites"][$uuid] = array("name" => $name, "firebase" => $firebase, "disqus" => $disqus);
    }

    function toJSON() {
        return json_encode($this->data, JSON_PRETTY_PRINT);
    }

    function toFile($path) {
        file_put_contents($path, json_encode($this->data, JSON_PRETTY_PRINT));
    }

    function fromFile($path) {
        $data = json_decode(file_get_contents($path));
        if ($this->data["version"] == $data["version"]) {
            $this->data = $data;
        }

    }

}