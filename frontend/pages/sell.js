import CreateItem from "../components/CreateItem";


const Sell = ({ query }) => (
  <div>
    <CreateItem id={query.id} />
  </div>
);

export default Sell;