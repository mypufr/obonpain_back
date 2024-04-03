// will run the controller and catch errors

export default (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    next(res.status(500).render('error.ejs'));
  }
};
