<?php
/**
 * Created by PhpStorm.
 * User: nsp
 * Date: 2019-06-26
 * Time: 13:01
 */

namespace Data;

require_once '../Data/DbHelper.php';
require_once '../Data/EmailHelper.php';

class DbHandler
{
    // Login component methods
    public static function Login_Check($username, $password)
    {
        $sp = 'CALL uspLogin_Check(?, ?)';
        $param = array(&$username, &$password);
        return DBHelper::SelectParam($sp, $param);
    }

    // Dashboard It Admin component methods
    public static function DashboardItTechnician_Users($days)
    {
        $sp = 'CALL uspDashboardItTechnician_Users(?)';
        $param = array(&$days);
        return DBHelper::SelectParam($sp, $param);
    }

    // Create User component methods
    public static function CreateUser_UserType()
    {
        $sp = 'CALL uspCreateUser_UserType';
        return DBHelper::Select($sp);
    }

    public static function CreateUser_City()
    {
        $sp = 'CALL uspCreateUser_City';
        return DBHelper::Select($sp);
    }

    public static function CreateUser_Suburb($cityID)
    {
        $sp = 'CALL uspCreateUser_Suburb(?)';
        $param = array(&$cityID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function CreateUser_Create($fN, $lN, $dob, $cN, $eA, $pW, $uT, $a1, $a2, $sub)
    {
        $sp = 'CALL uspCreateUser_Create (?,?,?,?,?,?,?,?,?,?)';
        $param = array(&$fN, &$lN, &$dob, &$cN, &$eA, &$pW, &$uT, &$a1, &$a2, &$sub);
        return DBHelper::SelectParam($sp, $param);
    }

    // Manage Users component methods
    public static function ManageUsers_Users($userID)
    {
        $sp = 'CALL uspManageUsers_Users(?)';
        $param = array(&$userID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function ManageUsers_Type($userID, $userType)
    {
        $sp = 'CALL uspManageUsers_Type(?,?)';
        $param = array(&$userID, &$userType);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    public static function ManageUsers_Status($userID, $userStatus)
    {
        $sp = 'CALL uspManageUsers_Status(?,?)';
        $param = array(&$userID, &$userStatus);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    // Change password component methods
    public static function ChangePassword_OldCheck($userID, $userPassword)
    {
        $sp = 'CALL uspChangePassword_OldCheck(?,?)';
        $param = array(&$userID, &$userPassword);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function ChangePassword_UpdatePassword($userID, $userPassword)
    {
        $sp = 'CALL uspChangePassword_UpdatePassword(?,?)';
        $param = array(&$userID, &$userPassword);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    // Update personal info component methods
    public static function UpdatePersonalInfo_SpecificUser($userID)
    {
        $sp = 'CALL uspUpdatePersonalInfo_SpecificUser(?)';
        $param = array(&$userID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function UpdatePersonalInfo_UpdateInfo($uI, $fN, $lN, $dob, $cN, $eA, $a1, $a2, $sub)
    {
        $sp = 'CALL uspUpdatePersonalInfo_UpdateInfo (?,?,?,?,?,?,?,?,?)';
        $param = array(&$uI, &$fN, &$lN, &$dob, &$cN, &$eA, &$a1, &$a2, &$sub);
        return DBHelper::SelectParam($sp, $param);
    }

    // Business settings component methods
    public static function BusinessSetting_Info()
    {
        $sp = 'CALL uspBusinessSetting_Info';
        return DBHelper::Select($sp);
    }

    public static function BusinessSetting_LogoUpload($image)
    {
        $sp = 'CALL uspBusinessSetting_LogoUpload(?)';
        return DBHelper::BlobUpload($sp, $image);
    }

    public static function BusinessSetting_Update($name, $contact, $website, $vat, $cityID)
    {
        $sp = 'CALL uspBusinessSetting_Update(?,?,?,?,?)';
        $param = array(&$name, &$contact, &$website, &$vat, &$cityID);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    public static function BusinessSetting_LogoDownload()
    {
        $sp = 'CALL uspBusinessSetting_LogoDownload';
        return DBHelper::BlobRetrieve($sp);
    }

    // User report component methods
    public static function UserReport_Users($typeDesc, $cityName, $suburbName)
    {
        $sp = 'CALL uspUserReport_Users(?,?,?)';
        $param = array(&$typeDesc, &$cityName, &$suburbName);
        return DBHelper::SelectParam($sp, $param);
    }

    // Create owner component methods
    public static function CreateOwner_Create($firstName, $lastName, $contactNumber, $email, $address1, $address2, $suburb)
    {
        $sp = 'CALL uspCreateOwner_Create (?,?,?,?,?,?,?)';
        $param = array(&$firstName, &$lastName, &$contactNumber, &$email, &$address1, &$address2, &$suburb);
        return DBHelper::SelectParam($sp, $param);
    }

    // Manage owner component methods
    public static function ManageOwner_Owners()
    {
        $sp = 'CALL uspManageOwner_Owners';
        return DBHelper::Select($sp);
    }

    public static function ManageOwner_Status($ownerID, $ownerStatus)
    {
        $sp = 'CALL uspManageOwner_Status(?,?)';
        $param = array(&$ownerID, &$ownerStatus);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    // Update owner component methods
    public static function UpdateOwnerInfo_SpecificOwner($ownerID)
    {
        $sp = 'CALL uspUpdateOwnerInfo_SpecificOwner (?)';
        $param = array(&$ownerID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function UpdateOwnerInfo_UpdateInfo($ownerID, $firstName, $lastName, $contactNumber, $email, $address1, $address2, $suburb)
    {
        $sp = 'CALL uspUpdateOwnerInfo_UpdateInfo (?,?,?,?,?,?,?,?)';
        $param = array(&$ownerID, &$firstName, &$lastName, &$contactNumber, &$email, &$address1, &$address2, &$suburb);
        return DBHelper::SelectParam($sp, $param);
    }

    // Add property component methods
    public static function AddProperty_Add($Name, $Address1, $Address2, $Suburb, $YearBuilt, $Type, $Owner, $Bedrooms, $Bathrooms, $Size, $Status)
    {
        $sp = 'CALL uspAddProperty_Add(?,?,?,?,?,?,?,?,?,?,?)';
        $param = array(&$Name, &$Address1, &$Address2, &$Suburb, &$YearBuilt, &$Type, &$Owner, &$Bedrooms, &$Bathrooms, &$Size, &$Status);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function AddProperty_PropType()
    {
        $sp = 'CALL uspAddProperty_PropType';
        return DBHelper::Select($sp);
    }

    public static function AddProperty_Owner()
    {
        $sp = 'CALL uspAddProperty_Owner';
        return DBHelper::Select($sp);
    }

    public static function AddProperty_PropStatus()
    {
        $sp = 'CALL uspAddProperty_PropStatus';
        return DBHelper::Select($sp);
    }

    public static function AddProperty_ImageUpload($image)
    {
        $sp = 'CALL uspAddProperty_ImageUpload(?)';
        return DBHelper::BlobUpload($sp, $image);
    }

    // Manage property component methods
    public static function ManageProperty_Properties()
    {
        $sp = 'CALL uspManageProperty_Properties';
        return DBHelper::Select($sp);
    }

    // Update property component methods
    public static function UpdateProperty_Property($propertyID)
    {
        $sp = 'CALL uspUpdateProperty_Property(?)';
        $param = array(&$propertyID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function UpdateProperty_UpdateInfo($PropID, $Name, $Address1, $Address2, $Suburb, $YearBuilt, $Type, $Owner, $Bedrooms, $Bathrooms, $Size, $Status)
    {
        $sp = 'CALL uspUpdateProperty_UpdateInfo(?,?,?,?,?,?,?,?,?,?,?,?)';
        $param = array(&$PropID, &$Name, &$Address1, &$Address2, &$Suburb, &$YearBuilt, &$Type, &$Owner, &$Bedrooms, &$Bathrooms, &$Size, &$Status);
        return DBHelper::SelectParam($sp, $param);
    }

    // Assign property component methods
    public static function AssignProperty_Property()
    {
        $sp = 'CALL uspAssignProperty_Property';
        return DBHelper::Select($sp);
    }

    public static function AssignProperty_Tenants()
    {
        $sp = 'CALL uspAssignProperty_Tenants';
        return DBHelper::Select($sp);
    }

    public static function AssignProperty_PropertyImageID($propertyID)
    {
        $sp = 'CALL uspAssignProperty_PropertyImageID(?)';
        $param = array(&$propertyID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function AssignProperty_PropertyImages($imgID)
    {
        $sp = 'CALL uspAssignProperty_PropertyImages(?)';
        return DBHelper::BlobParamRetrieve($sp, $imgID);
    }

    public static function AssignProperty_Add($propertyID, $tenantID, $startDate, $endDate)
    {
        $sp = 'CALL uspAssignProperty_Add(?,?,?,?)';
        $param = array(&$propertyID, &$tenantID, &$startDate, &$endDate);
        return DBHelper::SelectParam($sp, $param);
    }

    // Report complaint component methods
    public static function ReportComplaint_Category()
    {
        $sp = 'CALL uspReportComplaint_Category';
        return DBHelper::Select($sp);
    }

    public static function ReportComplaint_CategoryImages($catID)
    {
        $sp = 'CALL uspReportComplaint_CategoryImages(?)';
        return DBHelper::BlobParamRetrieve($sp, $catID);
    }

    public static function ReportComplaint_SubCategory($catID)
    {
        $sp = 'CALL uspReportComplaint_SubCategory(?)';
        $param = array(&$catID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function ReportComplaint_SubCategoryImages($subID)
    {
        $sp = 'CALL uspReportComplaint_SubCategoryImages(?)';
        return DBHelper::BlobParamRetrieve($sp, $subID);
    }

    public static function ReportComplaint_Add($tenantID, $desc, $subCate)
    {
        $sp = 'CALL uspReportComplaint_Add(?,?,?)';
        $param = array(&$tenantID, &$desc, &$subCate);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function ReportComplaint_Image($image)
    {
        $sp = 'CALL uspReportComplaint_Image(?)';
        return DBHelper::BlobUpload($sp, $image);
    }

    // Create supplier component methods
    public static function CreateSupplier_Type()
    {
        $sp = 'CALL uspCreateSupplier_Type';
        return DBHelper::Select($sp);
    }

    public static function CreateSupplier_Create($name, $email, $contact, $type, $address1, $address2, $suburb)
    {
        $sp = 'CALL uspCreateSupplier_Create(?,?,?,?,?,?,?)';
        $param = array(&$name, &$type, &$contact, &$email, &$address1, &$address2, &$suburb);
        return DBHelper::SelectParam($sp, $param);
    }

    // Manage supplier component methods
    public static function ManageSupplier_Suppliers()
    {
        $sp = 'CALL uspManageSupplier_Suppliers';
        return DBHelper::Select($sp);
    }

    public static function ManageSupplier_Status($supplierID, $status)
    {
        $sp = 'CALL uspManageSupplier_Status(?,?)';
        $param = array(&$supplierID, &$status);
        return DBHelper::ExecuteNonQuery($sp, $param);
    }

    // Update supplier info component methods
    public static function UpdateSupplierInfo_SpecificSupplier($supplierID)
    {
        $sp = 'CALL uspUpdateSupplierInfo_SpecificSupplier(?)';
        $param = array(&$supplierID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function UpdateSupplierInfo_UpdateInfo($supplierID, $name, $email, $contact, $type, $address1, $address2, $suburb)
    {
        $sp = 'CALL uspUpdateSupplierInfo_UpdateInfo(?,?,?,?,?,?,?,?)';
        $param = array(&$supplierID, &$name, &$type, &$contact, &$email, &$address1, &$address2, &$suburb);
        return DBHelper::SelectParam($sp, $param);
    }

    // Assign complaint component methods
    public static function AssignComplaint_Supplier()
    {
        $sp = 'CALL uspAssignComplaint_Supplier';
        return DBHelper::Select($sp);
    }

    public static function AssignComplaint_Complaint()
    {
        $sp = 'CALL uspAssignComplaint_Complaint';
        return DBHelper::Select($sp);
    }

    public static function AssignComplaint_ComplaintImages($compID)
    {
        $sp = 'CALL uspAssignComplaint_ComplaintImages(?)';
        return DBHelper::BlobParamRetrieve($sp, $compID);
    }

    public static function AssignComplaint_Assign($compID, $suppID)
    {
        $sp = 'CALL uspAssignComplaint_Assign(?,?)';
        $param = array(&$compID, &$suppID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function SendEmail($address, $subject, $body)
    {
        return EmailHelper::SendMail($address, $subject, $body);
    }

    // Check complaint status component methods
    public static function CheckComplaintStatus_Complaint($tenantID)
    {
        $sp = 'CALL uspCheckComplaintStatus_Complaint(?)';
        $param = array(&$tenantID);
        return DBHelper::SelectParam($sp, $param);
    }

    public static function CheckComplaintStatus_ComplaintDetails($complaintID)
    {
        $sp = 'CALL uspCheckComplaintStatus_ComplaintDetails(?)';
        $param = array(&$complaintID);
        return DBHelper::SelectParam($sp, $param);
    }
}
