import { Person } from "../dto/person";
import { http } from "../lib/http";

export async function getPerson(personId: string) {
  const { data } = await http.get<Person>(`/people/${personId}`);

  return data;
}
