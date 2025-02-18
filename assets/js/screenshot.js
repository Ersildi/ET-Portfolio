// const puppeteer = require("puppeteer");

// (async () => {
//   const urls = [
//     "https://et-ductcleaning.netlify.app/",
//     "https://et-reminder.netlify.app/",
//     "https://et-paga.netlify.app/",
//     "https://ersilditopciucv.netlify.app/",
//     // Add more URLs as needed
//   ];

//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   for (const url of urls) {
//     await page.goto(url);
//     await page.screenshot({
//       path: `${url.substring(url.lastIndexOf("/") + 1)}.png`,
//     });
//   }

//   await browser.close();
// })();

// // JavaScript code to load screenshots dynamically
// document.addEventListener("DOMContentLoaded", async () => {
//   const screenshotGallery = document.getElementById("screenshotGallery");
//   const imageNames = [
//     "ductcleaning.png",
//     "reminder.png",
//     "paga.png",
//     "ersilditopciucv.png",
//   ]; // Replace with your screenshot filenames

//   for (const imageName of imageNames) {
//     const img = document.createElement("img");
//     img.src = `screenshots/${imageName}`; // Path to your screenshots directory
//     img.alt = "Portfolio Screenshot";
//     screenshotGallery.appendChild(img);
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    "https://et-ductcleaning.netlify.app/",
    "https://et-reminder.netlify.app/",
    "https://et-paga.netlify.app/",
    "https://ersilditopciucv.netlify.app/"
  ];

  projects.forEach((project, index) => {
    const iframe = document.createElement("iframe");
    iframe.src = project;
    iframe.style.width = "100%";
    iframe.style.height = "500px";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.onload = function () {
      html2canvas(iframe.contentWindow.document.body).then((canvas) => {
        const img = document.createElement("img");
        img.src = canvas.toDataURL("image/png");
        img.style.width = "100%";
        img.style.height = "auto";
        const snapshotContainer = document.getElementById(`project-snapshot-${index}`);
        if (snapshotContainer) {
          snapshotContainer.appendChild(img);
        } else {
          console.error(`Element with id project-snapshot-${index} not found`);
        }
        document.body.removeChild(iframe);
      }).catch((error) => {
        console.error("Error capturing screenshot:", error);
      });
    };

    iframe.onerror = function () {
      console.error(`Failed to load iframe for project: ${project}`);
    };
  });
});