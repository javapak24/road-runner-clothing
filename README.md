# Road Runner Clothing

A responsive React website for the Road Runner clothing brand.

## Stack

- React
- Create React App / react-scripts
- React Router with HashRouter
- Plain CSS
- GitHub Pages
- gh-pages

## Installation order in VS Code

### Option A: Use this completed project

1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open **Terminal > New Terminal**.
4. Run:

```bash
npm install
```

5. Start the development server:

```bash
npm start
```

### Option B: Recreate it manually

```bash
npx create-react-app road-runner-clothing
cd road-runner-clothing
npm install react-router-dom
npm install --save-dev gh-pages
npm start
```

## Product mapping

Products are stored in:

```text
src/data/products.js
```

The product grid uses:

```jsx
products.map((product) => <ProductCard key={product.id} product={product} />);
```

This means you can create another card by adding another product object.
You do not need to manually write another ProductCard in JSX.

## Replacing product images

1. Add an image to `src/assets`.
2. Import it in `src/data/products.js`:

```js
import fastBreakTee from "../assets/fast-break-tee.jpg";
```

3. Change the product's image value:

```js
image: fastBreakTee;
```

Use compressed WebP or JPEG images when possible.

## Update contact and payment details

Edit:

```text
src/pages/Contact.js
```

Replace the example email, Instagram handle, Venmo handle, Cash App handle,
and destination links.

Always tell customers to confirm availability and totals before paying.

## GitHub Pages setup

### 1. Update package.json

Replace this:

```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/road-runner-clothing"
```

with your actual GitHub username and repository name.

### 2. Create and push the repository

```bash
git init
git add .
git commit -m "Build Road Runner clothing website"
git branch -M main
cc
git push -u origin main
```

### 3. Deploy

```bash
npm run deploy
```

### 4. GitHub settings

Open the repository on GitHub:

1. Go to **Settings**.
2. Open **Pages**.
3. Confirm the publishing branch is `gh-pages`.

Your URL should look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/road-runner-clothing
```

## Responsive design

The site includes breakpoints for:

- Large desktop screens
- Laptops
- Tablets
- Large phones
- Small phones

The navigation becomes a mobile menu. Product cards change from three columns
to two columns and then one column.
