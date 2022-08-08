export class Analytics {
  _id: string;
  user_id: string;
  user_history: {
    _id: string,
    timestamp: number,
    ip: string,
    visited_url: string,
    actions: any
  }[];
}