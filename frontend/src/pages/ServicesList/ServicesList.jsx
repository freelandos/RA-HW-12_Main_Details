import { useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { Link } from "react-router-dom";
import { fetchServicesRequest } from "../../actions/actionCreators";
import { Spin } from "../../components/Spin";
import { Error } from "../../components/Error";

export const ServicesList = () => {
  const { services, loading, error } = useSelector((state) => state.services);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchServicesRequest());
  }, []);

  return (
    <div className="flex flex-col items-center mt-16">
      {loading && <Spin />}
      {error && <Error fetchRequest={() => fetchServicesRequest()} />}
      {!loading && !error && services.length !== 0 &&
        <>
          <h1 className="text-xl font-bold">Список услуг</h1>
          <ul className="flex flex-col gap-5 mt-6">
            {services.map((service) => (
              <li key={service.id} className="hover:underline">
                <Link to={`/${service.id}/details`}>
                  {`${service.name} - ${service.price}`}
                </Link>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
};
