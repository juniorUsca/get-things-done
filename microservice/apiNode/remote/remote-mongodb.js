import { createRemoteDB as remote } from './remote';
import { config } from '../config'

const store = remote(config.mongodbService.host, config.mongodbService.port);

export default store;