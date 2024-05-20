import messageModel from "../models/messageModel.js";

const getMessageFromOrg = async (req, res) => {
  try {
    const data = await messageModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 })
      .populate("organisationId");
    return res.status(200).send({
      success: true,
      message: "Data fetched from org  successfully",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Unable to fetch data",
      error,
    });
  }
};
const getMessageFromHospital = async (req, res) => {
  try {
    const data = await messageModel
      .find({ role: "hospital" })
      .sort({ createdAt: -1 })
      .populate("hospitalId");
    return res.status(200).send({
      success: true,
      message: "Data fetched from hospital successfully ",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Unable to fetch data",
      error,
    });
  }
};

const getPreviousReqByOrg = async (req, res) => {
  try {
    const data = await messageModel
      .find({ organisationId: req.body.userId })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Data fetched ",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Unable to fetch data",
      error,
    });
  }
};
const getPreviousReqByHospital = async (req, res) => {
  try {
    const data = await messageModel
      .find({ hospitalId: req.body.userId })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Data fetched ",
      data,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Unable to fetch data",
      error,
    });
  }
};

const createMessageForDonarByOrg = async (req, res) => {
  try {
    // const { message } = req.body;
    req.body.organisationId = req.body.userId;
    req.body.role = "organisation";
    // console.log(req.body.userId);
    const result = new messageModel(req.body);
    await result.save();
    return res.status(200).send({
      success: true,
      message: "New post created successfully",
      result,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Unable to create a post for donar",
      error,
    });
  }
};
const createMessageForOrgByHospital = async (req, res) => {
  try {
    // req.body.hospitalId = req.body.userId;
    // console.log(req.body);
    req.body.hospitalId = req.body.userId;
    req.body.role = "hospital";
    const result = new messageModel(req.body);
    await result.save(res);
    return res.status(200).send({
      success: true,
      message: "New post created successfully",
      result,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Unable to create a post for org",
      error,
    });
  }
};

export {
  getMessageFromOrg,
  getMessageFromHospital,
  createMessageForDonarByOrg,
  createMessageForOrgByHospital,
  getPreviousReqByHospital,
  getPreviousReqByOrg,
};
