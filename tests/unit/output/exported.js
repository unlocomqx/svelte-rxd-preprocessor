export let half;
$: { let svrxd_start = Date.now(); let svrxd_exec = Math.random(); let start_state = eval("$$self.$capture_state()"); rxdDsp('SvelteReactiveStart', {statement: "half = count / 2;", filename: "", line: 0, id: "ABCD"}, svrxd_start, svrxd_exec, start_state); half = count / 2; rxdDsp('SvelteReactiveEnd', {statement: "half = count / 2;", filename: "", line: 0, id: "ABCD"}, svrxd_start, svrxd_exec, start_state, eval("$$self.$capture_state()")); }