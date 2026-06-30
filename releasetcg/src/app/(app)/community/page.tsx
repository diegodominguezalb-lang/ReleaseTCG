import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import PublishDeckDialog from "./components/PublishDeckDialog";
import CommunityDeckGrid from "./components/CommunityDeckGrid";

export default function CommunityPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 p-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Community Decks
          </h1>

          <p className="text-muted-foreground">
            Browse guides, discover new strategies, and share your own decks.
          </p>
        </div>

        <PublishDeckDialog />
      </div>

      {/* Search / Filters */}
      <div className="flex flex-wrap items-center gap-3">
        <Input
          placeholder="Search decks..."
          className="max-w-sm"
        />

        <Button variant="secondary">
          Newest
        </Button>

        <Button variant="ghost">
          Popular
        </Button>

        <Button variant="ghost">
          My Posts
        </Button>
      </div>

      {/* Community Feed */}
      <div
        className="
        grid
        gap-4
        [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]
        "
      >
        <CommunityDeckGrid />
      </div>
    </div>
  );
}