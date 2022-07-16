<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-06-26
 * Time: 12:50
 */

namespace Data;

class Db
{
    // Local Machine Setup
    private static $dbHost = 'fdb29.awardspace.net';
    private static $dbUser = '3707572_pms';
    private static $dbPass = 'password1';
    private static $dbName = '3707572_pms';

    // NMU Setup
//    private static $dbHost = 'sict-mysql.nmmu.ac.za';
//    private static $dbUser = 'pms';
//    private static $dbPass = 'Password2';
//    private static $dbName = 'pms_schema';

    // Connection
    protected static function Connect()
    {
        return mysqli_connect(self::$dbHost, self::$dbUser, self::$dbPass, self::$dbName);
    }
}
