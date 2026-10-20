# Cloud Computing Security — open course site

Course website for *Cloud Computing Security: Protecting Data, Infrastructure, and Applications in the Cloud*
(Ts. Dr. Mohd Zamri Osman, Faculty of Computing, Universiti Teknologi Malaysia).

## Files
| File | What it is |
|---|---|
| `index.html` | The whole course: 11 parts, lessons, 211 figures, quizzes, search, video players |
| `course-config.js` | **The file you edit**: YouTube links for each page, and the quiz rules |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Publish with GitHub Pages
1. Upload the three files to the root of the repository (Add file → Upload files → Commit changes).
2. Go to **Settings → Pages**. Under *Build and deployment*, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
3. After a minute or two the site is live at `https://<your-username>.github.io/<repository-name>/`.

## Add a video to a section
1. Open `course-config.js` on GitHub and click the pencil (Edit) icon.
2. Find the section's line, for example `"part1-a": "",   // 1.1 Key Cloud Computing Definitions`.
3. Paste the YouTube link between the quotes: `"part1-a": "https://youtu.be/VIDEO_ID",`
4. Click **Commit changes**. The video player appears on that page about a minute later.

Keys: `part3` is the Part 3 overview page; `part3-a`, `part3-b`, … are its sub-sections, in order.
A title, a start time (`?t=90` in the link) or several videos per page are also supported (see the notes at the top of the file).
Videos play inside the page through YouTube's privacy-enhanced player. Unlisted YouTube videos work; private ones do not.

## Quizzes and locking
- Every sub-section ends with a 5-question quiz. Passing (4 of 5 by default) unlocks the next section.
- Change `lockSections` to `false` to keep quizzes as practice only, or change `passMark`.
- Learners' progress is saved in their own browser, so it does not carry over to another device or browser.
- Instructors: open the site with `?instructor` added (e.g. `https://<user>.github.io/<repo>/?instructor`) to see every section unlocked.
