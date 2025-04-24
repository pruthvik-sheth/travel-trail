import React, { useState } from "react";
import {
  Card,
  Input,
  Button,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import DayDropdown from "../components/DayDropdown";

export default function CreateItinerary() {
  const [startPoint, setStartPoint] = useState("");
  const [destination, setDestination] = useState("");
  const [numDays, setNumDays] = useState(1);

  const handleCreateItinerary = () => {
    console.log("Creating itinerary for:", startPoint, "to", destination);
    // Add your itinerary creation logic here
  };

  const handleDaysChange = (e) => {
    setNumDays(Number(e.target.value) || 1); // Ensure it's a number and default to 1
  };

  return (
    <div className="flex h-full w-full">
      <div className="flex-1 p-4">
        <Card className="h-full overflow-auto" id="input">
          <div className="flex flex-col gap-4 p-4">
            <Input
              label="Name"
              value={startPoint}
              onChange={(e) => setStartPoint(e.target.value)}
            />
            <Input
              label="Summary"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Input
              type="number"
              label="No. of days"
              value={numDays}
              onChange={handleDaysChange}
            />
            <Accordion>
              {Array.from({ length: numDays }, (_, index) => (
                <AccordionItem
                  key={index + 1}
                  aria-label={`Day ${index + 1}`}
                  title={`Day ${index + 1}`}
                >
                  <DayDropdown />
                </AccordionItem>
              ))}
            </Accordion>
            <Button color="primary" onClick={handleCreateItinerary}>
              Create Itinerary
            </Button>
          </div>
        </Card>
      </div>
      <div className="flex-1 p-4">
        <Card className="h-full" id="map">
          <div className="h-full flex items-center justify-center text-2xl font-bold text-gray-400">
            Map
          </div>
        </Card>
      </div>
    </div>
  );
}
