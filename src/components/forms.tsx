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
  todo: Todo | undefined;
}
//props för att kontrollera när modal ska öppnas och hantera todo i store
const Forms: FC<props> = ({ setOpen, todo, editTodo, addTodo }) => {
  const [destination, setDestination] = useState<string>();
  const [date, setDate] = useState<string>();
  const [fields, setFields] = useState<string[]>([""]);

  //Funktioner för att lägga till aktiviteter
  const handleAddField = () => {
    setFields([...fields, ""]);
  };

  //Funktion för att ta bort aktiviteter
  const handleRemoveField = (index: number) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  //Funktion för att spara eller redigera todo
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo) {
      if (destination && date && fields && fields.length > 0) {
        editTodo({
          id: Math.random().toString(),
          city: destination,
          date: date,
          activities: fields,
        });
      }
    } else {
      if (destination && date && fields && fields.length > 0) {
        addTodo({
          id: Math.random().toString(),
          city: destination,
          date: date,
          activities: fields,
        });
      } else {
        console.log("Please fill in all fields");
      }
    }
    setOpen(false);
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg px-4">
      <Fieldset className="p-6 space-y-6 rounded-xl bg-white/5 sm:p-10">
        <Legend className="font-semibold text-white text-base/7">
          Add travel plans
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
            If you have more than one activity, press add more activities.
          </Description>
          <Button onClick={handleAddField} text="Add more activities" />
          {fields.map((activity, index) => (
            <div key={index} className="relative py-3">
              <Label className="font-medium text-white text-sm/6">
                Activity
              </Label>
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
        <section className="flex justify-end gap-4">
          <Button text="Cancel" onClick={() => setOpen(false)} />
          <Button text="Save" type="submit" />
        </section>
      </Fieldset>
    </form>
  );
};
export default Forms;
