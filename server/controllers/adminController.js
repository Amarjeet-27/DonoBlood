import UserModel from "../models/userModel.js";

const getDonarListController = async (req, res) => {
  try {
    const donarData = await UserModel.find({ role: "donar" }).sort({
      createdAt: -1,
    });
    return res.status(200).send({
      success: true,
      message: "Donar list fetched successfully",
      donarData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: true,
      message: "Error in Donar List",
      error,
    });
  }
};

const getHospitalListController = async (req, res) => {
  try {
    const hospitalData = await UserModel.find({ role: "hospital" }).sort({
      createdAt: -1,
    });

    return res.status(200).send({
      success: true,
      Toatlcount: hospitalData.length,
      message: "HOSPITAL List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List API",
      error,
    });
  }
};

//GET ORG LIST
const getOrgListController = async (req, res) => {
  try {
    const orgData = await UserModel.find({ role: "organisation" }).sort({
      createdAt: -1,
    });

    return res.status(200).send({
      success: true,
      Toatlcount: orgData.length,
      message: "ORG List Fetched Successfully",
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In ORG List API",
      error,
    });
  }
};

//DELETE DONAR
const deleteDonarController = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: " Record Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting ",
      error,
    });
  }
};

export {
  getDonarListController,
  getHospitalListController,
  deleteDonarController,
  getOrgListController,
};
