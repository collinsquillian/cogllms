class NavigationDropdown extends HTMLElement {
    constructor() {
      super();
      
      // Get the initial expanded state from the attribute, default to false
      const initialExpanded = this.getAttribute('expanded') === 'true';
      
      this.innerHTML = `
        <div>
          <button class="dropdown-button" aria-expanded="${initialExpanded}">
            <span><strong>Navigation</strong></span>
            <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          
          <div class="dropdown-content${initialExpanded ? ' open' : ''}">
    <nav class="chapter-nav">
      <div class="section">
        <h3>Links</h3>
        <ul>
          <li><a href="https://collinsquillian.github.io/cogllms/">Home</a></li>
          <li><a href="https://github.com/collinsquillian/cogllms">GitHub Repository</a></li>
        </ul>
      </div>

      <div class="section">
        <h3>Introductions</h3>
        <ol start="1">
          <li><a href="https://collinsquillian.github.io/cogllms/c/01-introduction.html">Introduction</a></li>
          <li><a href="https://rlhfbook.com/c/01-cognitive-science.html">Reasoning fast and slow</a></li>
          <li><a href="https://collinsquillian.github.io/cogllms/c/02-search.html">Cognition is not search: Cognition in the age of LLMs</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Problem Setup & Context</h3>
        <ol start="4">
          <li><a href="https://rlhfbook.com/c/04-program-synthesis.html">Program Synthesis: Search through a language space</a></li>
          <li><a href="https://rlhfbook.com/c/05-deep-learning.html">2014-2024 Deep Learning</a></li>
          <li><a href="https://collinsquillian.github.io/cogllms/c/06-transformers.html">Transformers 101</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Training LLMs</h3>
        <ol start="7">
          <li><a href="https://rlhfbook.com/c/07-overview.html">Overview</a></li>
          <li><a href="https://rlhfbook.com/c/08-finetuning.html">Finetuning</a></li>
          <li><a href="https://rlhfbook.com/c/09-inference-time-scaling.html">Inference Time Scaling</a></li>
          <li><a href="https://rlhfbook.com/c/10-RL.html">RL</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Advanced (WIP)</h3>
        <ol start="13">
          <li><a href="https://rlhfbook.com/c/13-arc.html">Applications to ARC</a></li>
          <li><a href="https://rlhfbook.com/c/16-evaluation.html">Evaluation</a></li>
          <li><a href="https://collinsquillian.github.io/cogllms/c/17-lossless-compression.html">Test-time inferencing as lossless compression</a></li>
        </ol>
      </div>

      <div class="section">
        <h3>Open Questions</h3>
        <ol start="16">
        </ol>
      </div>
    </nav>
  </div>
</div>
      `;
  
      // Set up click handler
      const button = this.querySelector('.dropdown-button');
      const content = this.querySelector('.dropdown-content');
      
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !isExpanded);
        content.classList.toggle('open');
      });
    }
    
    // Add attribute change observer
    static get observedAttributes() {
      return ['expanded'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === 'expanded') {
        const button = this.querySelector('.dropdown-button');
        const content = this.querySelector('.dropdown-content');
        const isExpanded = newValue === 'true';
        
        if (button && content) {
          button.setAttribute('aria-expanded', isExpanded);
          content.classList.toggle('open', isExpanded);
        }
      }
    }
}

// Only define the component once
if (!customElements.get('navigation-dropdown')) {
  customElements.define('navigation-dropdown', NavigationDropdown);
}
