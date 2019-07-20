<?php
use App\PDOConnection;
use App\CommentsWriter;

set_time_limit(60);
ini_set('memory_limit', '128M');

require_once __DIR__ . '/../vendor/autoload.php';

$startTime = microtime(true);

$connection = PDOConnection::build([
    'dsn' => 'mysql:host='. DB_HOST .';port='. DB_PORT .';dbname=' . DB_DATABASE,
    'username' => DB_USER,
    'password' => DB_PASSWORD
]);

if ($connection) {
    echo "Connected Successfuly!<br />";
}

// 1 - Write a function to store a comment from a user into the `comments` table.
$insert = $connection->insert('comments', [
    'comment' => 'aaa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper nibh ex, a gravida nunc hendrerit eget.',
    'last_modified' => (new DateTime)->format('Y-m-d H:i:s')
]);

if ($insert) {
    echo "Record inserted into table.<br />";
}

// 2 - write a function to select and write every comment in the `comments` table into
// a file called /tmp/comments.txt. Just the comments, each on a new line.
$comments = $connection->fetchAll("SELECT `comment` FROM `comments` ORDER BY `comment` ASC");

$comments = array_map(function($row) {
    return $row['comment'];
}, $comments);

$commentsWriter = CommentsWriter::build($comments);
//$commentsWriter->writeInTxtWithFileGetContents(TXT_TARGET_FILE);
$commentsWriter->writeInTxtWithStream(TXT_TARGET_FILE); // More recommended

$endTime = microtime(true);
$duration = $endTime - $startTime;

echo count($comments) . " comment(s) has been inserted the txt file in {$duration} microseconds.";