# 4 - Storing and writing data (PHP / MySQL)

```
comments
comment_id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, comment TEXT DEFAULT NULL,
last_modified TIMESTAMP DEFAULT NULL
```

The objectives of the quiz are:

- Write a function to store a comment from a user into the `comments` table;

- Assuming millions of rows and a large data set, using PHP, write a function to select and write every comment in the
`comments` table into a file called `/tmp/comments.txt`. Just the comments, each on a new line.

## Instructions

Was used the PHP in version 7.1.23 to execute this quiz:

![Screenshot 1](/4-storing/assets/screen-1.png)

To execute this code, only enter the `/4-storing` folder and execute the code below:

### 1 - Install the project dependencies

```
composer install
```

### 2 - Setup the Database settings

Go to script `config/config.php` and update the MySQL database settings of according your enviroment.

```php
<?php

define('DB_HOST', '127.0.0.1');
define('DB_PORT', '3306');
define('DB_USER', 'root');
define('DB_PASSWORD', 'secret');
define('DB_DATABASE', 'your_database_name');
```

After this, create the `comments` table and create a index in the `comment` column:

```sql
CREATE TABLE `comments` (
    `comment_id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    `comment` TEXT DEFAULT NULL,
    `last_modified` TIMESTAMP DEFAULT NULL
);

CREATE INDEX `comments_comment_index` ON `comments`(`comment`(300));

```

### 3 - Start up the PHP Build-in Server

Finally, start the PHP Built-in server to start the application.

```
php -S localhost:8000 -t public
```

Open your favorite browser in the address `http://localhost:8000` and the output should be:

![Screenshot 1](/4-storing/assets/screen-2.png)

## Benchmark

In the class [`App\CommentsWriter`](https://github.com/dersonsena/tembosocial/blob/master/4-storing/src/CommentsWriter.php) have two methods, one using the `file_put_contents` directly and other using the "stream approach".

See the file [benchmark.txt](https://github.com/dersonsena/tembosocial/blob/master/4-storing/benchmark.txt) for more benchmark details.