"use client";

import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteInvoice, State } from "@/app/lib/actions";
import { useActionState } from "react";

export function DeleteInvoice({ id }: { id: string }) {
  const initialState: State = { message: "", errors: {} };
  const [state, formAction] = useActionState(
    deleteInvoice.bind(null, id),
    initialState as { message: string },
  );

  return (
    <form action={formAction}>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
    </form>
  );
}
