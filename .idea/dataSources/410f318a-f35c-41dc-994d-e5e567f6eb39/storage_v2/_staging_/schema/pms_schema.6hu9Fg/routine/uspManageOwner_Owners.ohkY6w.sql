create
  definer = pms@`%` procedure uspManageOwner_Owners()
BEGIN
  SELECT o.OwnerID,CONCAT(o.Firstname, ' ', o.Lastname) AS owner, o.ContactNumber,o.Email, o.Active
  FROM Owner AS o;;
END;

