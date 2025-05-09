export default function RecipeMealPage({ params }) {
  return (
    <main>
      <h1>Recipe Meal</h1>
      <p>Welcome to the recipe meal page</p>
      <p>Slug: {params.slug}</p>
    </main>
  );
}
