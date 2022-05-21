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

export const getWorks = async () => {
  try {
    const res = await axios.get(process.env.WORKS_URL);
    return res.data;
  } catch (error) {
    console.error(error);
    // TODO: 例外を throws
  }
};

export const getSkillSummary = async () => {
  try {
    const res = await axios.get(process.env.SKILL_SUMMARY_URL);
    return res.data;
  } catch (error) {
    console.error(error);
    // TODO: 例外を throws
  }
};

export const getSkills = async () => {
  try {
    const res = await axios.get(process.env.SKILLS_URL);
    return res.data;
  } catch (error) {
    console.error(error);
    // TODO: 例外を throws
  }
};
