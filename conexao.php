<?php

$usuario = 'root';
$senha = '';
$dbname = 'gerartxt';
$host = 'localhost:3306'

try
{
    $pdo = new PDO("myql:host=$host;dbname=$dbname", $usuario, $senha);
}
catch(PDOException $e)
{
    echo $e->getMessage();
}