<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit123645ac288b96f1eeffb8fc8905b13c
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'App\\PDOConnection' => __DIR__ . '/../..' . '/src/PDOConnection.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit123645ac288b96f1eeffb8fc8905b13c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit123645ac288b96f1eeffb8fc8905b13c::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit123645ac288b96f1eeffb8fc8905b13c::$classMap;

        }, null, ClassLoader::class);
    }
}
