export default function NavigationButton({ icon }) {
  return (
    <button className='p-2 bg-neutral-800 rounded-[100px] flex justify-center items-center gap-2.5 cursor-pointer '>
      {icon}
    </button>
  );
}
