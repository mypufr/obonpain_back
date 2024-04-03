export default {
  async notFound(_, res) {
    return res.status(404).render('404.ejs');
  },

};
