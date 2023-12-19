import createHttpError from "http-errors";

export default function notFoundHandler(req, res, next) {
  return next(createHttpError.NotFound())
}
