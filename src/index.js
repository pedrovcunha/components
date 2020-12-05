import React from "react";
import ReactDOM from "react-dom";
import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at 3:00PM"
					text="Hey, it was super!"
					avatar="https://source.unsplash.com/random"
				/>
			</ApprovalCard>
			<ApprovalCard>
            <CommentDetail
				author="Pedro"
				timeAgo="Today at 1:00PM"
				text="Woww, congrats!"
				avatar="https://source.unsplash.com/random"
			/>
            </ApprovalCard>
			<ApprovalCard>
            <CommentDetail
				author="Fran"
				timeAgo="Yesterday at 4:00PM"
				text="Done!"
				avatar="https://source.unsplash.com/random"
			/>
            </ApprovalCard>
		</div>
	);
};

ReactDOM.render(
	<App />,
	document.querySelector("#root")
);
