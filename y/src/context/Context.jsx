import React, { createContext, useEffect, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();

// react createContxet is part of react set up that is use to pass data to components,
// the value to be passed to componenta is passed as a value to the createContext component,
// the data is called in the children components using useContext hook
// createContext is used to avoid props drilling

// THE CHILDREN COMPONENETS IS WRAP WITH CREATCONTEXT COMPONENTS AT MAINSIDE COMPONENT
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [resentPrompt, setResentPromt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const [showResult, setShowResult] = useState(false);
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

  // onSent function uses prompt parameter or input value to execute its function
  const onSent = async (prompt) => {
    setResultData("");

    // LOADING IS DECLEAR TRUE AND AFTER DATA IS GENERATED IT IS DECLEARED TO FALSE

    setIsLoading(true);
    if (input !== "") {
      setPreviousPrompt((prev) => [...prev, input]);
    }
    setResentPromt(input || prompt);
    // the  async run funtion from gemini component is called here inside the onsent function
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
    // showResult,
    // setShowResult,
    resultData,
    setResultData,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
