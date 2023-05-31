import puppeteer from "puppeteer";
import fetch from "node-fetch";

async function getJobListings(page) {
  return await page.evaluate(() => {
    const jobs = [];
    const jobList = document.querySelectorAll(".jobs ul li a");
    for (let job of jobList) {
      const titleElement = job.querySelector(".title");
      const companyElement = job.querySelector(".company");
      const locationElement = job.querySelector(".region");

      if (titleElement && companyElement && locationElement) {
        const title = titleElement.innerText;
        const company = companyElement.innerText;
        const location = locationElement.innerText;
        const url = job.href;
        jobs.push({ title, company, location, url });
      }
    }
    return jobs;
  });
}

async function getRemoteOkJobs() {
  const response = await fetch("https://remoteok.com/api");
  const data = await response.json();
  return data.map((job) => ({
    title: job.position,
    company: job.company,
    location: job.location || "Remote",
    url: job.url,
  }));
}

async function getWorkingNomadsJobs() {
  const response = await fetch(
    "https://www.workingnomads.com/api/exposed_jobs/"
  );
  const data = await response.json();
  return data.map((job) => ({
    title: job.title,
    company: job.company_name,
    location: job.location || "Remote",
    url: `https://www.workingnomads.com/jobs/${job.id}`,
  }));
}

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(
      "https://weworkremotely.com/categories/remote-front-end-programming-jobs#job-listings",
      { waitUntil: "networkidle2" }
    );

    const jobs = await getJobListings(page);
    const remoteOkJobs = await getRemoteOkJobs();
    const workingNomadsJobs = await getWorkingNomadsJobs();

    const combinedJobs = [...jobs, ...remoteOkJobs, ...workingNomadsJobs];

    console.log(combinedJobs);

    await browser.close();
  } catch (error) {
    console.error("Error occurred while scraping:", error);
  }
})();
