# Find and Replace

This is a simple Angular-based application that allows users to find and replace specific words or phrases within a block of text. The tool provides functionalities such as highlighting matches, replacing the next occurrence, and replacing all occurrences.

---

## Features

1. **Find Matches**: Highlight specific words or phrases in a text.
2. **Replace Next**: Replace the next occurrence of the search term with a given replacement.
3. **Replace All**: Replace all occurrences of the search term with the replacement.
4. **Highlight Matches**: Dynamically highlights all matches using a visual indicator.
5. **Responsive UI**: User-friendly interface designed for various screen sizes.

---

## Demo

A demo is available at [GitHub Pages or your hosting URL](#).

---

## Installation

1. Clone the repository:
   ```bash
   gh repo clone SreekanthReddyBandi/FindAndReplace
   ```
2. Navigate to the project directory:
   ```bash
   cd FindAndReplace
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   ng serve
   ```
5. Open the application in your browser at `http://localhost:4200`.

---

## Usage

1. Enter or paste the text into the main text area.
2. Specify the word or phrase to find in the **Find** input field.
3. Optionally, provide a replacement word or phrase in the **Replace** input field.
4. Use the following buttons:
  - **Find**: Highlights all occurrences of the search term.
  - **Replace Next**: Replaces the next occurrence of the search term.
  - **Replace All**: Replaces all occurrences of the search term.
5. View the highlighted matches and replacements in the display area.

---

## Project Structure

- **src/app/app.component.html**: Contains the UI layout for the Application.
- **src/app/app.component.ts**: Implements the logic for finding, replacing, and highlighting text.
- **src/app/app.component.css**: Contains styles for the UI.

---

## Assumptions

1. The search operation is case-sensitive.
2. Special characters in the search term are escaped to avoid unintended behavior.
3. The text is displayed in a read-only format, with changes made using buttons.

---

## Known Issues and Future Enhancements

### Known Issues
- Highlighting may not work correctly for overlapping matches.

### Future Enhancements
- Add an option for case-insensitive search.
- Allow users to toggle between textarea and formatted text views.
- Improve performance for large text inputs.

---

## Technologies Used

- **Angular**: Frontend framework.
- **TypeScript**: Programming language.
- **HTML**: Markup language.
- **CSS**: Styling.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

---

## Contact

For questions or suggestions, feel free to reach out:
- **GitHub**: [Your GitHub Profile](https://github.com/SreekanthReddyBandi)
- **Email**: sreekanth.bravemount@gmail.com

