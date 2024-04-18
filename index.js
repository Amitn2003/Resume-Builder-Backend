const express = require("express")
const puppeteer = require("puppeteer")
const head = require("./getHead")
const cors = require("cors")
const fs = require("fs")
const app = express()
const PORT = 8000

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


const handleTechSkills = (tech) => {

}


app.get("/generate", async (req, res) => {
    console.log(req.query)
    // console.log(req.query.name, " name")
    // console.log(req.query.phone, " phone")
    // console.log(req.query.address, " address")
    // console.log(req.query.email, " email")
    // console.log(req.query.bio, " bio")
    // console.log(req.query.obj, " obj")


    let name = req.query.name==""? "No Name": req.query.name.trim()
    name =  name.charAt(0).toUpperCase()
    + name.slice(1)
    let phone = req.query.phone==""? "9876543210": req.query.phone
    let address = req.query.address==""? "Earth": req.query.address
    let email = req.query.email==""? "example@gmail.com": req.query.email
    let bio = req.query.bio==""? "I don't know...": req.query.bio
    let obj = req.query.obj==""? "No career objective provided...": req.query.obj
    console.log(name, phone, address, email, bio, obj)
    



    let techSkillOptions = ["C", "C++", "Java", "Python", "SQL", "HTML", "CSS", "MS Office"]
    let softSkillOptions = ["Communication", "Problem SOlving", "Team Work", "Adaptibility", "Creativity", "Emotional Intelligent", "Decision Making"]
    let langOptions = ["Bengali", "Hindi", "English"];
    let hobbiesOptions = ["Dance", "Watching Movies & WebSeries", "Travelling", "Photography"]
    
    //tech skills into list
    let tech = req.query.tech.split(",");
    let atleastOneTech = false;
    tech.forEach((val, index) => {
        if (val == 'true') {
            atleastOneTech = true;
        }
        // console.log(techSkillOptions[index], val)
    })
    if (atleastOneTech) {
        console.log(tech, "Tech Skills are there")
    }


    //soft skills into list
    let soft = req.query.soft.split(",");
    let atleastOneSoft = false;
    soft.forEach((val, index) => {
        if (val == 'true') {
            atleastOneSoft = true;
        }
        // console.log(softSkillOptions[index], val)
    })
    if (atleastOneSoft) {
        console.log(soft, "SOFT SKILLS ARE THERe")
    }



    //languages into list
    let lang = req.query.lang.split(",");
    let atleastOneLang = false;
    lang.forEach((val, index) => {
        if (val == 'true') {
            atleastOneLang = true;
        }
        // console.log(langOptions[index], val)
    })
    if (atleastOneLang) {
        console.log(lang, "Languages ARE THERe")
    }





    //hobbies into list
    let hobbies = req.query.hobbies.split(",");
    let atleastOneHobbie = false;
    hobbies.forEach((val, index) => {
        if (val == 'true') {
            atleastOneHobbie = true;
        }
        // console.log(hobbiesOptions[index], val)
    })
    if (atleastOneHobbie) {
        console.log(hobbies, "Hobbies ARE THERe")
    }














    try {
        const browser = await puppeteer.launch()
        const page = await browser.newPage();


        let htmlHeader = `
<body>
    <header class="flex justify-between p-4 m-1 ">
        <div class="grow w-80 m-2">
            <span class="text-4xl ">Amit Naskar</span>
            <!-- (req.query.name)?req.query.name:"No Name" -->
            <br>
            <span>
                BCA graduate with a fervent coding passion and a thirst for learning, aspiring to excel in software
                development by applying programming skills and
                embracing continuous growth and innovation
            </span>
        </div>
        <div class="align-middle text-center p-1">
            <div class="text-sm">31/3 Bangal Para 1st bylane
                <br>
                Howrah: 711104
            </div>
            <div class="font-semibold">9876543210</div>
            <div class="font-semibold">example@email.com</div>
        </div>
    </header>
    ` 
    let htmlMain = `
    <main class="m-6 flex justify-between">
        <div class="m-3 ">
            <div class="mb-5">
                <h3 class="text-blue-500  font-semibold tracking-wide">Career Objective</h3>
                <p>
                    Seeking a challenging position in software development where I can
                    utilize my skills and knowledge to contribute to innovative projects while continuously learning and
                    growing in the field.
                </p>
            </div>
            <div class="mb-5">
                <h3 class="text-blue-500  font-semibold tracking-wide">
                    Education
                </h3>
                <div>
                    <h5>
                        <span class="font-semibold">
                            Seacom Management College
                        </span>, Howrah - <i>BCA</i>
                    </h5>
                    <span class="text-[12px] h-fit leading-3">2022 - Present</span>
                    <p class="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, iusto!Molestiae, iusto!Molestiae, iusto!.</p>
                </div>
                <div>
                    <h5>
                        <span class="font-semibold">
                            SCH00OOOOOOOL Name
                        </span>, Location - <i>Arts/Commerce/Science</i>
                    </h5>
                    <span class="text-[12px] h-fit leading-3">From - Upto</span>
                    <p class="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel culpa omnis numquam consectetur maiores..</p>
                </div>
            </div>
    `
    let htmlHobbie = `
            <div class="mb-5">
                <h3 class="text-blue-500  font-semibold tracking-wide">Hobbies & Interests</h3>
                <div>
                    <h5 class="font-semibold">Dance</h5>
                    <p class="opacity-70">Passionate about dancing, particularly choreography, reflecting my dedication and creativity in this expressive art form.
                    </p>
                </div>
                <div>
                    <h5 class="font-semibold">Traveling</h5>
                    <p class="opacity-70">Enthusiastic traveler, eager to explore diverse cultures and destinations, seeking adventure and new experiences
                    </p>
                </div>
            </div>
        </div>
        `
    let htmlSkills = `
        <div class="min-w-44"> 
            <!-- Right -->
            <div class="mb-5">
                <h5 class="text-blue-500  font-semibold tracking-wide">Technical Skills</h5>
                <ul>
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>MS Office</li>
                </ul>
            </div>
            <div class="mb-5">
                <h5 class="text-blue-500  font-semibold tracking-wide">Soft Skills</h5>
                <ul>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Team Work</li>
                    <li>Adaptibility</li>
                    <li>Creativity</li>
                    <li>Emotional Intelligent</li>
                    <li>Decision Making</li>
                </ul>
            </div>
            <div class="mb-5">
                <h5 class="text-blue-500  font-semibold tracking-wide">Languages</h5>
                <ul>
                    <li>Bengali</li>
                    <li>Hindi</li>
                    <li>English</li>
                </ul>
            </div>
        </div>

    </main>
</body>

</html>
        `
        let htmlContent = head + htmlHeader + htmlMain + htmlHobbie + htmlSkills;


        await page.setContent(htmlContent);
        const pdfBuffer = await page.pdf({ format: 'A4' });

        await browser.close();

        // Set response headers for PDF
        res.setHeader('Content-Type', 'application/pdf');
        let filename = `${Math.floor(Math.random() * 999999)}_sample.pdf`
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`);

        // Send the PDF buffer as the response
        fs.writeFileSync(`./saved/${filename}`, pdfBuffer,)
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