export function assert_keys<Val extends unknown = unknown>(
	obj:Record<string, Val>,
	_failure:((value:any, key:string)=>false|string) =
		(value:any, key:string)=>
			!value && `${key} is not present`
) {
	const failures:Record<string, string> = {}
	let has_failure
	for (let key in obj) {
		const failure = _failure(obj[key], key)
		if (failure) {
			has_failure = true
			failures[key] = failure
		}
	}
	if (has_failure) {
		console.trace(failures)
		throw failures
	}
}
export {
	assert_keys as assert__keys
}
