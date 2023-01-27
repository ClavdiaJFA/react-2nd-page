
export const ButtonApp = ({children, onCLick}) => {
  return (
   <>
   <button onClick={onCLick}>{children}</button>
   </>
  )
}

export default ButtonApp
