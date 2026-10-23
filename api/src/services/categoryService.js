const Category = require('../models/Category');

const createCategory = async (categoryData) => {
  const newCategory = new Category(categoryData);
  return newCategory.save();
};

const getAllCategories = async (queryParams) => {
  const { active, name, sort, page = 1, limit = 10 } = queryParams;

  const filter = {};

  if (active !== undefined) {
    filter.active = active === 'true';
  }

  if (name) {
    filter.name = { $regex: name, $options: 'i' };
  }

  // 1. Validamos y calculamos la paginación (enteros positivos y límites)
  const pageNum = Math.max(1, parseInt(page, 10));
  const limitNum = Math.min(50, Math.max(1, parseInt(limit, 10))); // Máximo 50 por seguridad
  const skip = (pageNum - 1) * limitNum;

  // 2. Preparamos la consulta con skip y limit
  let query = Category.find(filter).skip(skip).limit(limitNum);

  if (sort) {
    const sortCriteria = sort.split(',').join(' ');
    query = query.sort(sortCriteria);
  }

  // 3. Ejecutamos la búsqueda y contamos el total de documentos concurrentemente
  const categories = await query;
  const total = await Category.countDocuments(filter);

  // 4. Devolvemos los datos y la estructura de paginación que exige el PDF
  return {
    data: categories,
    pagination: {
      page: pageNum,
      limit: limitNum,
      total,
      totalPages: Math.ceil(total / limitNum)
    }
  };
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const updateCategory = async (id, updateData) => {
  return await Category.findByIdAndUpdate(
    id,
    updateData,
    { new: true, runValidators: true }
  );
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}