import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [ FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  text: string = 'Hi Sreekanth Reddy,\n' +
    '\n' +
    'We are excited to share the next steps in our process. \n' +
    '\n' +
    '- As the first step of evaluation, we are sending an assignment which should not take more than 3-4 hours.\n' +
    '- You are required to finish the assignment within 48 hours of receiving it using angular as your framework\n' +
    '- Once you have finished, please send us the link to your GitHub repository with clear instructions on how to run the code.\n' +
    '- Also, host the code on some free hosting platform like Vercel or Netlify and send the link to the hosted application.\n' +
    '- Feel free to add any additional features or enhancements to the assignment as you see fit. There is an extra point for UI/UX of the assignment, so ensure you present the best code.\n' +
    'After we evaluate your completed assignment, we will let you know if you have progressed to the next stage which will be a technical interview of 1 hour.\n' +
    '\n' +
    'Assignment\n' +
    '\n' +
    'Design a UI based Find and Replace Tool\n' +
    'Create an angular app with a webpage that has a text input area where users can paste or type any text. Provide functionality to find a specific word or phrase and replace it with another word or phrase. Make any assumptions or improvisations as you see fit, and mention those in your project Readme.md file.\n' +
    '\n' +
    'We look forward to seeing your work!'; // Main text area content
  findText: string = ''; // Text to find
  replaceText: string = ''; // Text to replace with
  matchCount: number = 0; // Number of matches
  highlightedText: SafeHtml = ''; // Highlighted text for rendering
  currentIndex: number = 0; // Current position for Replace Next

  constructor(private sanitizer: DomSanitizer) {
    this.updateHighlightedText(); // Initial rendering
  }

  // Find matches and update the highlighted text
  find() {
    if (!this.findText) {
      this.matchCount = 0;
      this.updateHighlightedText();
      return;
    }
    const regex = new RegExp(this.escapeRegex(this.findText), 'g');
    this.matchCount = (this.text.match(regex) || []).length;
    this.currentIndex = 0;
    this.updateHighlightedText();
  }

  // Replace the next occurrence
  replaceNext() {
    if (!this.findText) return;
    const regex = new RegExp(this.escapeRegex(this.findText), 'g');
    const matches = [...this.text.matchAll(regex)];
    if (matches.length > 0 && this.currentIndex < matches.length) {
      const match = matches[this.currentIndex];
      const start = match.index!;
      const end = start + this.findText.length;

      this.text =
        this.text.substring(0, start) +
        this.replaceText +
        this.text.substring(end);

      this.currentIndex++;
      this.find(); // Update match count and highlighted text
    }
  }

  // Replace all occurrences
  replaceAll() {
    if (!this.findText) return;
    const regex = new RegExp(this.escapeRegex(this.findText), 'g');
    this.text = this.text.replace(regex, this.replaceText);
    this.find(); // Update match count and highlighted text
  }

  // Update the highlighted text for rendering
  updateHighlightedText() {
    if (!this.findText) {
      this.highlightedText = this.sanitizer.bypassSecurityTrustHtml(this.text);
      return;
    }
    const regex = new RegExp(this.escapeRegex(this.findText), 'g');
    const highlighted = this.text.replace(
      regex,
      `<span style="background-color: yellow; font-weight: bold; color: black">${this.findText}</span>`
    );
    this.highlightedText = this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }

  // Escape special characters in the search text
  escapeRegex(text: string): string {
    return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
}
