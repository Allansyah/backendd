const lowonganModel = require("../models/lowonganModel");
const bcrypt = require("bcrypt");

const getAllLowongan = async (_req, res) => {
  try {
    const lowongan = await lowonganModel.getAllLowongan();

    res.status(200).json({
      message: "Success get all data lowongan",
      data: lowongan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error.message,
    });
  }
};

const createLowongan = async (req, res) => {
  try {
    const { posisi, perusahaan, lokasi, kuota, deskripsi, kategori, status } =
      req.body;

    // const hashedPassword = await bcrypt.hash(password, 10);

    const lowongan = await lowonganModel.createLowongan(
      posisi,
      perusahaan,
      lokasi,
      kuota,
      deskripsi,
      kategori,
      status,
    );

    res.status(201).json({
      message: "Success create lowongan",
      data: lowongan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error.message,
    });
  }
};

const getlowonganById = async (req, res) => {
  try {
    const id = req.params.id;
    const lowongan = await lowonganModel.getlowonganById(id);

    res.status(200).json({
      message2: "Success get data lowongan with id " + id,
      data: lowongan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error.message,
    });
  }
};

const updatelowongan = async (req, res) => {
  try {
    const id = req.params.id;
    const { posisi, perusahaan, lokasi, kuota, deskripsi, kategori, status } =
      req.body;

    // const hashedPassword = await bcrypt.hash(password, 10);

    const lowongan = await lowonganModel.updatelowongan(
      id,
      posisi,
      perusahaan,
      lokasi,
      kuota,
      deskripsi,
      kategori,
      status,
    );

    res.status(200).json({
      message: "Success update user",
      data: lowongan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const lowongan = await lowonganModel.deleteLowongan(id);

    res.status(200).json({
      message: "Success delete lowongan",
      data: lowongan,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      serverMessage: error.message,
    });
  }
};

module.exports = {
  getAllLowongan,
  createLowongan,
  getlowonganById,
  updatelowongan,
  deleteUser,
};
