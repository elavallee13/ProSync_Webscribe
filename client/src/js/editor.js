import { fetchContentFromDatabase, saveContentToDatabase } from './database'; // Import methods to manage data in the database
import { headerContent } from './header'; // Import header content

export default class EditorManager {
  constructor() {
    const localStoredContent = localStorage.getItem('content');

    // Check if the CodeMirror library is loaded
    if (typeof CodeMirror === 'undefined') {
      throw new Error('CodeMirror is not loaded');
    }

    this.editor = CodeMirror(document.querySelector('#main'), {
      value: '',
      mode: 'javascript',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true,
      autofocus: true,
      indentUnit: 2,
      tabSize: 2,
    });

    // Load data from the database when the editor is ready
    fetchContentFromDatabase().then((data) => {
      console.info('Loaded data from the database, injecting into editor');
      this.editor.setValue(data || localStoredContent || headerContent);
    });

    // Save content to local storage when the editor's content changes
    this.editor.on('change', () => {
      localStorage.setItem('content', this.editor.getValue());
    });

    // Save the content of the editor to the database when it loses focus
    this.editor.on('blur', () => {
      console.log('The editor has lost focus');
      saveContentToDatabase(localStorage.getItem('content'));
    });
  }
}
