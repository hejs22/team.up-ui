import { apiClient } from './ApiClient';
import { CreateSportEventRequestWithDisciplineId, SportEvent } from '@shared/types/Events';

export const addEvent = async (
  requestWithDisciplineId: CreateSportEventRequestWithDisciplineId
) => {
  const { sportDisciplineId, ...request } = requestWithDisciplineId;
  const { data } = await apiClient.post<SportEvent>(`/sports/${sportDisciplineId}/events`, request);
  return data;
};

export const getEventsFromDiscipline = async (disciplineId: string) => {
  const { data } = await apiClient.get<SportEvent[]>(`/sports/${disciplineId}/events`);
  return data.slice();
};
