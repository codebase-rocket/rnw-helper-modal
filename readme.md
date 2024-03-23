# rn-helper-modal

## Table of Contents
- [Introduction]
- [Installation]
- [LoadingLibrary]
- [Usage]
- [Dependencies]

## Introduction

`UseModal` is a custom React hook designed to manage modal components in a React application. It provides actions to show, hide, and hide all modals. The hook uses React's `useState` and `useMemo` to handle the modal state and actions efficiently.

## Installation

Install the module using npm:

1. Add the following dependency to your `package.json`:

    ```json
    "dependencies": {
      "rn-helper-modal": "npm:@codebase-rocket/rn-helper-modal@^1.0.0",    }
    }
    ```

2. Execute the following command:

    ```bash
    npm install
    ```

## Loading in Project

Load the hook in your React application:

```javascript

// Import the custom modal hook
const UseModal = require('rn-helper-modal')(Lib, Config);

// Example usage:
const { actions, component, status } = UseModal();

```

## Usage

  ```javascript

    // Show a modal
    actions.show(data);

    // Hide the topmost modal
    actions.hide();

    // Hide all modals
    actions.hideAll();

  ```


## Dependencies

  Ensure your project has the following dependencies:

  1. React