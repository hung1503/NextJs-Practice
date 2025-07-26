"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidValue(value) {
  return !value || value.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidValue(meal.title) ||
    isInvalidValue(meal.summary) ||
    isInvalidValue(meal.instructions) ||
    isInvalidValue(meal.creator) ||
    isInvalidValue(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    !meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}
