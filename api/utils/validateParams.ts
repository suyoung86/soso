export const validateParams = (query: any, required: string[]) => {
  const missing = required.filter((p) => !query[p]);
  if (missing.length > 0) {
    throw {
      message: `Missing required query params 왜왜왜왜왜왜: ${missing.join(", ")}`,
      status: 400
    };
  }
};
