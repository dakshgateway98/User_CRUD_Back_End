import User from "../models/userModel";

export const getAllUser = async () => {
  try {
    console.log("getAllUser");
    return await User.find();
  } catch (err) {
    throw new Error(`getAllHacker Err: ${err}`);
  }
};

export const createOneUser = async (data) => {
  try {
    // console.log("Controller", data);
    await User.create(data);
  } catch (err) {
    throw new Error(`createOneHacker Err: ${err}`);
  }
};

export const findById = async (id) => {
  try {
    console.log("Controller", id);
    return await User.findById(id);
  } catch (err) {
    throw new Error(`findById Err: ${err}`);
  }
};

export const deleteById = async (id) => {
  try {
    // console.log("Controller", id);

    return await User.findByIdAndDelete(id, () => {
      console.log(`deleteById success : ${id}`);
    });
  } catch (err) {
    throw new Error(`deleteById Err: ${err}`);
  }
};

export const updateById = async (id, data) => {
  try {
    //console.log("Controller", id, data);
    return await User.findByIdAndUpdate(id, data);
  } catch (err) {
    throw new Error(`updateById Err: ${err}`);
  }
};
