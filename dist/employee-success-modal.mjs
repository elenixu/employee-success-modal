import { Box as e, Button as t, Modal as n, Paper as r, Typography as i } from "@mui/material";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/EmployeeModal.jsx
function s({ open: s, onClose: c, onConfirm: l }) {
	return /* @__PURE__ */ a(n, {
		open: s,
		onClose: c,
		children: /* @__PURE__ */ o(r, {
			sx: {
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				width: 350,
				p: 4,
				textAlign: "center",
				borderRadius: 2
			},
			children: [
				/* @__PURE__ */ a(i, {
					variant: "h5",
					gutterBottom: !0,
					children: "Employee Created!"
				}),
				/* @__PURE__ */ a(i, {
					sx: { mb: 3 },
					children: "The employee has been added successfully."
				}),
				/* @__PURE__ */ o(e, {
					sx: {
						display: "flex",
						justifyContent: "center",
						gap: 2
					},
					children: [/* @__PURE__ */ a(t, {
						variant: "outlined",
						onClick: c,
						children: "Close"
					}), /* @__PURE__ */ a(t, {
						variant: "contained",
						onClick: l,
						children: "View Employees"
					})]
				})
			]
		})
	});
}
//#endregion
export { s as default };
