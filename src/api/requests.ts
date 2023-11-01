import axios from "axios";

export const requestHerosList = async () => {
  try {
    const response = await axios.get(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
