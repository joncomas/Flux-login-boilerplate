const getState = ({ getStore, setStore }) => {
	return {
		store: {
			submitted: {
				userName: "",
				passWord: null
			},
			holder: {}
		},
		actions: {
			getInfo: e => {
                const store = getStore();
				const userName = e.target.userName;
				

                let oldStore = store.submitted;
                oldStore[userName] = e.target.value;
                setStore({ submitted: oldStore });
			},
			submitter: i => {
				let oldStore = i
				setStore({holder: oldStore})
			}

		}
	};
};

export default getState;
