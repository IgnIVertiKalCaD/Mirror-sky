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
  async forceFileDownload(response, title) {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title);
    document.body.appendChild(link);
    link.click();
  }
  async downloadWithAxios(url, title) {
    await axios({
      method: "get",
      url,
      responseType: "arraybuffer",
    })
      .then((response) => {
        this.forceFileDownload(response, title);
      })
      .catch(() => alert("error occured"));
  }
}

export default Transition;
