const { Router } = require("express");
const dbPool = require("../config/database.js");

const router = Router();

router.get("/conn", async (_req, res) => {
    try {
        const [rows] = await dbPool.query("SELECT 1 AS ok")
        res.json({
            ok: true,
            status: 200,
            dbMessage: rows[0].ok === 1 ? "Connected" : "Not connected" 
        })
    } catch (error) {
        res.json({
            ok: false,
            status: 500,
            dbMessage: error.message
        })
    }
});

module.exports = router;