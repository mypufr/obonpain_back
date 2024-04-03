import productCategoriesDatamapper from '../../datamappers/product-categories.datamapper.js';
// import ApiError from '../errors/api-error.js';

export default {
  async breadTypePage(_, res) {
    const productCategoriesList = await productCategoriesDatamapper.findAll();
    return res.status(200).render('bread_type_home', { productCategoriesList });
  },

  async breadTypeDetailPage(req, res) {
    const { id } = req.params;
    const productCategory = await productCategoriesDatamapper.findByPk(id);

    const {
      name, description, ingredient, photo, status,
    } = productCategory;

    return res.status(200).render('bread_type_detail', {
      name, description, ingredient, photo, status, id,
    });
  },

  breadTypeCreationPage(req, res) {
    return res.status(200).render('bread_type_create');
  },

  async createOne(req, res) {
    await productCategoriesDatamapper.create(req.body);
    return res.status(200).redirect('/admin/gamme-pains');
  },

  async updateOne(req, res) {
    const productCategoryData = req.body;

    // update updated_at
    productCategoryData.updated_at = new Date();

    const productCategory = await productCategoriesDatamapper
      .update(req.params.id, req.body);

    // if productCategories not exists
    if (!productCategory) {
      return alert('Erreur lors de la mise à jour');
    }

    // productCategory updated
    return res.status(200).redirect('/admin/gamme-pains');
  },

};
