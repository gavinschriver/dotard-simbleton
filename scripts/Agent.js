export const agent = (agentObject) => {
    return `
        <section class=list--item>
            <h3 class=agent__name>${agentObject.agentName}</h3>
            <div class=agent__company>${agentObject.agentCompany}</div>
            <div class=agent__phone>${agentObject.agentPhoneNumber}</div>
        </section>
    `
};