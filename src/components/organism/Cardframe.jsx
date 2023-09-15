import Card from "../molecules/card.jsx";

function Cardframe(props) {
  // Destructure the properties
  const { temperature, location, humidity, windSpeed } = props;

  // Create an array of objects with the data required by the Card component
  const cardData = [
    {
      temperature: 25, // Reemplaza con el valor que desees
      location: "City A", // Reemplaza con la ubicación que desees
      humidity: 50, // Reemplaza con el valor de humedad que desees
      windSpeed: 10, // Reemplaza con la velocidad del viento que desees
    },
    {
      temperature: 28,
      location: "City B",
      humidity: 45,
      windSpeed: 12,
    },
    {
      temperature: 22,
      location: "City C",
      humidity: 60,
      windSpeed: 8,
    },
    {
      temperature: 30,
      location: "City D",
      humidity: 55,
      windSpeed: 14,
    },
    {
      temperature: 26,
      location: "City E",
      humidity: 48,
      windSpeed: 11,
    },
  ];

    return (
        <>
          {cardData.map((card, index) => (
            <Card
              key={index}
              temperature={card.temperature}
              location={card.location}
              humidity={card.humidity}
              windSpeed={card.windSpeed}
            />
          ))}
        </>
  );
}

export default Cardframe;
