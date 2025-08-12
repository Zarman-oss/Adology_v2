type ButtonProps = {
  text: string;
};

export default function PrimaryButton({ text: buttonProp }: ButtonProps) {
  return (
    <button className='primary-button py-4 px-8 rounded-[100px] body-1--semibold outline-1 outline-offset-[-1px] outline-zinc-500 flex justify-center items-center'>
      {buttonProp}
    </button>
  );
}
