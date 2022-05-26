export interface HelferleinPlugin {

  echo(options: { value: string }): Promise<{ value: string }>;

  holeUptime(): Promise<{ value: string }>;
  loggeNachricht(options: { loglevel: string, nachricht: string }): void;

}
