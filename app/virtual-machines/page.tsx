import VirtualMachinesMockData from "@/mocks/virtualMachines.json";
import VirtualMachinesTable from "@/src/components/VirtualMachinesTable";

export default function VirtualMachines(): JSX.Element {
	return <VirtualMachinesTable virtualMachines={VirtualMachinesMockData} />;
}
