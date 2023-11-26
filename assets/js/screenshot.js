const puppeteer = require("puppeteer");

(async () => {
  const urls = [
    "https://et-ductcleaning.netlify.app/",
    "https://et-reminder.netlify.app/",
    "https://et-paga.netlify.app/",
    "https://ersilditopciucv.netlify.app/",
    // Add more URLs as needed
  ];

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  for (const url of urls) {
    await page.goto(url);
    await page.screenshot({
      path: `${url.substring(url.lastIndexOf("/") + 1)}.png`,
    });
  }

  await browser.close();
})();

// JavaScript code to load screenshots dynamically
document.addEventListener("DOMContentLoaded", async () => {
  const screenshotGallery = document.getElementById("screenshotGallery");
  const imageNames = [
    "ductcleaning.png",
    "reminder.png",
    "paga.png",
    "ersilditopciucv.png",
  ]; // Replace with your screenshot filenames

  for (const imageName of imageNames) {
    const img = document.createElement("img");
    img.src = `screenshots/${imageName}`; // Path to your screenshots directory
    img.alt = "Portfolio Screenshot";
    screenshotGallery.appendChild(img);
  }
});
