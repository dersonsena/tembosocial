<?php

namespace App;

class CommentsWriter
{
    /**
     * @var array
     */
    private $comments = [];

    /**
     * @var string
     */
    private $txtFile;

    private function __constructor(array $comments)
    {
        $this->comments = $comments;
    }

    /**
     * @param array $comments
     * @return CommentsWriter
     */
    public static function build(array $comments): CommentsWriter
    {
        return new static($comments);
    }

    /**
     * @param string $txtFile
     * @return void
     */
    public function writeInTxtFile(string $txtFile)
    {
        $count = 0;
        $sleepTime = 100;

        foreach ($this->comments as $comment) {
            if ($count === $sleepTime) {
                sleep(3);
                $count = 0;
            }

            file_put_contents($txtFile, $comment . PHP_EOL, FILE_APPEND);

            $count++;
        }
    }
}