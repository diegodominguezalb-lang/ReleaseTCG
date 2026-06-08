import { createClient } from '@/utils/supabase/server'

export default async function Page() {
  const supabase = await createClient()

  const { data: cards, error } = await supabase
    .from('cards')
    .select()

  if (error) {
    console.error(error)
  }

  return (
    <>
      <h1>cards</h1>
      <ul>
        {cards?.length ? (
          cards.map((card) => (
            <li key={card.id}>{card.name}</li>
          ))
        ) : (
          <li>No cards found</li>
        )}
      </ul>
    </>
  )
}