function errors(message, code) {
  let e = new Error(message);
  if (code) {
    e.statusCode = code;
  }
  return e;
}

module.export = errors;