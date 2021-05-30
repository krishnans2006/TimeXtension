# TimeXtension

## Inspiration
Our inspiration for TimeXtension was how distracting the web can be. You start by studying for an exam and end up browsing Twitter for over 2 hours! That all ends, with TimeXtension!

## What it does
TimeXtension is a set of 3 browser extensions, written for Chrome, Edge, and Firefox, which manages all the sites you visit and categorizes them as productive, unproductive, or unknown. For example, being on Google Docs is productive, while being on Instagram is not, and being on YouTube is unknown (it can be used for both productive and unproductive reasons). Finally, it displays this data in a nice pie chart visible at the click of an icon!

## How we built it
The extensions were built with a service worker to check the current tab the user is on every minute. Then, this was put through a sorter to give it a category, and was saved to the user's sync account (For example your Google Account on Chrome). Finally, Chart.js was used to display this data in a visually-appealing manner whenever you click on the icon of the extension.

## Challenges we ran into
All the permissions for the extensions were very weird, and it was extremely difficult to figure out why something didn't work when it needed a permission.

## Accomplishments that we're proud of
We are super proud of completing the entire project within a day and a half, including three separate extensions for different browsers. We are also extremely proud of our sorting algorithm, which categorizes domains as productive, unproductive, or unknown.

## What we learned
None of us has prior experience with coding an extension, so the whole project was a first-attempt at making one. Each of us took on one browser platform to code an extension for, and learned the whole thing from scratch.

## What's next for TimeXtension
We are planning on differentiating the dates and times for the domains, which would make it easy to filter the pie chart based on time constraints (For example: Past Hour, Past Day, Past Week, Past Month). We are also hoping to publish this extension on the Chrome Web Store and other web stores for other browsers.