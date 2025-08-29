declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      parameters?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any;
      }
    ) => void;
  }
}

export {}
