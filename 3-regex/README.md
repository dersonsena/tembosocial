# 3 - Regex (PHP or JavaScript)

Write a function that parses a string with the following format:

- `key1:value1 key2:value2 key3:value3 ...`
- Keys could be alphanumeric but always start with a letter and contains no special characters or spaces;

- Values are string that could be optionally quoted by double quotes. If the string contains double quote, it could be escaped by
backslash;

- Return value is an array that contains key-value pairs;

## 1 - PHP Version

Was used the PHP in version 7.1.23 to execute this quiz:

![Screenshot 1](/4-storing/assets/screen-1.png)

## 2 - Run the script

To run the script, run the command bellow:

```
php -f 3-regex/index.php
```

the output should be:

```
Array
(
    [0] => Array
        (
            [TestKey1] => TestValue1
        )

    [1] => Array
        (
            [TestKey2] => "a value"
        )

    [2] => Array
        (
            [TestKey3] => "a value with ""
        )

)
```