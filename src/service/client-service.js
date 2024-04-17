// Function to fetch movies data from the server using async/await
const moviesList = async () => {
  try {
    const response = await fetch(
      "https://json-server-vercel-moviesflix-react.vercel.app/moviesData"
    );
    return response.json(); // Return JSON data from the response
  } catch (error) {
    throw new Error("Error fetching movies list: ", error.message);
  }
};

// Function to fetch categories list from the server using async/await
const categoriesList = async () => {
  try {
    const response = await fetch(
      "https://json-server-vercel-moviesflix-react.vercel.app/categories"
    );
    return response.json();
  } catch (error) {
    throw new Error("Error fetching categories list: ", error.message);
  }
};

//Function to register a new movie data on the server using async/await
const registerNewMovie = async (movieData) => {
  try {
    const response = await fetch(
      "https://json-server-vercel-moviesflix-react.vercel.app/moviesData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData), // Convert object to JSON string
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error registering new movie: ", error.message);
  }
};

//Function to register a new category on server using async/await
const registerNewCategory = async (categoryData) => {
  try {
    const response = await fetch(
      "https://json-server-vercel-moviesflix-react.vercel.app/categories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoryData),
      }
    );
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    throw new Error("Error registering new category: ", error.message);
  }
};

// Exported object containing client-related services
export const clientServices = {
  moviesList,
  categoriesList,
  registerNewMovie,
  registerNewCategory,
};
