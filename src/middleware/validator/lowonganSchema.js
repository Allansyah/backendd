const { z } = require("zod");

const createLowonganSchema = z.object({
  posisi: z.string().min(3, "Name mus be at least 3 characters"),
  perusahaan: z.string().min(3, "Username must be at least 3 characters"),
  lokasi: z.string().min(3, "Username must be at least 3 characters"),
  kuota: z.string().min(1, "Invalid kuoat address"),
  deskripsi: z.string().min(10, "Deskripsi must be at least 10 characters"),
  kategori: z.string().min(3, "Kategori must be at least 3 characters"),
  status: z.string().min(3, "Status must be at least 3 characters"),
});

module.exports = { createLowonganSchema };
