export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-blue-600">
            RVIT ERP
          </p>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-900">
            Foundation phase is in progress
          </h1>
          <p className="max-w-2xl text-base text-slate-600">
            This Next.js app is the starting point for a role-aware ERP experience covering
            Super Admin, Admin, Facility, and Student workflows.
          </p>
        </div>
      </div>
    </main>
  );
}
