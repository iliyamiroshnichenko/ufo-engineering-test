import axios from "axios";

const API_KEY = "20192065-3084c849aae1164575ffb5a21";

const getImages = async () => {
  try {
    const { data } = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=cats&image_type=all&per_page=100`);
    console.log(data.hits);
    return data ? data.hits : [];
  } catch (error) {
    console.log(error);
  }
};

export default getImages;
