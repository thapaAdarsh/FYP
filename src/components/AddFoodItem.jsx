import  { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadBytes, ref as imgRef, getDownloadURL} from "firebase/storage";
import { v4 } from "uuid";
import { push, set, ref} from "firebase/database";
import { db, storage } from "../firebase";
import AdminNavbar from "../Admin/AdminNavbar";

const AddFoodItem = () => {
  const { register } = useForm();
  const [error, setError] = useState(null);
  const [description, setDescription] = useState("this is pizza");
  const [price, setPrice] = useState(0);
  const [ingredient, setIngredient] = useState("");
  const [fat, setFat] = useState(0);
  const [calorie, setCalorie] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [rating, setRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [code, setCode] = useState("abc");
  const [foodName, setFoodName] = useState("pizza");
  const [foodTag, setFoodTag] = useState("veg");
  const [available, setAvailable] = useState("");
  const [img, setImg] = useState(null);

  const foodItemsRef = ref(db, "FoodItems");

  const handleSubmit = async(event) => {

    event.preventDefault();

    const newFoodItemRef = push(foodItemsRef);
    const imageUrl = await uploadImage();

    const newFoodItem = {
      foodName: foodName,
      description: description,
      price: price,
      ingredient: ingredient,
      fat: fat,
      calorie: calorie,
      protein: protein,
      carbs: carbs,
      rating: rating,
      ratingCount: ratingCount,
      code: code,
      foodTag: foodTag,
      available: available,
      image: imageUrl,
    };
    set(newFoodItemRef, newFoodItem)
      .then(() => {
        alert("Food Items saved..");
      })
      .catch((error) => {
        console.log("Error saving food Items");
        setError("Error saving food items");
        return null;
      });
  };

  const uploadImage = async() => {
    // event.preventDefault()

    if (img == null) return;

    const imageRef = imgRef(storage, `images/${img.name}_${v4()}`);

    try {
      await uploadBytes(imageRef, img);
      alert("Image Uploaded");
      const imageUrl = await getDownloadURL(imageRef);
      return imageUrl;
    } catch (error) {
      console.log("Error Uploading Image", error);
      setError("Error Uplaoding Image");
      return null;
    }
  };

  return (
    <>
    <AdminNavbar/>
    <h1 className="text-center p-4 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl font-david-libre">Add Food Item</h1>
    <form
      className="w-full max-w-2xl m-auto py-10  px-10 border"
      onSubmit={handleSubmit}
    >
      <div>
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="description"
        >
          Food Name
        </label>
        <textarea
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="title"
          type="text"
          placeholder="title"
          name="title"
          onChange={(e) => setFoodName(e.target.value)}
          value={foodName}
          required
        />
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="description"
          type="text"
          placeholder="Description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-600 font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="price"
          type="number"
          step="0.01"
          placeholder="Price"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          required
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="ingredients"
        >
          Ingredients
        </label>
        <textarea
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="ingredients"
          type="text"
          placeholder="Ingredients"
          name="ingredients"
          onChange={(e) => setIngredient(e.target.value)}
          value={ingredient}
          required
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="totalCalories"
        >
          Total Calories
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="totalCalories"
          type="number"
          placeholder="Total Calories"
          name="totalCalories"
          onChange={(e) => setCalorie(e.target.value)}
          value={calorie}
          required
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="totalFat"
        >
          Total Fat
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="totalFat"
          type="number"
          placeholder="Total Fat"
          name="totalFat"
          onChange={(e) => setFat(e.target.value)}
          value={fat}
          required
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="totalCarbs"
        >
          Total Carbs
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="totalCarbs"
          type="number"
          placeholder="Total Carbs"
          name="totalCarbs"
          onChange={(e) => setCarbs(e.target.value)}
          value={carbs}
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-600 font-bold mb-2" htmlFor="protein">
          Protein
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="protein"
          type="number"
          placeholder="Protein"
          name="protein"
          onChange={(e) => setProtein(e.target.value)}
          value={protein}
          required
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="foodTags"
        >
          Food Tags
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="foodTags"
          type="text"
          placeholder="Food Tags (comma-separated)"
          name="foodTags"
          onChange={(e) => setFoodTag(e.target.value)}
          value={foodTag}
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="isAvailable"
        >
          Is Available
        </label>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              className="form-radio"
              type="radio"
              name="isAvailable"
              value={"yes"}
              onChange={(e) => setAvailable(e.target.value)}
              required
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              className="form-radio"
              type="radio"
              name="isAvailable"
              value={"no"}
              onChange={(e) => setAvailable(e.target.value)}
              required
            />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-gray-600 font-bold mb-2" htmlFor="code">
          Code
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="code"
          type="text"
          placeholder="Code"
          name="code"
          onChange={(e) => setCode(e.target.value)}
          value={code}
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-600 font-bold mb-2" htmlFor="rating">
          Rating
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="rating"
          type="number"
          placeholder="Rating"
          name="rating"
          onChange={(e) => setRating(e.target.value)}
          value={rating}
          required
        />

      </div>
      <div className="mt-4">
        <label
          className="block text-gray-600 font-bold mb-2"
          htmlFor="ratingCount"
        >
          Rating Count
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="ratingCount"
          type="number"
          placeholder="Rating Count"
          name="ratingCount"
          onChange={(e) => setRatingCount(e.target.value)}
          value={ratingCount}
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-gray-600 font-bold mb-2" htmlFor="image">
          Image
        </label>
        <input
          className="appearance-none bg-gray-200 border border-gray-200 rounded w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white"
          id="image"
          type="file"
          name="image"
          onChange={(e) => setImg(e.target.files[0])}
        />
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    </>
  );
};

export default AddFoodItem;
