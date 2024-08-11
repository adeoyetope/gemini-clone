import React, { createContext, useEffect, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [resentPrompt, setResentPromt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);

  // function that return response line by line
  const delayPara = (index, nexWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nexWord);
    }, 75 * index);
  };

  const newChat = () => {
    setIsLoading(false);
    setResultData(false);
  };
  const onSent = async (prompt) => {
    setResultData("");

    setIsLoading(true);
    if (input !== "") {
      setPreviousPrompt((prev) => [...prev, input]);
    }
    setResentPromt(input || prompt);

    const response = await run(input || prompt);
    const splitResponse = response.split("**");
    let newResponse = "";
    for (let i = 0; i < splitResponse.length; i++) {
      if (i === 0 || i !== 1) {
        newResponse += splitResponse[i];
      } else {
        newResponse += "<b>" + splitResponse[i] + "</b>";
      }

      //   console.log(newResponse);
      // return newResponse;
      setIsLoading(false);
    }
    let newResponse2 = newResponse.split("*").join("</ br>");
    // setLoading(true);
    let newReonseArray = newResponse2.split(" ");
    // let newResponse3 ;
    for (let i = 0; i < newReonseArray.length; i++) {
      const nextWord = newReonseArray[i];
      delayPara(i, nextWord + " ");
    }
    // instead of setResultData(newResponse2), delayPara function was called to display the text line by line

    // setResultData(newResponse2);

    setInput("");
    setIsLoading(false);
  };
  // onSent("what is react");

  const contextValue = {
    input,
    setInput,
    resentPrompt,
    setResentPromt,
    onSent,
    isLoading,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    setShowResult,
    resultData,
    setResultData,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
