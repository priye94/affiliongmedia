import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function Admin() {
  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <div className="p-10 text-red-400">
        Failed to load leads
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Leads Dashboard</h1>
      <p className="text-gray-400 mb-6">
        Manage all incoming client inquiries
      </p>

      {leads && leads.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="bg-slate-800 p-5 rounded-xl border border-slate-700"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">
                  {lead.name}
                </h2>
                <span className="text-xs bg-green-600 px-2 py-1 rounded">
                  New Lead
                </span>
              </div>

              <p className="text-sm text-gray-300">
                📞 {lead.phone}
              </p>

              <p className="text-sm text-gray-300">
                ✉️ {lead.email}
              </p>

              <p className="mt-2 text-gray-400">
                {lead.message}
              </p>

              <p className="mt-3 text-xs text-gray-500">
                {new Date(lead.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-slate-800 p-6 rounded-xl text-gray-400">
          No leads found yet.
        </div>
      )}
    </div>
  );
}