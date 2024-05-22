import { useDispatch } from "react-redux";

export const Error = (props) => {
  const { fetchRequest } = props;
	const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchRequest());
  };

  return (
    <div className="flex w-[410px] justify-center items-center bg-pink-200 border-pink-500 border-l-4 p-5 mt-8">
      <p className="text-pink-800 font-bold">Произошла ошибка!</p>
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 ml-4 rounded-md"
        onClick={handleClick}
      >
        Повторить запрос
      </button>
    </div>
  );
};
