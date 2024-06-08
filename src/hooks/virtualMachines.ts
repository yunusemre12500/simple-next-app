import { VirtualMachine } from "@/types/VirtualMachine";
import { useState } from "react";

export function useVirtualMachinesStore(initialValues: VirtualMachine[]) {
	let [virtualMachines, setVirtualMachines] = useState([...initialValues]);

	function add(virtualMachine: VirtualMachine) {
		setVirtualMachines((oldVirtualMachines) => {
			return [...oldVirtualMachines, virtualMachine];
		});
	}

	function list() {
		return virtualMachines;
	}

	return {
		add,
		list
	};
}
