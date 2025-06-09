const express = require('express');
const router = express.Router();
const db = require('../config/database');

const toDatetime = (date) => {
    return date.toISOString().replace('T', ' ').slice(0, 19);
}

// 회원 등록 API
router.post('/register', async (req, resp) => {
    const { name, password, email } = req.body;
    try {
        const sql = "INSERT INTO bank_user (name, password, email, created_at) VALUES (?,?,?,?)";
        const createdAt = toDatetime(new Date());
        const [result] = await db.query(sql, [name, password, email, createdAt]);
        resp.json({ success: true, affectedRows: result.affectedRows });
    } catch (error) {
        resp.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;