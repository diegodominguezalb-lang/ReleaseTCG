import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: cards } = await supabase.from('cards').select()

  return (
    <>
      <h1>cards</h1>
      <ul>
        {cards?.length ? (
          cards.map((card) => <li key={card.id}>{card.name}</li>)
        ) : (
          <li>No cards found</li>
        )}
      </ul>
    </>
  )
}