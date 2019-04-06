import React from "react"

const DefaultText = () => {
  return (
    <div>
      <p>
        User group for JavaScript developers in Bonn to learn and discuss about
        JavaScript. All JavaScript levels are welcome. You can meet people, talk
        about JavaScript related technologies, join the FreeCodeCamp Bonn or
        just work on your own tutorials, books, or projects.
      </p>
      &hellip;
      {/* <p>
        No matter if you are into Angular, React, jQuery, Backbone, Ember,
        Meteor, or just don't what this is all about...
      </p>
      <p>Everybody is welcome!</p>

      <p>
        After our first successful meeting on 1st August 2018, we would like to
        expand the variety of topics and prepared two talks.
      </p>

      <p>****</p>

      <p>Agenda will follow in the next days!</p>

      <p>Hope to see you!</p>

      <p>Timo & Martin</p> */}
    </div>
  )
}

const events = [
  {
    url: "https://www.meetup.com/de-DE/BonnJS/events/qjskvqyzgbhc/",
    date: "2019-04-25T19:00:00+02:00",
    title: "Meetup BonnJS",
    address: `Digital Hub Bonn
Rheinwerkallee 6
Bonn`,
    description: "",
  },
  {
    url: "https://www.meetup.com/de-DE/BonnJS/events/qjskvqyzhbfc/",
    date: "2019-05-23T19:00:00+02:00",
    title: "Meetup BonnJS",
    address: `Digital Hub Bonn
Rheinwerkallee 6
Bonn`,
    description: "",
  },
]

const Event = ({ date, title, address, url }) => {
  const dateObject = new Date(date)
  const dateString = dateObject.toLocaleDateString()
  const timeString = dateObject.toLocaleTimeString()
  dateObject.toString()
  return (
    <div className="event">
      <time datetime={date}>
        {dateString} {timeString}
      </time>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <address>
        {address.split(/$/m).map((line, i) => (
          <>
            {i !== 0 && <br />}
            {line}
          </>
        ))}
      </address>
      <DefaultText />
    </div>
  )
}

const Events = () => {
  return (
    <div id="events">
      <h2>Upcoming Events</h2>
      {events.map(event => (
        <Event key={event.url} {...event} />
      ))}
    </div>
  )
}

export default Events
