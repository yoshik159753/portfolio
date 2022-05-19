import { useReducer, useCallback } from "react";

const httpRequestReducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        response: action.payload,
      };
    case "FAILURE":
      console.log({ ...state });
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

const useHttpRequest = (requestCallback, startWithLoading = false) => {
  const [state, dispatch] = useReducer(httpRequestReducer, {
    isLoading: startWithLoading,
    isError: false,
    response: null,
  });

  const httpRequestClient = useCallback(
    async (requestData) => {
      dispatch({ type: "INIT" });
      try {
        const response = await requestCallback(requestData);
        dispatch({ type: "SUCCESS", payload: response.data });
      } catch (error) {
        console.error(error);
        dispatch({ type: "FAILURE" });
      }
    },
    [requestCallback]
  );

  // state はプロパティに isLoading, isError, data を持つ
  return [state, httpRequestClient];
};

export default useHttpRequest;
