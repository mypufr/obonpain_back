import mouldsDatamapper from '../../datamappers/moulds.datamapper.js';
// import ApiError from '../errors/api-error.js';

export default {
  async mouldsPage(_, res) {
    const mouldsList = await mouldsDatamapper.findAll();

    const mould = {
      name: '',
      quantity: '',
      status: true,
    };
    return res.status(200).render('mould', { mouldsList, mould });
  },

  async mouldDetailPage(req, res) {
    // get mouldList
    const mouldsList = await mouldsDatamapper.findAll();

    // get mould to update
    const { id } = req.params;
    const mould = await mouldsDatamapper.findByPk(id);

    return res.status(200).render('mould', {
      id, mouldsList, mould,
    });
  },

  async createOne(req, res) {
    const breadData = req.body;

    await mouldsDatamapper.create(breadData);
    return res.status(200).redirect('/admin/moules');
  },

  async updateOne(req, res) {
    const breadData = req.body;
    const { id } = req.params;

    // update updated_at
    breadData.updated_at = new Date();

    const bread = await mouldsDatamapper
      .update(id, breadData);

    // if productCategories not exists
    if (!bread) {
      return alert('Erreur lors de la mise à jour');
    }

    // productCategory updated
    return res.status(200).redirect('/admin/moules');
  },

};
