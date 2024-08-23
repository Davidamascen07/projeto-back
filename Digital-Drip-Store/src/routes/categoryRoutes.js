// src/routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const { getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController'); // Ajuste o caminho se necessário
const authMiddleware = require('../middleware/authMiddleware');

// Rotas protegidas por middleware de autenticação
router.get('/:id', authMiddleware, getCategoryById);
router.post('/', authMiddleware, createCategory);
router.put('/:id', authMiddleware, updateCategory);
router.delete('/:id', authMiddleware, deleteCategory);

module.exports = router;

