import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
} from "@headlessui/react";
import clsx from "clsx";
import { FC, useState } from "react";
import Button from "./button";
import { Todo } from "../types/todo";

interface props {
  setOpen: (open: boolean) => void;
  editTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
  todo: Todo;
}

const Forms: FC<props> = ({ setOpen, todo, editTodo, addTodo }) => {
  const [destination, setDestination] = useState<string>();
  const [date, setDate] = useState<string>();
  const [fields, setFields] = useState<string[]>([""]);

  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  const handleRemoveField = (index: number) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const form = e.currentTarget as HTMLFormElement;
  //   const inputElement = form.elements.namedItem("addCity") as HTMLInputElement;
  //   const value = inputElement?.value.trim();
  //   if (value) {
  //     addTodo({
  //       id: Math.random().toString(),
  //       city: value,
  //     });
  //     inputElement.value = "";
  //   }
  // };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if ("add") {
    } else {
    }
  };
  return (
    <div className="w-full max-w-lg px-4">
      <Fieldset className="p-6 space-y-6 rounded-xl bg-white/5 sm:p-10">
        <Legend className="font-semibold text-white text-base/7">
          Edit travel plans
        </Legend>
        <Field>
          <Label className="font-medium text-white text-sm/6">
            Destination
          </Label>
          <Input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className={clsx(
              "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
              "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            )}
          />
        </Field>
        <Field>
          <Label className="font-medium text-white text-sm/6">Date</Label>

          <div className="relative">
            <Input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className={clsx(
                "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
              )}
            />
          </div>
        </Field>
        <Field>
          <Label className="font-medium text-white text-sm/6">Activities</Label>
          <Description className="text-sm/6 text-white/50">
            If you have a tiger, we'd like to know about it.
          </Description>
          <Button onClick={handleAddField} text="Add more activities" />
          {fields.map((activity, index) => (
            <div key={index} className="relative">
              <Input
                value={activity}
                onChange={(e) => {
                  const updatedFields = [...fields];
                  updatedFields[index] = e.target.value;
                  setFields(updatedFields);
                }}
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
              <Button onClick={() => handleRemoveField(index)} text="Remove" />
            </div>
          ))}
        </Field>
        <Button text="Save" type="submit" />
        <Button text="Cancel" onClick={setOpen(false)} />
      </Fieldset>
    </div>
  );
};
export default Forms;
