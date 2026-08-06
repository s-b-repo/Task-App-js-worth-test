# To-Do List App

This is a simple web-based To-Do List application that allows you to keep track of your tasks. The app is designed to be easy to use and offers the following functionality:

## How it Works

1. **Open the App**: Open the To-Do List App in a web browser by accessing the provided URL.

2. **Task Input**: On the app's main page, you'll see a "To-Do List" section with an input box and an "Add" button.

3. **Add a Task**: To add a new task, type your task into the input box and click the "Add" button.

4. **Task List**: Your added task will appear in the list below with a close (X) button to its right.

5. **Task Completion**: You can mark a task as completed by clicking on it. The completed task will be displayed with a line-through text style.

6. **Task Deletion**: To delete a task, simply click the close (X) button next to it. The task will be removed from the list.

7. **Auto-Save**: Your tasks are automatically saved in the browser's `localStorage`. This means you won't lose your tasks even if you refresh the page or close the browser.

## Getting Started

To get started with this To-Do List App, simply follow the instructions above. No additional setup or installation is required.

## Contributing

If you'd like to contribute to the development of this project, please feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Running locally

No build step — it's plain HTML/CSS/JS. Either:

- open `index.html` in a browser directly, or
- serve the folder: `python3 -m http.server` then visit `http://localhost:8000`.

## Notes

- Tasks are stored in `localStorage` under the key `todo-list` as a JSON
  array of `{text, checked}`. Older versions of this app persisted raw
  `innerHTML`, which meant any HTML in a task label would be re-executed
  on reload (stored-XSS). If you're upgrading and see a stale entry from
  that older format, clear `localStorage` once.
- The font-family is `Poppins`; if the Google Fonts stylesheet isn't
  available it falls back to `sans-serif`.

## Issues

Please file bugs at [github.com/s-b-repo/Task-App-js-worth-test/issues](https://github.com/s-b-repo/Task-App-js-worth-test/issues).
