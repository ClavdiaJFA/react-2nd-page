
export const ButtonReset = ({children, onCLick, initialValue}) => {
  return (
   <>
   <button onClick={()=>onCLick(initialValue)}>{children}</button>
   </>
  )
}

export default ButtonApp
