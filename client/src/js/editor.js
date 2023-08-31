import { fetchContentFromDatabase, saveContentToDatabase } from './database';
import { headerContent } from './header';

export default class TextEditor {
  constructor() {
    const localContent = localStorage.getItem('editorContent');

    // Check if CodeMirror is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#editorContainer'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // When the editor is ready, set the value to content from the database.
    // If not found in the database, use localStorage, and if none found, use the header content.
    fetchContentFromDatabase().then((data) => {
      console.info('Loaded content from database, injecting into editor');
      this.editor.setValue(data || localContent || headerContent);
    });

    this.editor.on('change', () => {
      localStorage.setItem('editorContent', this.editor.getValue());
    });

    // Save the content of the editor when it loses focus
    this.editor.on('blur', () => {
      console.log('Editor has lost focus');
      saveContentToDatabase(localStorage.getItem('editorContent'));
    });
  }
}
