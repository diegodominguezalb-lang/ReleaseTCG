type Props = {
  trait: string;
  effect1: string;
  effect2: string;
  flavor_text: string;
};

export function CardEffects({
  trait,
  effect1,
  effect2,
  flavor_text,
}: Props) {
  return (
    <section className="space-y-2">

      <h3 className="text-lg font-semibold">
        Card Text
      </h3>

      {trait && (
        <div>
          <h4 className="font-semibold">
            Trait
          </h4>

          <p className="whitespace-pre-wrap">
            {trait}
          </p>
        </div>
        
      )}

      {effect1 && (
        <div>
          <h4 className="font-semibold">
            Effect 1
          </h4>

          <p className="whitespace-pre-wrap">
            {effect1}
          </p>
        </div>
      )}

      {effect2 && (
        <div>
          <h4 className="font-semibold">
            Effect 2
          </h4>

          <p className="whitespace-pre-wrap">
            {effect2}
          </p>
        </div>
      )}
    </section>
  );
}