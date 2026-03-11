import BlurText from "./BlurText";

function Home() {
  const handleAnimationComplete = () => {
    console.log('Text animation completed!');
  };

  return (
    <section id="home">

      {/* Social Handles - Positioned absolute top-left on desktop */}
      <div className="handle">
        <a href="https://github.com/ArunKumarDeveloper" target="_blank" aria-label="GitHub">
          <img src="handle (1).png" />
        </a>
        <a href="https://www.linkedin.com/in/arun-kumar-r-920841235" target="_blank" aria-label="LinkedIn">
          <img src="handle (2).png" />
        </a>
      </div>

      <div className="home-overlay">

        {/* Main Animated Text (Web Developer adaptation of Visual Designer) */}
         <BlurText
         className="home-subtitle"
          text="Hey, I'm Arun Kumar R"
          delay={80}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />
  
        <BlurText
          className="text-p"
          text="Turning ideas into clean & modern code, A RHCSA-certified Linux professional with hands-on experience in Red Hat Enterprise Linux, system administration, complemented by front-end web development skills in React, JavaScript, HTML & CSS. Based in Bangalore, open to IT Helpdesk, Junior Linux/Sysadmin, and Junior Web Developer roles."
          delay={80}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
        />

      </div>
     
    </section>
  );
}

export default Home;