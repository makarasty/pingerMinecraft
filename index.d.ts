namespace McServerStatus {
	interface Debug {
		ping: boolean;
		query: boolean;
		srv: boolean;
		querymismatch: boolean;
		ipinsrv: boolean;
		cnameinsrv: boolean;
		animatedmotd: boolean;
		cachehit: boolean;
		cachetime: number;
		cacheexpire: number;
		apiversion: number;
	}

	interface Protocol {
		version: number;
		name?: string;
	}

	interface Player {
		name: string;
		uuid: string;
	}

	interface Plugin {
		name: string;
		version: string;
	}

	interface Mod {
		name: string;
		version: string;
	}

	interface Info {
		raw: string[];
		clean: string[];
		html: string[];
	}

	interface Players {
		online: number;
		max: number;
		list?: Player[];
	}

	interface MotdData {
		raw: string[];
		clean: string[];
		html: string[];
	}

	interface ServerData {
		online: boolean;
		ip: string;
		port: number;
		hostname?: string;
		debug: Debug;
		version: string;
		protocol?: Protocol;
		icon?: string;
		software?: string;
		map: {
			raw: string;
			clean: string;
			html: string;
		};
		gamemode?: string;
		serverid?: string;
		eula_blocked?: boolean;
		motd: MotdData;
		players: Players;
		plugins?: Plugin[];
		mods?: Mod[];
		info?: Info;
	}
}

type mcsResponse = McServerStatus.ServerData;

export { mcsResponse };
