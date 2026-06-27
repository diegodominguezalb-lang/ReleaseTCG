import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

        <Button>
          Publish Deck
        </Button>
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
          grid-cols-1
          gap-4
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {/* Placeholder Cards */}

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="
              rounded-xl
              border
              bg-card
              p-4
              shadow-sm
            "
          >
            <div className="aspect-[16/9] rounded-lg bg-muted" />

            <div className="mt-4 space-y-2">
              <div className="h-5 w-2/3 rounded bg-muted" />

              <div className="h-4 w-1/3 rounded bg-muted" />

              <div className="mt-4 h-16 rounded bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}