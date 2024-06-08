import { VirtualMachine } from "@/types/VirtualMachine";
import propTypes from "prop-types";

export interface VirtualMachinesTableProps {
	virtualMachines: VirtualMachine[];
}

function VirtualMachinesTable({ virtualMachines }: VirtualMachinesTableProps): JSX.Element {
	return (
		<>
			<table border={1}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Status</th>
						<th>Created At</th>
					</tr>
				</thead>

				<tbody>
					{virtualMachines.map((virtualMachine) => {
						return (
							<tr key={virtualMachine.id}>
								<td>{virtualMachine.id}</td>
								<td>{virtualMachine.name}</td>
								<td
									style={{
										color: virtualMachine.status === "stopped" ? "red" : "green"
									}}>
									{virtualMachine.status}
								</td>
								<td>{virtualMachine.createdAt}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

VirtualMachinesTable.propTypes = {
	virtualMachines: propTypes.arrayOf(
		propTypes.shape({
			id: propTypes.string.isRequired,
			name: propTypes.string.isRequired,
			status: propTypes.string.isRequired,
			createdAt: propTypes.string.isRequired
		}).isRequired
	).isRequired
};

export default VirtualMachinesTable;
