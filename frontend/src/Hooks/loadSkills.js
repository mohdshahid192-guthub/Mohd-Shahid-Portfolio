import skillsData from "../Components/Data/Skillsdata.json"

const useSkillsData = () => {
  return{
    skills: skillsData,
    loading: false,
    error: null
  }
}

export default useSkillsData