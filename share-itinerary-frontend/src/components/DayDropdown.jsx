import React, { useState } from "react";
import { DatePicker, Button, useDisclosure, Chip } from "@nextui-org/react";
import Activity from "./Activity";

const DayDropdown = () => {
  const [activities, setActivities] = useState([{ id: 0, isOpen: false }]);
  const { onOpenChange } = useDisclosure(); // Use this to manage global modal state

  const handleAddActivity = () => {
    setActivities([...activities, { id: activities.length, isOpen: false }]);
  };

  const handleOpenModal = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, isOpen: true } : activity
      )
    );
  };

  const handleCloseModal = (id) => {
    setActivities(
      activities.map((activity) =>
        activity.id === id ? { ...activity, isOpen: false } : activity
      )
    );
  };

  const handleRemoveActivity = (id) => {
    const updatedActivities = activities
      .filter((activity) => activity.id !== id)
      .map((activity, index) => ({
        ...activity,
        id: index, // Reassign IDs based on the new order
      }));
    setActivities(updatedActivities);
  };

  return (
    <>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex items-center gap-2 w-full">
          {/* DatePicker with button on the right */}
          <DatePicker label="Date" className="flex-1" />
          <Button onPress={handleAddActivity} color="primary">
            Add Activity
          </Button>
        </div>

        {/* Chips to represent activities, arranged in rows */}
        <div className="flex flex-wrap gap-2">
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex-shrink-0">
              <Chip
                color="primary"
                onClose={() => handleRemoveActivity(activity.id)}
                onClick={() => handleOpenModal(activity.id)}
                className="flex items-center gap-2"
              >
                Activity {activity.id + 1}
              </Chip>
              <Activity
                index={activity.id}
                isOpen={activity.isOpen}
                onOpenChange={() => handleCloseModal(activity.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DayDropdown;
