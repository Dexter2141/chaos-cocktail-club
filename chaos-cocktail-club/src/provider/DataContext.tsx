import { ICocktail } from "../models/interfaces";
import React, { createContext, useContext, useEffect, useState } from "react";

interface DataContextType {
  data: any; // Define the data type accordingly
  fetchData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = (jsonDataString?: string) => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataContextProvider");
  }
  return context;
};

interface DataContextProviderProps {
  children: React.ReactNode; // Define children prop
  jsonDataString?: string; // JSON string to be passed
}

export const DataContextProvider: React.FC<DataContextProviderProps> = ({
  children,
  jsonDataString,
}) => {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    try {
      // Fetch data from your JSON file or API
      //const response = await fetch("cocktails.json");

      const response = await fetch(
        "http://localhost:3000/chaos-cocktail-club/cocktails.json"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const jsonData: ICocktail[] = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
