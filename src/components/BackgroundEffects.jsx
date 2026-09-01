export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-grid opacity-80" />
      <div
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full blur-[110px]"
        style={{ background: 'var(--orb-1)' }}
      />
      <div
        className="absolute top-1/3 -right-28 h-[380px] w-[380px] rounded-full blur-[100px]"
        style={{ background: 'var(--orb-2)' }}
      />
      <div
        className="absolute bottom-10 left-1/4 h-[320px] w-[320px] rounded-full blur-[90px]"
        style={{ background: 'var(--orb-3)' }}
      />
    </div>
  )
}
