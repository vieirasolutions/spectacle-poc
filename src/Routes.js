import { Switch, Route } from 'react-router-dom';

import PresentationTv from './pages/PresentationTv';
import ControlPanel from './pages/ControlPanel';

const Routes = function () {
  return (
    <Switch>
      <Route path="/" exact component={PresentationTv} />
      <Route path="/control-panel" component={ControlPanel} />
    </Switch>
  );
};

export default Routes;
