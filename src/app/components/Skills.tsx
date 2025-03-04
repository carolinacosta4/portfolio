import Skill from "./Skill";

function Skills() {
  return (
    <div className="w-full" id="skills">
      <p className="text-2xl mb-2 font-medium">Skills</p>
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 font-[family-name:var(--font-geist-sans)]">
        <Skill name="HTML" icon="https://skillicons.dev/icons?i=html" />
        <Skill name="CSS" icon="https://skillicons.dev/icons?i=css" />
        <Skill name="JavaScript" icon="https://skillicons.dev/icons?i=js" />
        <Skill name="NodeJS" icon="https://skillicons.dev/icons?i=nodejs" />
        <Skill
          name="Express.js"
          icon="https://skillicons.dev/icons?i=express"
        />
        <Skill name="MongoDB" icon="https://skillicons.dev/icons?i=mongodb" />
        <Skill name="TypeScript" icon="https://skillicons.dev/icons?i=ts" />
        <Skill name="Vue" icon="https://skillicons.dev/icons?i=vue" />
        <Skill name="React" icon="https://skillicons.dev/icons?i=react" />
        <Skill
          name="React Native"
          icon="https://skillicons.dev/icons?i=react"
        />
        <Skill name="MySQL" icon="https://skillicons.dev/icons?i=mysql" />
        <Skill name="GraphQL" icon="https://skillicons.dev/icons?i=graphql" />
        <Skill name="Figma" icon="https://skillicons.dev/icons?i=figma" />
        <Skill name="After effects" icon="https://skillicons.dev/icons?i=ae" />
        <Skill
          name="Adobe Illustrator"
          icon="https://skillicons.dev/icons?i=ai"
        />
      </div>
    </div>
  );
}

export default Skills;
