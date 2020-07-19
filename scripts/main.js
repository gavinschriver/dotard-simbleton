import { activeBusinesses } from "./BusinessList.js";
import { listNYBusinesses } from "./BusinessList.js";
import { listManufacturingCompanies } from "./BusinessList.js";
import { listAgentInfo} from "./AgentList.js"

const listActiveBusinesses = activeBusinesses()
const listOnlyNYBusinesses = listNYBusinesses()
const listOnlyManufacturingCompanies = listManufacturingCompanies()
const listAgents = listAgentInfo()
