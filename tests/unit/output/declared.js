let triple;
$: { let svrxd_start = Date.now(); let svrxd_exec = Math.random(); let start_state = eval("$$self.$capture_state()"); rxdDsp('SvelteReactiveStart', {statement: "triple = count * 3;", filename: "", line: 0, id: "ABCD"}, svrxd_start, svrxd_exec, start_state); triple = count * 3; rxdDsp('SvelteReactiveEnd', {statement: "triple = count * 3;", filename: "", line: 0, id: "ABCD"}, svrxd_start, svrxd_exec, start_state, eval("$$self.$capture_state()")); }