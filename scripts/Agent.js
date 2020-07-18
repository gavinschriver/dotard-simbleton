export const agent = (agentObject) => {
    return `
        <section class=agent>
            <div class=agent__name>${agentObject.agentName}</div>
            <div class=agent__company>${agentObject.agentCompany}</div>
            <div class=agent__phone>${agentObject.agentPhoneNumber}</div>
        </section>
    `
};