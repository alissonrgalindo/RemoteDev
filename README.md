# Job Scraper

This is a simple job scraper script written in JavaScript using Node.js. It fetches job listings from three different sources: WeWorkRemotely, RemoteOK, and WorkingNomads. The script uses Puppeteer for web scraping and node-fetch for making HTTP requests to APIs.

## Dependencies

- Puppeteer: A Node.js library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.
- Node-fetch: A light-weight module that brings window.fetch to Node.js.

## How it works

The script consists of four main functions:

1. `getJobListings(page)`: This function scrapes job listings from a given page. It uses Puppeteer's `page.evaluate()` method to extract job details from the page's DOM. It returns an array of job objects, each containing the job title, company name, location, and URL.

2. `getRemoteOkJobs()`: This function fetches job listings from the RemoteOK API. It returns an array of job objects, each containing the job title, company name, location, and URL.

3. `getWorkingNomadsJobs()`: This function fetches job listings from the WorkingNomads API. It returns an array of job objects, each containing the job title, company name, location, and URL.

4. The self-invoking async function at the end of the script orchestrates the entire process. It launches a new browser instance using Puppeteer, navigates to the WeWorkRemotely website, and calls the `getJobListings(page)` function to scrape job listings. It then calls `getRemoteOkJobs()` and `getWorkingNomadsJobs()` to fetch job listings from the respective APIs. Finally, it combines all the job listings into a single array and logs it to the console.

## Error Handling

If an error occurs during the scraping process, the error will be logged to the console.

## How to Run

To run this script, you need to have Node.js installed on your machine. Once you have Node.js installed, you can run the script using the following command:

```bash
node job_scraper.js
```

This will print the combined job listings from all three sources to the console.

## Future Improvements

- Save the job listings to a file or a database.
- Add more sources to scrape job listings from.
- Improve error handling to handle specific errors more gracefully.
- Add a scheduling mechanism to run the script at regular intervals.
