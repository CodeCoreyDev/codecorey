import { createFileRoute } from '@tanstack/react-router'
import { useKonamiCode } from '~/hooks/useKonamiCode';
import { getProgress } from '~/utils/progress';
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  useKonamiCode(() => {
    alert('🎉 You unlocked the "glitch" theme!');
  });

  const unlocked = getProgress();

  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      {unlocked.length === 0 ? (
            <li>None yet</li>
          ) : (
            unlocked.map((theme) => <li key={theme}>{theme}</li>)
      )}
    </div>
  )
}
