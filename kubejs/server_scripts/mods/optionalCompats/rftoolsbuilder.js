/**
 * Optional compat script for RFTools Builder
 */
if (Platform.isLoaded("rftoolsbuilder")) {
    console.log("RFTools Builder found, loading server compat scripts...")
    ServerEvents.recipes(event => {
        event.shaped("rftoolsbuilder:shape_card_def", [
            "PWP",
            "CWC",
            "PWP"
        ], {
            P: "#forge:plates/black_steel",
            W: "gtceu:fine_red_alloy_wire",
            C: "#gtceu:circuits/lv"
        }).id("rftoolsbuilder:shape_card_def")

        // copy_nbt keeps the configured shape from the input card
        event.custom({
            type: "mcjtylib:copy_nbt",
            pattern: [
                "EOE",
                "OMO",
                "BOB"
            ],
            key: {
                E: { tag: "forge:ender_pearls" },
                O: { tag: "forge:plates/obsidian" },
                B: { item: "gtceu:black_steel_plate" },
                M: { item: "rftoolsbuilder:shape_card_def" }
            },
            result: { item: "rftoolsbuilder:shape_card_void" }
        }).id("rftoolsbuilder:shape_card_void")

        event.custom({
            type: "mcjtylib:copy_nbt",
            pattern: [
                "PUP",
                "BMB",
                "PUP"
            ],
            key: {
                P: { item: "gtceu:steel_normal_fluid_pipe" },
                U: { item: "gtceu:lv_electric_pump" },
                B: { tag: "forge:plates/black_steel" },
                M: { item: "rftoolsbuilder:shape_card_def" }
            },
            result: { item: "rftoolsbuilder:shape_card_liquid" }
        }).id("rftoolsbuilder:shape_card_liquid")

        event.shaped("rftoolsbuilder:scanner", [
            "GEG",
            "SMS",
            "CWC"
        ], {
            G: "gtceu:tempered_glass",
            C: "#gtceu:circuits/hv",
            E: "gtceu:hv_emitter",
            S: "gtceu:hv_sensor",
            M: "rftoolsbase:machine_frame",
            W: "gtceu:gold_single_cable"
        }).id("rftoolsbuilder:scanner")

        event.shaped("rftoolsbuilder:builder", [
            "RWR",
            "FHF",
            "CWC"
        ], {
            R: "gtceu:hv_robot_arm",
            F: "gtceu:hv_field_generator",
            C: "#gtceu:circuits/hv",
            H: "rftoolsbase:machine_frame",
            W: "gtceu:gold_single_cable"
        }).id("rftoolsbuilder:builder")

        event.shaped("rftoolsbuilder:composer", [
            "GSG",
            "WHW",
            "CEC"
        ], {
            C: "#gtceu:circuits/hv",
            G: "gtceu:tempered_glass",
            E: "gtceu:hv_emitter",
            H: "rftoolsbase:machine_frame",
            S: "gtceu:hv_sensor",
            W: "gtceu:gold_single_cable"
        }).id("rftoolsbuilder:composer")

        event.shaped("rftoolsbuilder:projector", [
            "GFG",
            "EME",
            "CWC"
        ], {
            G: "gtceu:tempered_glass",
            C: "#gtceu:circuits/hv",
            F: "gtceu:hv_field_generator",
            E: "gtceu:hv_emitter",
            M: "rftoolsbase:machine_frame",
            W: "gtceu:gold_single_cable"
        }).id("rftoolsbuilder:projector")
    })
}
