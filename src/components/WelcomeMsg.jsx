export const WelcomeMsg = () => {


   const phrases = [
  "Let's see what you've been listening to.",
  "Let's see what you've been up to.",
  "Let's take a look at your taste.",
  "Let's see what you've been cooking.",
  "Time to expose your music taste.",
  "Your listening, visualized.",
  "A look into your listening habits.",
  "Let's see what you've been vibing to.",
  "Here's what your music says about you.",
  "Ready to see your music stats?",
  "Let's dive into your listening habits.",
  "Your music, at a glance.",
  "Let's see what's been playing lately."
];

const picker = Math.floor(Math.random()* phrases.length)


  return (
    <p className="welcome-msg">{phrases[picker]}</p>
  )
}
