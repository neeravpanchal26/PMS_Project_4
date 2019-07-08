create
  definer = PMS@`%` procedure uspBusinessSetting_Update(IN name varchar(45), IN contact varchar(10),
                                                        IN website varchar(200), IN vat varchar(10), IN cityID INT)
BEGIN
  DECLARE errno INT;
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
      GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
      SELECT errno AS MYSQL_ERROR;
      ROLLBACK;
    END;
  START TRANSACTION;
  SET autocommit = 0;

  UPDATE Business AS b
  SET b.BusinessName    = name,
      b.BusinessContact = contact,
      b.BusinessWebsite = website,
      b.BusinessVat     = vat,
      b.BusinessCity    = cityID
  WHERE b.BusinessID = 1;

  COMMIT WORK;
END;

