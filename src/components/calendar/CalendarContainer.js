import { gapi } from "gapi-script";
import { useEffect, useState } from "react";
import Button from "../Button";
import CalendarEvents from "./CalendarEvents";

// Client ID and API key from the Developer Console
var CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
var API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

export default function CalendarContainer() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    handleClientLoad();
  }, []);

  useEffect(() => {
    if (isSignedIn) {
      listUpcomingEvents();
    }
  }, [isSignedIn]);

  function handleClientLoad() {
    gapi.load("client:auth2", initClient);
  }

  async function initClient() {
    try {
      await gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    } catch (error) {
      console.log(JSON.stringify(error, null, 2));
    }
  }

  function updateSigninStatus(isSignedIn) {
    setIsSignedIn(isSignedIn);
  }

  function handleSignInClick() {
    gapi.auth2.getAuthInstance().signIn();
  }

  function handleSignoutClick() {
    gapi.auth2.getAuthInstance().signOut();
  }

  async function listUpcomingEvents() {
    const response = await gapi.client.calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 20,
      orderBy: "startTime",
    });
    const events = response.result.items;
    setEvents(events);
  }

  console.log(events);

  return (
    <div>
      <h1>Calendar container</h1>
      <div className="absolute top-6">
        {isSignedIn ? (
          <Button onClick={handleSignoutClick}>Sign Out</Button>
        ) : (
          <Button onClick={handleSignInClick}>Sign In</Button>
        )}
      </div>
      <CalendarEvents events={events} />
    </div>
  );
}
