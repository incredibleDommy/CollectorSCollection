StartupEvents.registry('item', event => {
    event.create('blood_of_ymir').food(food => {
        food
        .hunger(2)
        .saturation(0.3)
        .effect('kubejs:jotuns_strength', 3600, 0, 0)
        .alwaysEdible()
        .fastToEat()
        .eaten(ctx => {
            ctx.player.server.runCommandSilent(`superpower add collectors_collections:blood_of_ymir ${ctx.player.name}`)
        })
    })
})