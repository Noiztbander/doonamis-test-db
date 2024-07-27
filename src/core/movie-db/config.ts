const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const movieDbConfig = {
  apiKey: getEnvironmentVariable("MOVIE_DB_API_KEY"),
  baseUrl: getEnvironmentVariable("MOVIE_DB_API_BASE_URL"),
};
