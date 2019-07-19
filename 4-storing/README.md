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

Go to script `public/index.php` on the line 8 and update the mysql database settings of according your enviroment.

```php
<?php
$connection = PDOConnection::build([
    'dsn' => 'mysql:host=127.0.0.1;port=3306;dbname=your_database_name',
    'username' => 'root',
    'password' => 'secret'
]);
```

After this, create the Comments table:

```sql
CREATE TABLE `comments` (
    `comment_id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT, `comment` TEXT DEFAULT NULL,
    `last_modified` TIMESTAMP DEFAULT NULL
)
```

### 3 - Start up the PHP Build-in Server

Finally, start the PHP Built-in server to start the application.

```
php -S localhost:8000 -t public
```