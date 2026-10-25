const express = require('express');
const router = express.Router();

const {
    createArticle,
    updateArticle,
    deleteArticle,
    myArticles
} = require('../controller/articlesController');

const { protect } = require('../middlewares/authMiddleware');

router.post('/my-articles', protect, myArticles);
router.post('/', protect, createArticle);
router.put('/:id', protect, updateArticle);
router.delete('/:id', protect, deleteArticle);

module.exports = router;