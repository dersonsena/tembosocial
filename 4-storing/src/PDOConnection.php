<?php

namespace App;

class PDOConnection
{
    /**
     * @var \PDO
     */
    private static $connection;

    /**
     * @var string
     */
    private $databaseName;

    private function __construct(array $params)
    {
        $partialDsn = explode(';', $params['dsn']);
        $this->databaseName = explode('=', $partialDsn[2])[1];

        try {
            $options = [
                \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC
            ];

            static::$connection = new \PDO(
                $params['dsn'],
                $params['username'],
                $params['password'],
                $options
            );
        } catch (\PDOException $e) {
            print "Error!: " . $e->getMessage() . "<br/>";
            die;
        }
    }

    /**
     * @return PDOConnection
     */
    public static function build(array $params): PDOConnection
    {
        return new static($params);
    }

    /**
     * @param string $sql
     * @return void
     */
    public function execute(string $sql)
    {
        return static::$connection
            ->prepare($sql)
            ->execute();
    }

    /**
     * @param string $tableName
     * @param array $data
     * @return void
     */
    public function insert(string $tableName, array $data)
    {
        $columns = array_keys($data);

        $columnsBind = array_map(function ($column) {
            return ':' . $column;
        }, $columns);

        $columns = implode(', ', $columns);
        $columnsBind = implode(', ', $columnsBind);
        $sql = sprintf('INSERT INTO `%s` (%s) VALUES (%s)', $tableName, $columns, $columnsBind);

        return static::$connection
            ->prepare($sql)
            ->execute($data);
    }

    /**
     * @param string $sql
     * @param array $params
     * @return array
     */
    public function fetchAll(string $sql, array $params = []): array
    {
        $stmt = static::$connection->prepare($sql);
        $stmt->execute($params);

        return $stmt->fetchAll();
    }
}