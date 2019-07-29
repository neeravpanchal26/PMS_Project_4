create
  definer = PMS@`%` procedure uspCreateOwner_Create(IN firstName varchar(45), IN lastName varchar(45),
                                                    IN contactNumber varchar(10), IN email varchar(200),
                                                    IN address1 varchar(45), IN address2 varchar(45), IN suburb int)
BEGIN
-- Error Handling
  DECLARE errno INT;
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
      GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
      SELECT errno AS MYSQL_ERROR;
      ROLLBACK;
    END;

  START TRANSACTION;
    SET autocommit = 0;
    SET @ownerID = (SELECT MAX(o.OwnerID) + 1 FROM Owner AS o);
    
    #   Statement Here
    #   Duplication Check
    IF ((SELECT COUNT(u.UserID) FROM User AS u WHERE u.Email = email AND u.ContactNumber = contactNumber) > 0) THEN
      SELECT TRUE AS BothExists;
    ELSEIF ((SELECT COUNT(u.UserID) FROM User AS u WHERE u.ContactNumber = contactNumber) > 0) THEN
      SELECT TRUE AS PhoneExists;
    ELSEIF ((SELECT COUNT(u.UserID) FROM User AS u WHERE u.Email = email) > 0) THEN
      SELECT TRUE AS EmailExists;
    ELSE
      INSERT INTO `pms_schema`.`Owner`
								(`OwnerID`,
								`Firstname`,
								`Lastname`,
								`ContactNumber`,
								`Address1`,
								`Address2`,
								`Email`,
								`Suburb`,
								`Active`)
								VALUES
								(@ownerID,
								firstName,
								lastName,
								contactNumber,
								address1,
								address2,
								email,
								suburb,
								1);

    END IF;
    IF (row_count() > 0) THEN
      SELECT TRUE;
    END IF;
  COMMIT WORK;
END;

