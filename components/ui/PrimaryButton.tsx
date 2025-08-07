type ButtonProps = {
  text: string;
};

export default function PrimaryButton({ text: buttonProp }: ButtonProps) {
  return (
    <button className='py-4 px-8 cursor-pointer text-white '>
      {buttonProp}
    </button>
  );
}
