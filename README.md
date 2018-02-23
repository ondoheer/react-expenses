## React-Redux Boilerplate

A starter kit for react and redux, with a few bells and whistles, including

* es6 transpilation
* linting
* hot reloading
* scss compilation

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run validate
```

## TODO

* Expenses category field is not populated until you switch the category:
  * Redirect to add categories if there are no categories, or change the add expense button to take you to the add category
  * Preload the value of the add expense field with id=1
* Clean form after category has been submited
* BLOCK register button if password !== confirm
* create private vs public 404 functionality
* Improve the last expense box styling (BEMMIT)
