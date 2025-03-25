import React, { useState, useEffect } from 'react';
import './Events.css'; // Import the CSS for styling

const Events = () => {
  const [eventsData, setEventsData] = useState([]); // State to store event data
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Fetch events data from the new API when the component mounts
  useEffect(() => {
    fetch('https://serpapi.com/search.json?engine=google_events&q=Events+in+Austin&hl=en&gl=us', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '26c4166390719017e6b95a6d36ffce64bec5bf42988f3e0bb9a2806ac9f41826', // Your API key
        'x-rapidapi-host': 'serpapi.com', // Host header
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data); // Log the response to check the structure
        const events = data.events || []; // Adjust this based on the API response structure
        setEventsData(events); // Save the event data in the state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch(error => {
        console.error('Error fetching event data:', error); // Log errors if any
        setEventsData([]); // Set an empty array in case of error
        setLoading(false); // Set loading to false after error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="events">
      <h1>Upcoming Events</h1>
      <div className="events-container">
        {loading ? (
          <div>Loading events...</div> // Show loading message while data is fetched
        ) : Array.isArray(eventsData) && eventsData.length > 0 ? (
          eventsData.map((event, index) => (
            <div key={event.id || index} className="event-card">
              <img
                src={event.image || 'default-image-url'} // Provide a default image if not available
                alt={event.title || 'Event'} // Fallback alt text if title is missing
                className="event-image"
              />
              <div className="event-details">
                <h2 className="event-title">{event.title || 'No title available'}</h2>
                <p className="event-date">{event.date || 'No date available'}</p>
                <p className="event-description">{event.description || 'No description available'}</p>
              </div>
            </div>
          ))
        ) : (
          <div>No events found.</div> // Show message if no events are found
        )}
      </div>
    </div>
  );
};

export default Events;
