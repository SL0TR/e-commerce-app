import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';

const Sell = ({ query }) => (
  <div>
    <PleaseSignIn>
      <CreateItem id={query.id} />
    </PleaseSignIn>
  </div>
);

export default Sell;
