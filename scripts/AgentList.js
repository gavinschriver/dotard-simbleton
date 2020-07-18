import {purchasingAgents} from "./BusinessProvider.js"
import {agent} from "./Agent.js"

export const listAgentInfo = () => {

const targetArea = document.querySelector(".agents")

const renderAgents = purchasingAgents();

targetArea.innerHTML += `<h2 class=listHeader>Purchasing Agents</h2>`

renderAgents.forEach(
      agentObject => targetArea.innerHTML += agent(agentObject)

)

}
