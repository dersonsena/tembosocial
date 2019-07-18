<?php
use App\PDOConnection;

require_once __DIR__ . '/../vendor/autoload.php';

define('DS', DIRECTORY_SEPARATOR);

$connection = PDOConnection::build([
    'dsn' => 'mysql:host=127.0.0.1;port=3333;dbname=despertar_quantico',
    'username' => 'root',
    'password' => '123456'
]);

// 1 - Write a function to store a comment from a user into the `comments` table.
$connection->insert('comments', [
    'comment' => 'aaa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper nibh ex, a gravida nunc hendrerit eget.',
    'last_modified' => (new DateTime)->format('Y-m-d H:i:s')
]);

// 2 - write a function to select and write every comment in the `comments` table into
// a file called /tmp/comments.txt. Just the comments, each on a new line.

$comments = $connection->fetchAll("SELECT comment FROM `comments` ORDER BY `comment` ASC");

$comments = array_map(function($row) {
    return $row['comment'];
}, $comments);

$count = 0;
$sleepTime = 100;
$file = __DIR__ . DS . '..' . DS . 'tmp' . DS . 'comments.txt';

foreach ($comments as $comment) {
    if ($count === $sleepTime) {
        sleep(3);
        $count = 0;
    }

    file_put_contents($file, $comment . PHP_EOL);

    $count++;
}