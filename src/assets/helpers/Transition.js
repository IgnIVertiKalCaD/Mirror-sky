import axios from "axios";

class Transition {
  async getInfoWithAxios(baseURL, listener, query) {
    return await axios
      .get(baseURL + listener + query)
      .then((response) => {
        return response.data;
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

export default Transition;
