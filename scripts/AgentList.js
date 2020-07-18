

export const listAgentInfo = () => {

const targetArea = document.querySelector(".agents")

const renderAgents = purchasingAgents();

const putItemsOnDOM = renderAgents.forEach(
      agentObject => targetArea.innerHTML += agent(agentObject)

)

}
