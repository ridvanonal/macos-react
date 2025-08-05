const setProperty = (name:string,value:string) => document.documentElement.style.setProperty(`--${name}`,value)

export { setProperty }