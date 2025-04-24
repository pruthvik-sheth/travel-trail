import React, { useState } from "react";
import { Card, CardBody, Input, Button } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";

export default function Login() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="flex h-full w-full items-center justify-center p-4 sm:p-8">
      {/* Make the card slightly taller on smaller screens */}
      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto p-4 sm:p-6 md:p-8 shadow-lg min-h-[60vh] sm:min-h-[50vh]">
        {/* Center elements and add responsive spacing */}
        <CardBody className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-8">
          {/* Slightly increase input height for smaller screens */}
          <Input
            type="email"
            variant="bordered"
            label="Email"
            size="lg"
            fullWidth
          />
          <Input
            label="Password"
            variant="bordered"
            size="lg"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            fullWidth
          />
          {/* Adjust button height slightly for smaller screens */}
          <Button
            color="primary"
            fullWidth
            className="h-10 sm:h-12 text-md font-semibold"// Adjust button height
          >
            Login
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
