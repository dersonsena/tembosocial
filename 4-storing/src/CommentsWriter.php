<?php

namespace App;

class CommentsWriter
{
    /**
     * @var array
     */
    private $comments = [];

    private function __construct(array $comments)
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
    public function writeInTxtWithFileGetContents(string $txtFile)
    {
        file_put_contents($txtFile, '');

        foreach ($this->comments as $comment) {
            file_put_contents($txtFile, $comment . PHP_EOL, FILE_APPEND);
        }
    }

    /**
     * @param string $txtFile
     * @return void
     */
    public function writeInTxtWithStream(string $txtFile)
    {
        $handle = fopen($txtFile, 'w+');
        $string = '';

        foreach ($this->comments as $comment) {
            $string .= $comment . PHP_EOL;
        }
        
        $stream = fopen("php://memory", 'r+');
        fwrite($stream, $string);
        rewind($stream);
        stream_copy_to_stream($stream, $handle);

        fclose($handle);
        fclose($stream);
    }
}