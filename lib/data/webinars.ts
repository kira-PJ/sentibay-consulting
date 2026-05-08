export type Webinar = {
  title: string;
  date: string;
  description: string;
  registrationUrl?: string;
  youtubeUrl?: string;
  isUpcoming: boolean;
};

export const webinars: Webinar[] = [];
// Populated when webinars are scheduled.
// Empty array triggers the "no upcoming sessions" fallback UI.
