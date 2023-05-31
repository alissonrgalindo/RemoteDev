# Job Scraper

This is an enhanced job scraper script written in JavaScript using Node.js. It fetches job listings from three different sources: WeWorkRemotely, RemoteOK, and WorkingNomads. The script uses Puppeteer for web scraping and node-fetch for making HTTP requests to APIs.

## Dependencies

- Puppeteer: A Node.js library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.
- Node-fetch: A light-weight module that brings window.fetch to Node.js.
- fs: Node.js built-in module for file system operations.

## How it works

The script consists of several functions:

1. `getJobListings(page)`: This function scrapes job listings from a given page. It uses Puppeteer's `page.evaluate()` method to extract job details from the page's DOM. It returns an array of job objects, each containing the job title, company name, location, and URL.

2. `getRemoteOkJobs()`: This function fetches job listings from the RemoteOK API. It returns an array of job objects, each containing the job title, company name, location, and URL.

3. `getWorkingNomadsJobs()`: This function fetches job listings from the WorkingNomads API. It returns an array of job objects, each containing the job title, company name, location, and URL.

4. `withRetry(fn, retries)`: This function is a retry mechanism that attempts to execute a function and if it fails, retries it a specified number of times.

5. The self-invoking async function at the end of the script orchestrates the entire process. It launches a new browser instance using Puppeteer, navigates to the WeWorkRemotely website, and calls the `getJobListings(page)` function to scrape job listings. It then concurrently calls `getRemoteOkJobs()` and `getWorkingNomadsJobs()` to fetch job listings from the respective APIs using `Promise.all`. Finally, it combines all the job listings into a single array and saves it to a JSON file.

## Error Handling

The script includes granular error handling for each API call and Puppeteer operation. If an error occurs during the scraping process, the error will be logged to the console. The script also includes a retry mechanism for API calls and Puppeteer operations to handle temporary network issues or API downtime.

## Data Validation

The script includes data validation to ensure the scraped data is in the expected format. It checks that the job title, company name, location, and URL are all strings and not empty.

## How to Run

To run this script, you need to have Node.js installed on your machine. Once you have Node.js installed, you can run the script using the following command:

```bash
node index.js
```

This will scrape the job listings from all three sources, combine them, and save them to a file named `jobs.json`.

## Future Improvements

- Add more sources to scrape job listings from.
- Add a scheduling mechanism to run the script at regular intervals.
- Improve error handling to handle specific errors more gracefully.
- Add a notification system to alert when new job listings are found.
- Save the job listings to a database for easier querying and analysis.
- Add tests to ensure the code is working as expected.
