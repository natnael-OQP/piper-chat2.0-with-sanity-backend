export const userQuery = (username: string) => {
	const query = `*[_type == "user" && userName == '${username}'][0]`;
	return query;
};
