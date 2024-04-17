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

// Exported object containing client-related services
export const clientServices = {
  moviesList,
  categoriesList,
};
