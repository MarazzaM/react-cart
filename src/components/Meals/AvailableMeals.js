import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Classic rolls',
    price: 220.50,
  },
  {
    id: 'm2',
    name: 'Sushi 2',
    description: 'A specialty of the house!',
    price: 100.50,
  },
  {
    id: 'm3',
    name: 'Sushi Burger',
    description: 'American sushi',
    price: 800.10,
  },
  {
    id: 'm4',
    name: 'Green sushi',
    description: 'Healthy and green',
    price: 10.95,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
