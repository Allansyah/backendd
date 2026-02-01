require("dotenv").config();
const dbPool = require("../config/database");

const getAllLowongan = async () => {
  const SQLquery = `SELECT id, posisi, perusahaan, lokasi, kuota, deskripsi, kategori, status, created_at FROM lowongan_kerja`;
  const [rows] = await dbPool.query(SQLquery);

  return rows;
};

const getlowonganById = async (id) => {
  const SQLquery = `SELECT id, posisi, perusahaan, lokasi, kuota, deskripsi, kategori, status, created_at FROM lowongan_kerja 
  WHERE id = ${id}`;
  const [rows] = await dbPool.query(SQLquery);

  if (rows.length === 0) {
    throw new Error(`Lowongan with id ${id} not found`);
  }

  return rows;
};

const createLowongan = async (
  posisi,
  perusahaan,
  lokasi,
  kuota,
  deskripsi,
  kategori,
  status,
) => {
  const SQLquery = `INSERT INTO lowongan_kerja (posisi, perusahaan, lokasi, kuota, deskripsi, kategori, status)
  VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const [rows] = await dbPool.query(SQLquery, [
    posisi,
    perusahaan,
    lokasi,
    kuota,
    deskripsi,
    kategori,
    status,
  ]);

  return {
    id: rows.insertId,
    posisi: posisi,
    perusahaan: perusahaan,
    lokasi: lokasi,
    kuota: kuota,
    deskripsi: deskripsi,
    kategori: kategori,
    status: status,
  };
};

const updatelowongan = async (
  id,
  posisi,
  perusahaan,
  lokasi,
  kuota,
  deskripsi,
  kategori,
  status,
) => {
  const lowongan = await getlowonganById(id);

  if (!lowongan) {
    throw new Error(`Lowongan with id ${id} not found`);
  }

  const SQLquery = `UPDATE lowongan_kerja SET posisi = ?, perusahaan = ?, lokasi = ?, kuota = ?, deskripsi = ?, kategori = ?, status = ? WHERE id = ${id}`;
  const [rows] = await dbPool.query(SQLquery, [
    posisi,
    perusahaan,
    lokasi,
    kuota,
    deskripsi,
    kategori,
    status,
  ]);

  return {
    id: rows.insertId,
    posisi: posisi,
    perusahaan: perusahaan,
    lokasi: lokasi,
    kuota: kuota,
    deskripsi: deskripsi,
    kategori: kategori,
    status: status,
  };
};

const deleteLowongan = async (id) => {
  const lowongan = await getlowonganById(id);

  if (!lowongan) {
    throw new Error(`Lowongan with id ${id} not found`);
  }

  const SQLquery = `DELETE FROM lowongan_kerja WHERE id = ${id}`;

  const [rows] = await dbPool.query(SQLquery);

  return {
    id: id,
    data: rows.affectedRows,
  };
};

module.exports = {
  getAllLowongan,
  getlowonganById,
  createLowongan,
  updatelowongan,
  deleteLowongan,
};
