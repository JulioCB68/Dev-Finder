import { useState } from "react";

import { GithubUserData } from "@/types/GithubUser";

export function useLocalStorage() {
  const [user, setUser] = useState<GithubUserData>();

  // GET - LOCAL_STORAGE
  function getDataInLocalStorage(key: string) {
    const data = window.localStorage.getItem(key);
    return JSON.parse(data!);
  }

  const getLocalStorage = () => {
    const data = getDataInLocalStorage("user");
    setUser(data);
  };

  // SET - LOCAL_STORAGE
  function setDataInLocalStorage(key: string, data: GithubUserData) {
    const jsonData = JSON.stringify(data);
    window.localStorage.setItem(key, jsonData);
  }

  const setLocalStorage = (key: string, data: GithubUserData) => {
    setDataInLocalStorage(key, data);
  };

  return {
    getLocalStorage,
    setLocalStorage,
    user,
  };
}
