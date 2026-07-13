# Pokémon Duel Game

A small React study project called **Pokémon Duel Game** and built with **React**, **Vite**, and **Tailwind CSS**.

## Tech Stack

- React
- Vite
- Tailwind CSS

## Progress

### ✅ Part 1: Building Initial Components

- `App.jsx`
- `components/Pokecard.jsx`

### ⬜ Part 2: Building the `Pokegame` Component

- [ ] Modify `App` to render a `Pokegame` component.
- [ ] `Pokegame` takes the list of 8 Pokémon (mocks/mockData.js) and randomly splits them into two hands of 4 cards each.
- [ ] Render two `Pokedex` components, one per hand.
- [ ] Calculate the total experience for each hand.
- [ ] Determine the winning hand (the one with higher total experience).
- [ ] On refresh, hands and the winner should change randomly.

### ⬜ Part 3: Styling + Animations

- [ ] Style components with Tailwind CSS.
- [ ] Add animations/transitions (e.g. card reveal, winner highlight).

## Getting Started

### Prerequisites

- Node.js (v24 or higher recommended)

### Installation

```bash
git clone <repository-url>
cd Pokemon-Duel-React-Demo
npm install
```

### Running the app

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

## Project Structure

```
src/
├── App.jsx
├── components/
│   ├── Pokecard.jsx
│   ├── Pokegame.jsx   (in progress)
│   └── Pokedex.jsx    (in progress)
├── mocks/
│   ├── mockData.js
```

## Notes

This project is for learning purposes only.
