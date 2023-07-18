import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getPerson } from "../services/get-person";
import invariant from "tiny-invariant";

export function Person() {
  const params = useParams();

  const personId = params.personId;

  invariant(personId, "personId must exist in the params");

  const { data, isFetching, isSuccess } = useQuery({
    queryKey: ["todos", personId],
    queryFn: () => getPerson(personId),
  });

  return (
    <div>
      {isFetching && <p>Loading person...</p>}
      {isSuccess && (
        <pre className="bg-gray-300 shadow rounded-lg p-6 w-full">
          <code>{JSON.stringify(data, undefined, 2)}</code>
        </pre>
      )}
    </div>
  );
}
