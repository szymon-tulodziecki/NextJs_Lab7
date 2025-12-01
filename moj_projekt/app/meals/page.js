import Link from 'next/link';

import MealsGrid from '@/components/components/meals/meal-grid';
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import classes from './page.module.css';

const FEATURED_MEALS = [
  {
    title: 'Juicy Burger',
    slug: 'juicy-burger',
    image: burgerImg,
    summary: 'Stacked with cheese, veggies, and the perfect sauce mix.',
    creator: 'Olivia Steele',
  },
  {
    title: 'Creamy Curry',
    slug: 'creamy-curry',
    image: curryImg,
    summary: 'Aromatic coconut curry that comes together in minutes.',
    creator: 'Priya Raman',
  },
  {
    title: 'Classic Schnitzel',
    slug: 'classic-schnitzel',
    image: schnitzelImg,
    summary: 'Crispy crust on the outside, juicy and tender inside.',
    creator: 'Lukas Weber',
  },
];

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, crafted with{' '}
          <span className={classes.highlight}>love</span>
        </h1>
        <p>
          Choose your favorite recipe or share your own culinary masterpiece
          with the community.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={FEATURED_MEALS} />
      </main>
    </>
  );
}
