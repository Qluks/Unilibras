import axios from "axios";
import useSWR from 'swr';

const API_BASE_URL = "https://parseapi.back4app.com/classes";

export const fetchDados = async (classe) => {
  const response = await axios.get(`${API_BASE_URL}/${classe}`, {
    headers: {
      "X-Parse-Application-Id": "VLXGoAa8faSqvgb8t5mnVnHVikkadDmykdDW1ZVy",
      "X-Parse-REST-API-Key": "jx7QPDsGXfI5eXqIQC9dgHyvUIvlVr50J7UGwwOn",
    },
  });
  return response.data.results;
};

export const useDados = (classe) => {
  const { data, error, mutate } = useSWR(classe, fetchDados, { refreshInterval: 10000 });

  return {
    dados: data,
    isLoading: !error && !data,
    isError: error,
    atualizarDados: mutate,
  };
};
