const db = require("../db");

// Get all applications
exports.getApplications = (req, res) => {
    const sql = "SELECT * FROM applications";
    db.all(sql, [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ data: rows });
    });
};

// Create a new application
exports.createApplication = (req, res) => {
    const { company, position, status } = req.body;
    const sql = "INSERT INTO applications (company, position, status) VALUES (?, ?, ?)";
    const params = [company, position, status || 'Pending'];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({
            message: "Application created successfully",
            data: { id: this.lastID, company, position, status: status || 'Pending' }
        });
    });
};

// Update an application
exports.updateApplication = (req, res) => {
    const { company, position, status } = req.body;
    const { id } = req.params;
    const sql = "UPDATE applications SET company = ?, position = ?, status = ? WHERE id = ?";
    const params = [company, position, status, id];

    db.run(sql, params, function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: "Updated successfully", changes: this.changes });
    });
};

// Delete an application
exports.deleteApplication = (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM applications WHERE id = ?", id, function (err) {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json({ message: "Deleted successfully", rows: this.changes });
    });
};