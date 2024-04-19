interface ButtonProps {
 state: boolean;
}

export const Button: React.FC<ButtonProps> = ({state}) => {
 return (
  <>
   <button disabled={!state}>
    Enviar email
   </button>
  </>
 )
}