let bio = [
    "Passionate and motivated individual poised to embark on a journey of exploration and growth. Eager to immerse oneself in new challenges, learn from experiences, and contribute fresh perspectives to any endeavor.",
    "Energetic and driven professional with a thirst for learning and a dedication to personal and professional development. Excited to apply acquired knowledge and skills in real-world settings, while remaining open to continuous learning and growth opportunities.",
    "Ambitious and proactive newcomer eager to dive into the world of possibilities. With a hunger for knowledge and a passion for innovation, poised to thrive in dynamic environments and seize every opportunity for growth.",
    "Dynamic and curious mind equipped with a thirst for knowledge and a hunger for new experiences. Dedicated to expanding horizons, honing skills, and embracing challenges with a spirit of optimism and determination.",
    "Resourceful and adaptable professional with a relentless drive for excellence and a commitment to lifelong learning. Ready to leverage past experiences, embrace new challenges, and contribute effectively to organizational success.",
    "Proactive and ambitious professional with a passion for personal and professional development. Eager to contribute value, embrace challenges, and continuously evolve in a fast-paced and dynamic work environment.",
    "Driven by a relentless pursuit of excellence, fueled by a passion for growth and innovation. Ready to tackle challenges head-on, adapt to change, and thrive in environments that foster creativity and continuous improvement.",
    "An enterprising individual with an insatiable curiosity and a hunger for success. Committed to pushing boundaries, seizing opportunities, and evolving alongside industry trends to deliver impactful results.",
    "A vibrant newcomer eager to immerse oneself in the tapestry of learning and discovery. With a boundless enthusiasm for exploration and a determination to carve out one's path, ready to embrace challenges and cultivate a future rich in possibility.",
    "Eager newcomer with a thirst for knowledge and a hunger for growth. Ready to explore, learn, and make a mark on the world."
]

const oneBio = () => {
    let randNum = Math.floor(Math.random() * 10);
    return bio[randNum];
};

module.exports = oneBio;