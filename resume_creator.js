import puppeteer from 'puppeteer';

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set the HTML content to be converted to PDF
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <!-- <link rel="stylesheet" href="resume.css"> -->
      <link rel="stylesheet" href="./components/output.css"> 
      
  </head>
  
  <body>
      <header class="flex justify-between p-4 m-1 ">
          <div class="grow w-80 m-2">
              <span class="text-4xl ">Amit Naskar</span>
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
                              SCH00OOOOL Name
                          </span>, Location - <i>Arts/Commerce/Science</i>
                      </h5>
                      <span class="text-[12px] h-fit leading-3">From - Upto</span>
                      <p class="opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vel culpa omnis numquam consectetur maiores..</p>
                  </div>
              </div>
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
  `;
  
  // Set the HTML content and generate PDF
  await page.setContent(htmlContent);
  await page.pdf({ path: 'gpt-output.pdf', format: 'A4' });

  await browser.close();
}

generatePDF();
