export interface SpeedTest {
  id: number;
  serverId: number;
  sponsor: string;
  serverName: string;
  timestamp: string;
  distance: number;
  ping: number;
  download: number;
  upload: number;
  share: string;
  ipAddress: string;
}

