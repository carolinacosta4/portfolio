type SkillProps = {
  name: string;
  icon: string;
};

function Skill({ name, icon }: SkillProps) {
  return (
    <div className="bg-[#e9ecef] bg-opacity-30 p-4 rounded-lg flex flex-col w-full">
      <img src={icon} className="w-12" alt="Skill Icon" />
      <p className="pt-2 font-medium text-lg">{name}</p>
    </div>
  );
}

export default Skill;
