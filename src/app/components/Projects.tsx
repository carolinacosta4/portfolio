import Project from "./Project";
import mnuse from '../assets/mnuse.png'
import gymnart from '../assets/gymnart.png'
import rent from '../assets/rent+.png'
import wine from '../assets/wine.png'
import TUDU from '../assets/tudu.png'
import hush from '../assets/hush.png'

function Projects() {
  return (
    <div className="w-full" id="projects">
      <p className="text-2xl mb-2 font-medium">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full gap-4 xl:gap-8 font-[family-name:var(--font-geist-sans)]">
        <Project
          name="MNUSE"
          link="https://github.com/carolinacosta4/mnuse"
          image={mnuse}
          video='/mnuse-teaser.mp4'
          description="Mnuse is an educational Escape Room that addresses topics such as psychology, trauma and mental health, with the aim of educating players on issues such as dissociative amnesia, bullying and drunk-driving."
        />
        <Project
          name="GYMNART"
          link="https://github.com/carolinacosta4/Gymnart"
          image={gymnart}
          video='/gymnart-teaser.mp4'
          description="GYMNART is a gymnastics dashboard for the Olympic Games in Paris 2024 that shows the places and points of the athletes in real time!"
        />
        <Project
          name="rent+"
          link="https://github.com/carolinacosta4/RentPlus"
          image={rent}
          video='/rent-teaser.mp4'
          description="Rent+ is a house rental platform, focusing on the efficiency of the database and back-end operations. The platform allows property owners to add and manage properties, while users can search, book and pay for accommodations."
        />
        <Project
          name="Smart wine"
          link="https://github.com/carolinacosta4/smart-wine"
          image={wine}
          video='/wine-teaser.mp4'
          description="Smart Wine is a project combining enology with machine learning using a wine dataset. It features a classification model to predict wine type (white or red) and a regression model to estimate wine quality based on chemical properties."
        />
        <Project
          name="TUDU"
          link="https://github.com/carolinacosta4/TUDU"
          image={TUDU}
          video='/tudu-teaser.mp4'
          description="TUDU is a user-friendly mobile application designed to support young adults transitioning to independent living. TUDU transforms everyday chores into a part of a well-being routine, offering both practicality and a visually appealing experience."
        />
        <Project
          name="hush"
          link="https://github.com/carolinacosta4/Hush"
          image={hush}
          video='/hush-teaser.mp4'
          description="hush is an online plataform designed to help users track their sleep and mood. By analyzing sleep patterns and emotional well-being, hush provides insights and tips to improve rest and overall health."
        />
      </div>
    </div>
  );
}

export default Projects;
