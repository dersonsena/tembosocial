<?php

$string = 'TestKey1:TestValue1 TestKey2:"a value" TestKey3:"a value with ""';

preg_match_all('((\w+):([\w\d]+|"[\w\s\d\*"\'\\/]+"))', $string, $matches, PREG_SET_ORDER);

if (is_array($matches)) {
  print_r(array_reduce($matches, function($accumulator, $item) {
    $key = $item[1];
    $value = $item[2];
    $accumulator[] = [$key => $value];
    
    return $accumulator;
  }, []));
}