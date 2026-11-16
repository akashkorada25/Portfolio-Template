import React from "react";
import { mySkills } from "../data/title";
import Icon from "./Custom/Icon";
import { skills } from "../data/skill";
import { skillGroups, certifications } from "../data/about";

function Skills() {
  return (
    <div className="xl:w-5/12 min-[850px]:w-5/12 py-4">
      <div className="font-bold text-xl text-[#37BCF8] pb-6 text-center">{mySkills}</div>
      <div className="flex flex-wrap w-full justify-center gap-2 items-center pb-4">
        {skills.map((element) => {
          return <Icon key={element.name} icon={element.icon} />;
        })}
      </div>
      <div className="flex flex-col gap-4">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <div className="text-sm font-semibold text-[#37BCF8] pb-2 text-center">
              {group.category}
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs border border-[#37BCF8]/50 rounded-full px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div className="text-sm font-semibold text-[#37BCF8] pb-2 text-center">
            Certifications
          </div>
          {certifications.map((cert) => (
            <div key={cert} className="text-sm text-center">
              {cert}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
