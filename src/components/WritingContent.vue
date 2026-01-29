<template>
  <div class="writing-portfolio">
    <h1 class="header">Technical Writing Portfolio</h1>
    <nav class="doc-tabs">
      <button @click="selectedDoc = 'api'" :class="{ active: selectedDoc === 'api' }">Backend API</button>
      <button @click="selectedDoc = 'ui'" :class="{ active: selectedDoc === 'ui' }">Frontend UI</button>
      <button @click="selectedDoc = 'auth'" :class="{ active: selectedDoc === 'auth' }">Auth Deep Dive</button>
    </nav>

    <div class="documentation-body" v-html="outputHtml"></div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';
import { inventoryApiDoc } from '../content/inventory-api.js';
import { inventoryFrontendDoc } from '../content/inventory-api-frontend.js';
import { authDeepDiveDoc } from '../content/auth-deep-dive.js';

export default {
  data() {
    return {
      selectedDoc: 'api', // Default view
      docs: {
        api: inventoryApiDoc,
        ui: inventoryFrontendDoc,
        auth: authDeepDiveDoc
      }
    };
  },
  computed: {
    outputHtml() {
      const md = new MarkdownIt({ html: true, linkify: true });
      return md.render(this.docs[this.selectedDoc]);
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  margin: 5vh 1rem; // Added side margin for mobile headers
}

.doc-tabs {
  display: flex;
  flex-wrap: wrap; // Allows buttons to stack on very small screens
  gap: 10px;
  margin: 5vh 1rem 2rem 1rem;
  justify-content: center;
  
  button {
    flex: 1; // Buttons take up equal space
    min-width: 120px; // Prevents them from getting too skinny
    padding: 12px 8px; // Larger tap target for fingers
    cursor: pointer;
    background: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.9rem;
    
    &.active {
      background: #000;
      color: #fff;
      border-color: #000;
    }
  }
}

.documentation-body {
  line-height: 1.6;
  color: #333;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem; // Essential for mobile side-padding
  text-align: left;

  ::v-deep {
    h1 {
      font-size: 1.5rem;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 10px;
      margin-bottom: 1rem;
    }

    /* MOBILE TABLE FIX */
    table {
      display: block; // Allows the table to be scrollable
      width: 100%;
      overflow-x: auto; // Adds horizontal scrollbar if table is too wide
      border-collapse: collapse;
      margin: 1.5rem 0;
      -webkit-overflow-scrolling: touch; // Smooth scrolling on iOS
      
      th, td {
        border: 1px solid #dfe2e5;
        padding: 10px;
        min-width: 100px; // Ensures content doesn't "smush"
      }

      th {
        background-color: #f6f8fa;
      }
    }

    code {
      background-color: #f3f3f3;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: 'Courier New', monospace;
      word-break: break-word; // Prevents long code lines from breaking layout
    }

    pre {
      background: #f3f3f3;
      padding: 1rem;
      overflow-x: auto; // Scrollable code blocks
      border-radius: 4px;
    }

    ul {
      padding-left: 1.2rem;
    }
  }
}

/* Tablet and Mobile adjustments */
@media (max-width: 600px) {
  .header {
    font-size: 1.5rem;
  }
  
  .doc-tabs {
    flex-direction: column; // Stack buttons vertically on mobile
    button {
      width: 100%;
    }
  }
}
</style>