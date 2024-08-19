const AboutMe = () => {
    return (
      <section id="about" className="py-16 bg-gray-800 text-gray-300">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-lg">Hey, I'm Akira-- I started programming due to my enjoyment of video games, and a spark of curiosity about what it would be like to create them.
            The fun problem-solving aspect drew me in, and if we fast forward a few years, I'm now a computer science student at Carnegie Mellon University. When I'm not working on my next coding assignment, I find myself experimenting with diffusion models 
            optimization algorithms, and automated level-generation techniques for video games. 
        </p>
        <p className="text-lg"> At school, I'm currently a TA for <a href="https://csd.cmu.edu/15151-mathematical-foundations-for-computer-science">15-151: Mathematical Foundations for Computer Science</a>.</p> 
        <p className="text-lg">Otherwise, I'm also on the varsity swim team at CMU, and have been swimming competitively for most of my life. With the rest of my time, I play chess, League of Legends, and try to solve Rubik's Cubes kinda fast (current best: 15.04).
        </p>
        </div>
      </section>
    );
  };
  
  export default AboutMe;