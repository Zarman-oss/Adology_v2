type ButtonProps = {
  text: string;
};

export default function SecondaryButton({ text: buttonProp }: ButtonProps) {
  return (
    <button className='w-full primary-button py-4 px-6  rounded-4xl  '>
      {buttonProp}
    </button>
  );
}
