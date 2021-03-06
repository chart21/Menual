# Menual - Android App that supports users sticking to a healthy diet in daily life

Users who are not aware of how healthy dishes in a restaurant are can take a photo of its menu. Menual identifies all dishes on the menu, looks dishes up on a food database, and gives feedback and explanations whether each dish is healthy or not according to the German Nutrition Society's (DGE) standards.


Tools used: Android Studio, Firebase, Google Cloud Vision API, Nutritionix API

## Demos

### Appflow
<p align="center"><img src="media/demos/appflow.gif"\></p>

### Meal Statistics

<p align="center"><img src="media/demos/Meal Statistics.gif"\></p>

## Software Architecture

The Frontend is implemented using Android Studio and Firebase. We use Google Text Detection API to detect the text on a menu. Menual then filters dishes from other text such as ingredients or headlines. It sends all detected menus to the NutritionX API, which returns detailed information on a dish's nutrients and vitamins. Based on these values, Menual calculates a food score for each dish according to the German Nutrition Society's (DGE).  

<p align="center"><img src="media/Software architecture.png"\></p>

## Screenshots

### Sign-in Screen

<p align="center"><img src="media/screenshots/Sign in screen.PNG"\></p>

### Main Screen

<p align="center"><img src="media/screenshots/main screen.PNG"\></p>

### Dish Detection

<p align="center"><img src="media/screenshots/dish detection.PNG"\></p>

### Meal Evaluation

<p align="center"><img src="media\screenshots/Meal Evaluation.PNG"\></p>

## Additional Features

### Diet Preferences
Users can choose from different diet preferences such as low-carb food or vegetarian food and allergies. These preferences influence the score of a dish.

<p align="center"><img src="media/screenshots/diet preferences.PNG"\></p>


### Suggestions (Alpha)

Restaurants that have many healthy dishes and are nearby to the user get recommended.

<p align="center"><img src="media/screenshots/suggestions.PNG"\></p>

## Getting Started

### Firebase
1. Deploy the Firebase code to your Firebase functions
2. Get a [Nutritionix API key](https://www.nutritionix.com/business/api)
3. Insert your Nutritionix API key in **functions/src/index.ts** and **functions/lib/index.js**
4. Insert your Google API key in **functions/src/index.ts** and **functions/lib/index.js**

### Frontend
1. Compile the Frontend code with Android Studio 







