const express = require("express")
const puppeteer = require("puppeteer")
const head = require("./getHead")
const oneObj = require("./getCareerObj")
const oneBio = require("./getBioObj")
const cors = require("cors")
const fs = require("fs")
const { stringify } = require("querystring")
const app = express()
const PORT = 3000
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose");
require('dotenv').config();
const dbPass = process.env.DB_PASSWORD;
const uri = `mongodb+srv://amitn1909:${dbPass}@cluster0.r5gigva.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(uri, {
    bufferCommands: false, // Disable buffering of commands
    // useNewUrlParser: true,
    // useUnifiedTopology: true
});
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);



var Schema = mongoose.Schema
var logSchema = new Schema({
    name: {
        type: String, default: 'anonymous'
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    bio: {
        type: String,
    },
    obj: {
        type: String,
    },
    address: {
        type: String,
    },
    district: {
        type: String,
    },
    pincode: {
        type: String,
    },
    tech: {
        type: String,
    },
    soft: {
        type: String,
    },
    lang: {
        type: String,
    },
    hobbies: {
        type: String,
    },
    seacom: {
        type: String,
    },
    edu: {
        type: String,
    },
    edu2: {
        type: String,
    },
    course2: {
        type: String,
    },
    clgStart2: {
        type: String,
    },
    clgEnd2: {
        type: String,
    },
    board2: {
        type: String,
    },
    course: {
        type: String,
    },
    clgStart: {
        type: String,
    },
    clgEnd: {
        type: String,
    },
    board: {
        type: String,
    },
    stream: {
        type: String,
    },

});
var logModel = mongoose.model('Log', logSchema);






















app.use(cors())


app.get("/", (req, res) => {

    console.log(req.params, "Params")
    console.log(req.query, " query")
    console.log(req.query.name, " name")
    console.log(req.query.phone, " phone")
    console.log(req.query.address, " address")
    console.log(req.query.email, " email")
    console.log(req.query.bio, " bio")
    console.log(req.query.obj, " obj")
    // console.log(req.body, " body")
    res.send("HELLO World from resume builder")
})





app.get("/generate", async (req, res) => {
    console.log(req.query)

    let name = (req.query.name == "" || req.query.name == undefined) ? "No Name" : req.query.name.trim()
    name = name.charAt(0).toUpperCase() + name.slice(1)
    let phone = req.query.phone == "" ? "9876543210" : req.query.phone
    let address = req.query.address == "" ? "Earth" : req.query.address
    let district = req.query.district == "" ? "Howrah" : req.query.district
    let pincode = req.query.pincode == "" ? "765 432" : req.query.pincode
    let seacom = req.query.seacom
    let edu = req.query.edu 
    let clgStart = req.query.clgStart == "" ? "1920" : req.query.clgStart
    let clgEnd = req.query.clgEnd == "" ? "Present" : req.query.clgEnd
    let course = req.query.course == "" ? "Course 1" : req.query.course
    let board = req.query.board == "" ? "Board 1" : req.query.board
    let stream = req.query.stream == "" ? "Arts/Commerce/Science Not Provided" : req.query.stream
    let board2 = req.query.board2 == "" ? "Board 2" : req.query.board2
    let course2 = req.query.course == "" ? "Course 2" : req.query.course
    let edu2 = req.query.edu2
    let clgStart2 = req.query.clgStart == "" ? "1920" : req.query.clgStart2
    let clgEnd2 = req.query.clgEnd == "" ? "Present" : req.query.clgEnd2
    let email = req.query.email == "" ? "example@gmail.com" : req.query.email
    let bio = (req.query.bio == "" || req.query.bio == undefined) ? oneBio() : req.query.bio
    let obj = (req.query.obj == "" || req.query.obj == undefined) ? oneObj() : req.query.obj
    


    let techSkillOptions = ["C", "C++", "Java", "Python", "SQL", "MS Office", "HTML", "CSS", "JavaScript", "React JS", "Node JS", "MongoDB", "Cloud Computing"]
    let softSkillOptions = ["Communication", "Problem Solving", "Team Work", "Adaptibility", "Creativity", "Emotional Intelligent", "Decision Making", "Time Management", "Leadership", "Conflict Resolution", "Critical Thinking", "Attention to Detail", "Resilience", "Networking", "Interpersonal Skills"]
    let langOptions = ["Bengali", "Hindi", "English"];
    let hobbiesOptions = ["Dance", "Watching Movies & WebSeries", "Travelling", "Photography", "Reading", "Cooking", "Gardening", "Exercising", "Painting", "Playing Musical Instruments", " Hiking/Outdoor Activities", "DIY Crafts", "Gaming", "Fashion"]
    let hobbiesOptionsDesc = [
        "Enthusiastic traveler, eager to explore diverse cultures and destinations, seeking adventure and new experiences...", 
        "I enjoy immersing myself in the diverse narratives and captivating visuals of films and web series, finding inspiration and relaxation in the art of storytelling.", "Exploring new places and cultures is my passion, enriching my life with unforgettable experiences and connections.", "Capturing moments and scenes through the lens is my creative outlet, allowing me to preserve memories and express myself artistically.", "Immerse yourself in the boundless realms of literature, where every page unveils new adventures, perspectives, and knowledge. Reading is my gateway to exploration, enlightenment, and endless possibilities.", "Transforming ingredients into culinary masterpieces, I find joy and fulfillment in the kitchen. Experimenting with flavors, textures, and techniques, cooking allows me to express my creativity while nourishing both body and soul.", 
        "In the tranquil embrace of nature, I cultivate vibrant gardens teeming with life and color. Gardening is my sanctuary, where I nurture plants, cultivate beauty, and find solace in the rhythm of growth and renewal.",
        "Embrace the exhilarating journey of physical fitness, where each workout is a step towards strength, vitality, and well-being. Through exercise, I challenge my limits, energize my spirit, and embrace a lifestyle of vitality and resilience.","With a brush in hand and a world of colors at my disposal, I embark on a journey of artistic expression. Painting allows me to translate emotions, dreams, and visions onto canvas, creating visual symphonies that resonate with the soul.",
        "Delve into the enchanting world of melodies and rhythms, where each note is a brushstroke painting the canvas of sound. Playing musical instruments is my language of emotion, expression, and connection, weaving stories that transcend time and space.",
        "Venture into the great outdoors, where every trail beckons with the promise of adventure and discovery. Hiking and outdoor activities are my gateway to exploration, offering solace, serenity, and a profound connection with nature.",
        "Explore the realm of creativity and craftsmanship, where ordinary materials transform into extraordinary creations. Engaging in DIY crafts is my avenue for self-expression, innovation, and the joy of bringing imagination to life.",
        "Enter immersive worlds of fantasy and challenge, where every level conquered is a triumph of skill and strategy. Gaming is my portal to adventure, camaraderie, and the thrill of overcoming obstacles in virtual realms.",
        "Embracing style as a form of self-expression, I thrive in the realm of clothing innovation, celebrating diversity and individuality through every ensemble."
    ]

    let htmlTechSkills = ``;
    let htmlSoftSkills = ``;
    let htmlLangs = ``;
    let htmlHobbies = ``;
    let eduProvided = true;
    // let eduProvided2 = true;
    let eduHtml = ``;
    let eduHtml2 = ``;
    if (req.query.edu == "" && req.query.seacom != 'true' && req.query.edu2 == "") {
        eduProvided = false
    }

    //tech skills into list
    let atleastOneTech = false;
    let tech;
    try {

        tech = req.query.tech.split(",");
        tech.forEach((val, index) => {
            if (val == 'true') {
                atleastOneTech = true;
            }
        })
    }
    catch {
        console.log("No tech skills params received")
    }
    if (atleastOneTech) {
        // console.log(tech, "Tech Skills are there")
        htmlTechSkills = `<ul>`
        tech.forEach((val, index) => {
            if (val == 'true') {
                let temp = `<li> ${techSkillOptions[index]} </li>`
                htmlTechSkills += temp;
            }
        })
        htmlTechSkills += `
        </ul>`
        console.log(htmlTechSkills, " HTML TECH SKILLS")
    }



    //soft skills into list
    let atleastOneSoft = false;
    let soft;
    try {

        soft = req.query.soft.split(",");

        soft.forEach((val, index) => {
            if (val == 'true') {
                atleastOneSoft = true;
            }
            // console.log(softSkillOptions[index], val)
        })
    }
    catch {
        console.log("No Soft skill params recieved")
    }
    if (atleastOneSoft) {
        // console.log(soft, "SOFT SKILLS ARE THERe")
        htmlSoftSkills = `<ul>`
        soft.forEach((val, index) => {
            if (val == 'true') {
                let temp = `<li> ${softSkillOptions[index]} </li>`
                htmlSoftSkills += temp;
            }
        })
        htmlSoftSkills += `</ul>`
        console.log(htmlSoftSkills, " HTML Soft SKILLS")
    }



    //languages into list
    let atleastOneLang = false;
    let lang;
    try {

        lang = req.query.lang.split(",");
        lang.forEach((val, index) => {
            if (val == 'true') {
                atleastOneLang = true;
            }
            // console.log(langOptions[index], val)
        })
    }
    catch {
        console.log("No Language skills params received")
    }
    if (atleastOneLang) {
        // console.log(lang, "Languages ARE THERe")
        htmlLangs = `<ul>`
        lang.forEach((val, index) => {
            if (val == 'true') {
                let temp = `<li> ${langOptions[index]} </li>`
                htmlLangs += temp;
            }
        })
        htmlLangs += `</ul>`
        console.log(htmlLangs, " HTML Language SKILLS")
    }





    //hobbies into list
    let atleastOneHobbie = false;
    let hobbies;
    try {

        hobbies = req.query.hobbies.split(",");
        hobbies.forEach((val, index) => {
            if (val == 'true') {
                atleastOneHobbie = true;
            }
            // console.log(hobbiesOptions[index], val)
        })
    }
    catch {
        console.log("No hobbies param received")
    }
    if (atleastOneHobbie) {
        // console.log(hobbies, "Hobbies ARE THERe")
        htmlHobbies += `
        <div class="mb-5">
         <h3 class="text-blue-500  font-semibold tracking-wide">Hobbies & Interests</h3>
         
        `
        //     htmlHobbies+= `
        //         <h3 class="text-blue-500  font-semibold tracking-wide">Hobbies & Interests</h3>
        //         <div>
        //             <h5 class="font-semibold">Dance Default from HTML boiler Plate</h5>
        //             <p class="opacity-70">Passionate about dancing, particularly choreography, reflecting my dedication and creativity in this expressive art form.
        //             </p>
        //         </div>

        //         <!-- <div>${htmlHobbies}</div> -->                
        // `
        hobbies.forEach((val, index) => {
            if (val == 'true') {
                let temp = `<div>
                <h5 class="font-semibold">${hobbiesOptions[index]}</h5>
                <p class="opacity-70">${hobbiesOptionsDesc[index]}
                </p>
            </div>`
                htmlHobbies += temp;
            }
        })
        htmlHobbies += `   
        </div>
        `
        // console.log(htmlHobbies, " HTML Hobbies")
    }





    if (eduProvided) {
        eduHtml += `
        <div class="mb-5">
                <h3 class="text-blue-500  font-semibold tracking-wide">
                    Education
                </h3>
                `
        if (seacom == "true") {

            let temp = `
            <div>
            <h5>
            <span class="font-semibold">
            Seacom Management College
            </span>, Howrah - <i>BCA</i>
            </h5>
            <span class="text-[12px] h-fit leading-3">2022 - Present</span>
            <p class="opacity-70">A well known college! Studying BCA from here...</p>
            </div>
            `
            eduHtml += temp
        }
        if (edu != "") {
            eduHtml += `
            <div>
            <h5>
            <span class="font-semibold">
                ${edu}
            </span>, Location- ${course} -
            </h5>
            <span class="text-[12px] h-fit leading-3">${clgStart} - ${clgEnd}</span>
            <p class="opacity-70">The univercity or board is : ${board}</p>
            </div>
            `
        }
        if (edu2 != "") {
            eduHtml += `
            <div>
            <h5>
            <span class="font-semibold">
                ${edu2}
            </span>, Location - ${course2} - <i>${stream}</i>
            </h5>
            <span class="text-[12px] h-fit leading-3">${clgStart2} - ${clgEnd2 == "" ? "Present" : clgEnd2}</span>
            <p class="opacity-70">I completed ${stream} from ${board2} board</p>
            </div>
            `
        }
        eduHtml += `</div>`
    }



    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage();

        // Convert object to stringify

        console.log(JSON.stringify(req.query))



        var log1 = new logModel({
            name: req.query.name,
            email: req.query.email,
            phone: req.query.phone,
            bio: req.query.bio,
            obj: req.query.obj,
            address: req.query.address,
            district: req.query.district,
            pincode: req.query.pincode,
            tech: req.query.tech,
            soft: req.query.soft,
            lang: req.query.lang,
            hobbies: req.query.hobbies,
            seacom: req.query.seacom,
            edu: req.query.edu,
            edu2: req.query.edu2,
            course2: req.query.course2,
            clgStart2: req.query.clgStart2,
            clgEnd2: req.query.clgEnd2,
            board2: req.query.board2,
            course: req.query.course,
            clgStart: req.query.clgStart,
            clgEnd: req.query.clgEnd,
            board: req.query.board,
            stream: req.query.stream,
        });

        log1.save()



        let htmlHeader = `
<body>
    <header class="flex justify-between p-4 m-2 ">
        <div class="grow w-80 m-2">
            <span class="text-4xl ">${name}</span>
            <!-- (req.query.name)?req.query.name:"No Name" -->
            <br>
            <span> ${bio} </span>
        </div>
        <div class="align-middle text-center p-1">
            <div class="text-sm"><!--31/3 Bangal Para 1st bylane -->${address}
                <br>
                ${district}: ${pincode}
            </div>
            <div class="font-semibold">${phone}</div>
            <div class="font-semibold">${email}</div>
        </div>
    </header>
    `
        let htmlMain = `
    <main class="m-6 flex justify-between">
        <div class="m-3 ">
            <div class="mb-5">
                <h3 class="text-blue-500  font-semibold tracking-wide">Career Objective</h3>
                <p>
                    ${obj}
                </p>
            </div>
            <!-- div class="mb-5" -->
            ${eduHtml}  
            ${htmlHobbies}
            </div>
    `
        // let htmlHobbie = `
        //     <div class="mb-5">
        //         <h3 class="text-blue-500  font-semibold tracking-wide">Hobbies & Interests</h3>
        //         <div>
        //             <h5 class="font-semibold">Dance</h5>
        //             <p class="opacity-70">Passionate about dancing, particularly choreography, reflecting my dedication and creativity in this expressive art form.
        //             </p>
        //         </div>
        //         <div>
        //             <h5 class="font-semibold">Traveling</h5>
        //             <p class="opacity-70">Enthusiastic traveler, eager to explore diverse cultures and destinations, seeking adventure and new experiences
        //             </p>
        //         </div>
        //         <!-- <div>${htmlHobbies}</div> -->                
        //     </div>
        // </div>
        // `
        let htmlSkills = `
        <div class="min-w-44"> 
            <!-- Right -->
            `
        if (atleastOneTech) {
            htmlSkills += `
            <div class="mb-5">
                <h5 class="text-blue-500  font-semibold tracking-wide">Technical Skills</h5>
                
                ${htmlTechSkills}
            </div>`
        }
        if (atleastOneSoft) {
            htmlSkills += `<div class="mb-5">
            <h5 class="text-blue-500  font-semibold tracking-wide">Soft Skills</h5>
            
            ${htmlSoftSkills}
        </div>`
        }
        if (atleastOneLang) {
            htmlSkills += `<div class="mb-5">
            <h5 class="text-blue-500  font-semibold tracking-wide">Languages</h5>
            ${htmlLangs}
        </div>`
        }
        htmlSkills += `
        </div>

    </main>
</body>

</html>
        `
        let htmlContent = head + htmlHeader + htmlMain + htmlSkills;
        // console.log(htmlContent)

        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4' });

        await browser.close();

        // Set response headers for PDF
        res.setHeader('Content-Type', 'application/pdf');
        // let filename = `${Math.floor(Math.random() * 999999)}_sample.pdf`
        // res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

        // Send the PDF buffer as the response
        // fs.writeFileSync(`./saved/${filename}`, pdfBuffer,)

        res.send(pdfBuffer);
    }
    catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
})















app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}, http://localhost:${PORT}`)
})