import { Switch, Route } from "react-router-dom";
import CalendarContainer from "../components/calendar/CalendarContainer";
import GithubRepositories from "../components/github/GithubRepositories";

export default function RouterContainer() {
  return (
    <Switch>
      <Route path="/" exact>
        <GithubRepositories />
      </Route>
      <Route path="/calendar" exact>
        <CalendarContainer />
      </Route>
    </Switch>
  );
}
