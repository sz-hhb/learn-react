import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

// 高阶组件
function withRouter(WrapperComponent) {
  return (props) => {
    const navigate = useNavigate();
    const params = useParams();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const query = Object.fromEntries(searchParams);

    const router = { navigate, params, location, query };

    return <WrapperComponent {...props} router={router} />;
  };
}

export default withRouter;
