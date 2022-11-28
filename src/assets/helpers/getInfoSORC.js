import axios from "axios"

async function getInfoSORC(
  versionGravit,
  ServerOrClients,
  version,
  validator
) {
  const link = `https://mirror-sky.xyz/${versionGravit}${ServerOrClients}${version}/`;
  const response = await axios.get(link);
  const parser = new DOMParser();
  const content = parser.parseFromString(response.data, "text/html");
  const links = [
    ...content
      .querySelector("pre")
      .innerHTML.matchAll(
        /<a href="(.+(\.[\w]{2,4}|\/))">(.+)<\/a>\s+([\w-]+\s[\d:]+)\s+([\d]+[K|M]?|-)/g
      ),
  ];
  const testLinks = links.map((_link) => ({
    title: _link[3],
    link: link + _link[1],
    size: _link[5],
  }));
  if (!validator) {
    return testLinks;
  } else
    return testLinks.filter((workedLink) => {
      if (workedLink.title.match(validator)) {
        return true;
      }
    });
}
export default getInfoSORC