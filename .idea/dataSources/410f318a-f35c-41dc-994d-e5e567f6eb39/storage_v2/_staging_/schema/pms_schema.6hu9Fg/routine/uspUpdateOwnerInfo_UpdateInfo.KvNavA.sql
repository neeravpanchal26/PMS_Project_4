create
  definer = PMS@`%` procedure uspUpdateOwnerInfo_UpdateInfo(IN ownerID int, IN firstName varchar(45),
                                                            IN lastName varchar(45), IN contactNumber varchar(10),
                                                            IN email VARCHAR(200),
                                                            IN address1 varchar(45), IN address2 varchar(45),
                                                            IN suburb int)
BEGIN
  DECLARE errno INT;
  DECLARE EXIT
    HANDLER FOR SQLEXCEPTION
    BEGIN
      GET CURRENT DIAGNOSTICS CONDITION 1 errno = MYSQL_ERRNO;
      SELECT errno AS MYSQL_ERROR;
      ROLLBACK;
    END;

  START TRANSACTION;
  SET autocommit = 0;

  UPDATE Owner AS o
  SET o.Firstname     = firstName,
      o.Lastname=lastName,
      o.ContactNumber = contactNumber,
      o.Email         = email,
      o.Address1=address1,
      o.Address2=address2,
      o.Suburb=suburb
  WHERE o.OwnerID = ownerID;

  IF
    (row_count() > 0)
  THEN
    SELECT TRUE;
  END IF;
  COMMIT WORK;
END;

