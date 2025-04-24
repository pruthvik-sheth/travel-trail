import React from "react";
import {
  Autocomplete,
  AutocompleteItem,
  Input,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";
import { animals } from "../data/data";

const Activity = ({ key, isOpen, index, onOpenChange }) => {
  return (
    <>
      <Modal
        key={key}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Activity {index + 1}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4 items-start w-full">
                  {/* Full-width inputs */}
                  <Input label="Name" className="w-full" />
                  <Input label="Description" className="w-full" />

                  {/* Full-width autocomplete */}
                  <Autocomplete
                    defaultItems={animals}
                    label="Location"
                    placeholder="Search a place"
                    className="w-full"
                  >
                    {(animal) => (
                      <AutocompleteItem key={animal.value}>
                        {animal.label}
                      </AutocompleteItem>
                    )}
                  </Autocomplete>

                  {/* Full-width file input */}
                  <Input type="file" label="Images" className="w-full" />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Activity;
