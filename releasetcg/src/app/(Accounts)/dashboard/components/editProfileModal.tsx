"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export function EditProfileModal({
  profile,
  onClose,
}: {
  profile: any;
  onClose: () => void;
}) {
  const [editingUsername, setEditingUsername] = useState(false);

  const [username, setUsername] = useState(
    profile.username ?? ""
  );

  const [draftUsername, setDraftUsername] = useState(
    profile.username ?? ""
  );

  const [bio, setBio] = useState(
    profile.bio ?? ""
  );

  const [saving, setSaving] = useState(false);

  const router = useRouter();

  async function save() {
    setSaving(true);

    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setSaving(false);
      return;
    }

    // this updates the user's information when they click save changes
    const { error } = await supabase
      .from("users")
      .update({
        username,
        bio,
      })
      .eq("id", user.id);

    setSaving(false);

    if (!error) {
      onClose();
      router.refresh();
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="mb-6 text-2xl font-bold">
          Edit Profile
        </h2>

        {/* Username Section */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Username
          </label>

          {!editingUsername ? (
            <div className="flex items-center gap-3">
              <span className="rounded-md border px-3 py-2">
                {username}
              </span>

              <button
                onClick={() =>
                  setEditingUsername(true)
                }
                className="rounded-md border px-3 py-2 text-sm"
              >
                Change
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <input
                value={draftUsername}
                onChange={(e) =>
                  setDraftUsername(e.target.value)
                }
                className="flex-1 rounded-md border px-3 py-2"
              />

              <button
                onClick={() => {
                  setUsername(
                    draftUsername.trim()
                  );
                  setEditingUsername(false);
                }}
                className="rounded-md bg-green-600 px-3 py-2 text-white"
              >
                Confirm
              </button>

              <button
                onClick={() => {
                  setDraftUsername(
                    username
                  );
                  setEditingUsername(false);
                }}
                className="rounded-md border px-3 py-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Bio Section */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium">
            Bio
          </label>

          <textarea
            value={bio}
            onChange={(e) =>
              setBio(e.target.value)
            }
            rows={4}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Tell other players about yourself..."
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md border px-4 py-2"
          >
            Cancel
          </button>

          <button
            onClick={save}
            disabled={saving}
            className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}