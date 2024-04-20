let obj = [
    "Motivated and eager student with a strong desire to apply academic knowledge to real-world situations. Seeking opportunities to gain hands-on experience, develop valuable skills, and contribute to projects within a dynamic learning environment. Committed to continuous learning and personal growth while making meaningful contributions to organizational goals",
    "Enthusiastic and driven student excited to bridge academic learning with practical experience. Pursuing opportunities to cultivate skills, tackle challenges, and thrive in a collaborative setting. Committed to embracing new perspectives, refining abilities, and achieving both personal and organizational objectives.",
    "Aspiring student eager to translate classroom learning into tangible results. Searching for avenues to enhance skills, broaden horizons, and engage in meaningful projects. Dedicated to fostering innovation, embracing challenges, and contributing positively to team dynamics.",
    "Passionate student with a hunger for real-world application of academic concepts. Seeking avenues to sharpen skills, expand knowledge, and actively contribute to impactful projects. Committed to continuous improvement, collaborative problem-solving, and driving meaningful outcomes.",
    "Driven and motivated student inspired by the prospect of hands-on learning experiences. Actively pursuing opportunities to develop skills, gain insights, and contribute effectively within a dynamic environment. Dedicated to personal growth, teamwork, and achieving shared objectives.",
    "Curious and ambitious student eager to bridge the gap between theory and practice. Seeking immersive experiences to refine skills, explore interests, and make meaningful contributions. Committed to embracing challenges, embracing feedback, and striving for excellence in every endeavor.",
    "Aspiring student with a thirst for knowledge and a passion for practical application. Actively seeking opportunities to learn, grow, and contribute within a collaborative setting. Dedicated to continuous improvement, creative problem-solving, and driving positive impact.",
    "Proactive and enthusiastic student driven by the desire to learn and grow. Actively pursuing avenues to gain hands-on experience, develop skills, and contribute to meaningful projects. Committed to adaptability, resilience, and continuous self-improvement.",
    "Eager and ambitious student excited about applying academic knowledge in real-world contexts. Seeking opportunities to challenge myself, develop new skills, and make valuable contributions. Committed to collaboration, creativity, and lifelong learning.",
    "Motivated student passionate about turning academic curiosity into practical achievements. Actively seeking opportunities to gain experience, refine skills, and contribute to meaningful projects. Committed to embracing challenges, seeking feedback, and fostering a culture of growth.",
    "Dynamic and goal-oriented student driven by a hunger for learning and growth. Actively pursuing opportunities to gain hands-on experience, expand skill sets, and contribute effectively within a supportive environment. Dedicated to personal development, teamwork, and achieving shared goals."
];
const oneObj = () => {
    let randNum = Math.floor(Math.random() * 10);
    return obj[randNum];
};

module.exports = oneObj;