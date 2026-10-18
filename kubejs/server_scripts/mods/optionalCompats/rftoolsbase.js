/**
 * Optional compat script for RFTools Base
 */
if (Platform.isLoaded("rftoolsbase")) {
    console.log("RFTools Base found, loading server compat scripts...")
    ServerEvents.recipes(event => {
        // Remove all recipes from RFToolsBase
        event.remove({ mod: "rftoolsbase" })

        event.recipes.gtceu.alloy_smelter("rftools_machine_frame")
            .itemInputs("gtceu:hv_machine_hull", "8x rftoolsbase:dimensionalshard")
            .itemOutputs("rftoolsbase:machine_frame")
            .duration(200)
            .EUt(GTValues.VA[GTValues.LV])

        event.shaped("rftoolsbase:machine_infuser", [
            "ECE",
            "RHR",
            "WCW"
        ], {
            E: "gtceu:ev_emitter",
            C: "#gtceu:circuits/ev",
            R: "gtceu:ev_robot_arm",
            H: "rftoolsbase:machine_frame",
            W: "gtceu:aluminium_single_cable"
        })

        event.recipes.gtceu.autoclave("dimensional_shard")
            .itemInputs("#forge:dusts/ender_eye", "4x monilabs:quantum_flux")
            .inputFluids("gtceu:nether_star 9")
            .itemOutputs("4x rftoolsbase:dimensionalshard")
            .duration(25)
            .EUt(GTValues.VA[GTValues.HV])

        // Add back in RFTools' information screen for the funsies
        event.shapeless("rftoolsbase:information_screen", ["gtceu:computer_monitor_cover"]);
        event.shapeless("gtceu:computer_monitor_cover", ["rftoolsbase:information_screen"]);

        // Add back in RFTools' Filter Module because of its functionality with XNet and the Builder
        event.shaped("rftoolsbase:filter_module", [
            " P ",
            "RHR",
            " I "
        ], {
            P: "#forge:paper",
            R: "#forge:dusts/redstone",
            H: "minecraft:hopper",
            I: "#forge:plates/steel"
        })
    })
}
