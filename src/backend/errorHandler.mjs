export default {
  noQueryParameterProvided: () => {
    let error = new Error("No Query parameter was provided");
    error.status = 400;
    throw error;
  },
  noFilmFound: () => {
    let error = new Error("No Film has been found with these parameters!");
    error.status = 400;
    throw error;
  }
};
