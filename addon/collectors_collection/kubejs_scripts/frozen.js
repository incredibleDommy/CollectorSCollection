StartupEvents.registry('mob_effect', event => {
    event.create('frozen')
    .color(0xb0fff7)
    .harmful()
    .modifyAttribute(
        'minecraft:generic.movement_speed',
        'e6bcd4b8-d940-4a43-807e-c5494d724d5e',
        -5,
        'multiply_base'
    )
    .modifyAttribute(
        'palladium:flight_speed',
        '154bfade-06a7-49d8-a894-16ac0f8c981a',
        -10.0, 'multiply_base'
    )
    .modifyAttribute(
        'palladium:levitation_speed',
        '340f2a2b-170d-43bc-83cb-ebd14d9af2f4',
        -10.0, 'multiply_base'
    )
    .modifyAttribute(
        'forge:entity_gravity',
        '6deb59dc-f88f-44ef-b46a-958f51ed0182',
        2, 'multiply_base'
    )
    .modifyAttribute(
        'minecraft:generic.mining_efficiency',
        'e6bcd4b8-d940-4a43-807e-c5494d724d5e',
        -10,
        'multiply_base'
    )
})