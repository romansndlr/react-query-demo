import { useQuery } from "@tanstack/react-query";
import { Link, Outlet } from "react-router-dom";
import { getPeople } from "../services/get-people";
import { compact, flow, last } from "lodash";

export function Root() {
  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["todos"],
    queryFn: getPeople,
    placeholderData: [],
  });

  return (
    <div className="h-screen flex">
      <aside className="w-60 border-r border-gray-300 p-6">
        {isFetching && <p>Loading people...</p>}
        {isSuccess && (
          <nav className="flex flex-col gap-y-4">
            {data?.map((person) => {
              // they don't give you an id for some reason
              const id = flow(compact, last)(person.url.split("/"));

              if (!id) return null;

              return (
                <Link key={id} to={`/people/${id}`}>
                  {person.name}
                </Link>
              );
            })}
          </nav>
        )}
      </aside>
      <main className="p-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
}
