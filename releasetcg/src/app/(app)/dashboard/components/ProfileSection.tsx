type ProfileSectionProps = {
  username: string;
  setUsername: (value: string) => void;

  draftUsername: string;
  setDraftUsername: (value: string) => void;

  bio: string;
  setBio: (value: string) => void;

  editingUsername: boolean;
  setEditingUsername: (value: boolean) => void;
}

export function ProfileSection({
    username,
    setUsername,
    draftUsername,
    setDraftUsername,
    bio,
    setBio,
    editingUsername,
    setEditingUsername,
    }: ProfileSectionProps) {
        return (
            <>
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
            </>
    );
}