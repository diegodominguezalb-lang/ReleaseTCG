"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  onDelete: () => void;
};

export default function DeletePostDialog({
  onDelete,
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          className="
            rounded-md
            border
            border-red-500
            px-3
            py-2
            text-sm
            text-red-500
            hover:bg-red-500/10
          "
        >
          Delete Post
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete this post?
          </AlertDialogTitle>

          <AlertDialogDescription>
            This action cannot be undone.
            Your community deck and guide will be
            permanently deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            onClick={onDelete}
            className="bg-red-600 hover:bg-red-700"
          >
            Delete Post
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}