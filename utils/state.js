import { createGlobalState } from "react-hooks-global-state"

const { subscribe, setGlobalState, getGlobalState, useGlobalState } = createGlobalState({
  isRouterChangeStart: false,
})

const setRouterChange = (pathname, link) => {
  if(pathname != link){
    setGlobalState("isRouterChangeStart", true)
  }
}

export { subscribe, setGlobalState, getGlobalState, useGlobalState, setRouterChange }