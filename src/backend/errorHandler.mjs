export default {
  noQueryParameterProvided: () => {
    let error = new Error("No Query parameter was provided");
    error.status = 400;
    throw error;
  }
};
