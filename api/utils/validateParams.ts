export const validateParams = (query: any, required: string[]) => {
  const missing = required.filter((p) => !query[p]);
  if (missing.length > 0) {
    throw {
      message: `Missing required query params: ${missing.join(", ")}`,
      status: 400
    };
  }
};
