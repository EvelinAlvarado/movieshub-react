// Function to fetch movies data from the server using async/await
const moviesList = async () => {
  try {
    const response = await fetch("http://localhost:3000/moviesData");
    return response.json(); // Return JSON data from the response
  } catch (error) {
    throw new Error("Error fetching movies list: ", error.message);
  }
};

// Function to fetch categories list from the server using async/await
const categoriesList = async () => {
  try {
    const response = await fetch("http://localhost:3000/categories");
    return response.json();
  } catch (error) {
    throw new Error("Error fetching categories list: ", error.message);
  }
};

//Function to register a new movie data on the server using async/await
const registerNewMovie = async (movieData) => {
  try {
    const response = await fetch("http://localhost:3000/moviesData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movieData), // Convert object to JSON string
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error registering new movie: ", error.message);
  }
};

//Function to register a new category on server using async/await
const registerNewCategory = async (categoryData) => {
  try {
    const response = await fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(categoryData),
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error registering new category: ", error.message);
  }
};

//Function to delete a client from the server using async/await
const deleteMovie = async (id) => {
  try {
    console.log("Delete to: ", id);
    const response = await fetch(`http://localhost:3000/moviesData/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    throw new Error("Error deleting movie: ", error.message);
  }
};

const deleteCategory = async (id) => {
  try {
    console.log("Delete category: ", id);
    const response = await fetch(`http://localhost:3000/categories/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    throw new Error("Error deleting category: ", error.message);
  }
};

//Function to fetch category for editing from server using async/await
const editCategory = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/categories/${id}`);
    return response.json();
  } catch (error) {
    throw new Error("Error fetching category for editing: ", error.message);
  }
};

const updateCategory = async (categoryName, colorPicker, id) => {
  try {
    const response = await fetch(`http://localhost:3000/categories/${id}`, {
      method: "PUT", // Specify the HTTP method as PUT
      headers: {
        "Content-Type": "application/json", // Set the content type of the request body
      },
      body: JSON.stringify({ categoryName, colorPicker }), // Convert data to JSON format
    });
    return response;
  } catch (error) {
    throw new Error("Error updating category information: ", error.message);
  }
};

// Function to update movie category on the server using async/await
const updateMovieCategory = async (movieId, newCategoryName) => {
  try {
    const response = await fetch(
      `http://localhost:3000/moviesData/${movieId}`,
      {
        method: "PATCH", // Use PATCH method to update specific fields
        headers: {
          "Content-Type": "application/json", // Set the content type of the request body
        },
        body: JSON.stringify({ categoryName: newCategoryName }), // Convert data to JSON format
      }
    );
    return response;
  } catch (error) {
    throw new Error("Error updating movie category name: ", error.message);
  }
};

// Exported object containing client-related services
export const clientServices = {
  moviesList,
  categoriesList,
  registerNewMovie,
  registerNewCategory,
  deleteMovie,
  deleteCategory,
  editCategory,
  updateCategory,
  updateMovieCategory,
};
