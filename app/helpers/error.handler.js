export default (error, req, res, next) => {
  // err.httpStatus : 400, 404, 500 …
    console.log(error);
    res.status(error.httpStatus).json({ error: error.message });
  };
  