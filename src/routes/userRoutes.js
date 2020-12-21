import express from "express";
import {
  getAllUser,
  createOneUser,
  findById,
  deleteById,
  updateById,
} from "../controllers/userController";

const router = new express.Router();

// localhost:4444/user/ GET request
router.get("/", async (req, res) => {
  try {
    const hackers = await getAllUser();
    res.end(JSON.stringify(hackers, null, 2));
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
});

router.post("/getById", async (req, res) => {
  try {
    const id = req.body.id;
    const user = await findById(id);
    res.end(JSON.stringify(user, null, 2));
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
});

// localhost:4444/user POST request
// Create one user
router.post("/", async (req, res) => {
  try {
    console.log("Create User")
    const data = req.body;
    console.log("Route", data);
    await createOneUser(data);
    res.end(JSON.stringify({ status: "ok" }));
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
});

router.post("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    console.log("Route", id);
    await deleteById(id);
    return res.end(JSON.stringify({ status: "ok" }));
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
});

router.post("/update", async (req, res) => {
  try {
    const id = req.body.id;
    const data = req.body;
    //console.log("Route", id);
    await updateById(id, data);
    return res.end(JSON.stringify({ status: "ok" }));
  } catch (err) {
    res.status(500).json({
      status: "failed",
      error: err,
    });
  }
});

module.exports = router;
