import axios from "axios";

export const getProfile = async () => {
  try {
    const res = await axios.get(process.env.PROFILE_URL);
    return res.data;
  } catch (error) {
    console.error(error);
    // TODO: 例外を throws
  }
};
