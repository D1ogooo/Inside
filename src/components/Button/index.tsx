interface ButtonProps {
 state: boolean;
 sendEmail: () => void;
}

export const Button: React.FC<ButtonProps> = ({state, sendEmail}) => {
 return (
  <>
   <button disabled={!state} onClick={sendEmail}>
    Enviar email
   </button>
  </>
 )
}