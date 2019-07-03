create
  definer = PMS@`%` procedure uspCreateUser_Create(IN firstName varchar(45), IN lastName varchar(45), IN dob VARCHAR(10),
                                                   IN contactNumber varchar(10), IN email varchar(200),
                                                   IN password varchar(60), IN userType int, IN address1 varchar(45),
                                                   IN address2 varchar(45), IN suburb int)
BEGIN
  -- Error Handling
  DECLARE errno INT;
  DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
      GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
      SELECT errno AS MYSQL_ERROR;
      ROLLBACK;
    END;

  START TRANSACTION
    ;
    SET autocommit = 0;
    SET @userID = (SELECT MAX(User.UserID) + 1 FROM User);
    SET @salt = UNHEX(SHA1(CONCAT(RAND(), RAND(), RAND())));
    SET @ehash = UNHEX(SHA1(CONCAT(HEX(@salt), password)));

    #   Statement Here
    #   Duplication Check
    IF ((SELECT COUNT(u.UserID) FROM User AS u WHERE u.Email = email AND u.ContactNumber = contactNumber) > 0) THEN
      SELECT TRUE AS BothExists;
    ELSEIF ((SELECT COUNT(u.UserID) FROM User AS u WHERE u.ContactNumber = contactNumber) > 0) THEN
      SELECT TRUE AS PhoneExists;
    ELSEIF ((SELECT COUNT(u.UserID) FROM User AS u WHERE u.Email = email) > 0) THEN
      SELECT TRUE AS EmailExists;
    ELSE
      INSERT INTO `pms_schema`.`User`
      (`UserID`,
       `FirstName`,
       `Surname`,
       `Dob`,
       `ContactNumber`,
       `Email`,
       `Salt`,
       `Hash`,
       `Active`,
       `Address1`,
       `Address2`,
       `Type`,
       `Suburb`)
      VALUES (@userID, firstName, lastName, dob, contactNumber, email, @salt, @ehash, 0, address1, address2, userType,
              suburb);
    END IF;
    IF (row_count() > 0) THEN
      SELECT TRUE;
    END IF;
  COMMIT WORK;
END;

