import { Person } from "../dto/person";
import { PaginatedResponse, http } from "../lib/http";

export async function getPeople() {
  const { data } = await http.get<PaginatedResponse<Person>>("/people");

  return data.results;
}
