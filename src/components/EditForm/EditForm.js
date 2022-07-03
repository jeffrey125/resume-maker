import React from "react";

import BondPaper from "../Utils/BondPaper";
import SideBar from "../Utils/SideBar";
import UploadFile from "./UploadFile";
import AboutMe from "./AboutMe";
import WebSocList from "./WebSocLinks/WebSocList";
import Skills from "./Skills/Skills";
import MainContent from "../Utils/MainContent";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

const EditForm = ({
  onChange,
  photo,
  onAboutMe,
  aboutMe,
  socLinks,
  onEditSocLink,
  toolSkills,
  onEditToolSkill,
  onEditSoftSkill,
  softSkills,
  onAddToolSkill,
  onAddSoftSkill,
  onDelToolSkill,
  onDelSoftSkill,
  personalInfo,
  onChangePersonalInfo,
  experience,
  onChangeExperience,
  onDeleteExperience,
  onAddExperience,
  education,
  onChangeEducation,
  onDeleteEducation,
  onAddEducation,
}) => {
  return (
    <BondPaper isEditForm={true}>
      <SideBar>
        <UploadFile onChange={onChange} photo={photo}></UploadFile>
        <AboutMe onAboutMe={onAboutMe} aboutMe={aboutMe}></AboutMe>
        <WebSocList
          socLinks={socLinks}
          onEditSocLink={onEditSocLink}
        ></WebSocList>
        <Skills
          toolSkills={toolSkills}
          onEditToolSkill={onEditToolSkill}
          onEditSoftSkill={onEditSoftSkill}
          softSkills={softSkills}
          onAddToolSkill={onAddToolSkill}
          onAddSoftSkill={onAddSoftSkill}
          onDelToolSkill={onDelToolSkill}
          onDelSoftSkill={onDelSoftSkill}
        ></Skills>
      </SideBar>
      <MainContent>
        <PersonalInfo
          personalInfo={personalInfo}
          onChangePersonalInfo={onChangePersonalInfo}
        />
        <Experience
          experience={experience}
          onChangeExperience={onChangeExperience}
          onDeleteExperience={onDeleteExperience}
          onAddExperience={onAddExperience}
        ></Experience>
        <Education
          education={education}
          onChangeEducation={onChangeEducation}
          onDeleteEducation={onDeleteEducation}
          onAddEducation={onAddEducation}
        ></Education>
      </MainContent>
    </BondPaper>
  );
};

export default EditForm;
