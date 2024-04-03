/* eslint-disable camelcase */
import productsDatamapper from '../../datamappers/products.datamapper.js';
import productCategoriesDatamapper from '../../datamappers/product-categories.datamapper.js';
import mouldsDatamapper from '../../datamappers/moulds.datamapper.js';
// import ApiError from '../errors/api-error.js';

export default {
  async breadPage(_, res) {
    const productsList = await productsDatamapper.findAll();
    return res.status(200).render('bread_home', { productsList });
  },

  async breadDetailPage(req, res) {
    const { id } = req.params;
    const bread = await productsDatamapper.findByPk(id);

    const productCategoriesList = await productCategoriesDatamapper.findAll();
    const mouldList = await mouldsDatamapper.findAll();

    return res.status(200).render('bread_detail', {
      bread, id, productCategoriesList, mouldList,
    });
  },

  async breadCreationPage(req, res) {
    const productCategoriesList = await productCategoriesDatamapper.findAll();
    const mouldList = await mouldsDatamapper.findAll();

    return res.status(200).render('bread_create', {
      productCategoriesList, mouldList,
    });
  },

  async createOne(req, res) {
    const breadData = req.body;
    // replace ',' by '.' for the price
    breadData.price = breadData.price.replace(',', '.');

    await productsDatamapper.create(breadData);
    return res.status(200).redirect('/admin/pains');
  },

  async updateOne(req, res) {
    const productData = req.body;

    // update updated_at
    productData.updated_at = new Date();

    const product = await productsDatamapper
      .update(req.params.id, req.body);

    // if productCategories not exists
    if (!product) {
      return alert('Erreur lors de la mise à jour');
    }

    // productCategory updated
    return res.status(200).redirect('/admin/pains');
  },

};
