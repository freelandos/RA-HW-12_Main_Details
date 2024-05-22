import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailsRequest } from "../../actions/actionCreators";
import { Spin } from "../../components/Spin";
import { Error } from "../../components/Error";

export const ServiceDetails= () => {
  const { details, loading, error } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchDetailsRequest(id));
  }, [id]);

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-16">
      {loading && <Spin />}
      {error && <Error fetchRequest={() => fetchDetailsRequest(id)} />}
      {!loading && details && !error &&
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl mb-4">Услуга</h1>
          <table className="border border-gray-400 border-collapse">
            <tbody>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-bold">ID</td>
                <td className="border border-gray-400 px-4 py-2">{details.id}</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-bold">Название</td>
                <td className="border border-gray-400 px-4 py-2">{details.name}</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-bold">Стоимость</td>
                <td className="border border-gray-400 px-4 py-2">{details.price}</td>
              </tr>
              <tr>
                <td className="border border-gray-400 px-4 py-2 font-bold">Описание</td>
                <td className="border border-gray-400 px-4 py-2">{details.content}</td>
              </tr>
            </tbody>
          </table>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md mt-12" onClick={handleClick}>&#8882;&#8882;&nbsp;&nbsp;Назад</button>
        </div>
      }
    </div>
  );
};
