export function keys__assert(
	obj, _failure = (value, key)=>!value && `${key} is not present`
) {
	const failures = {}
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
	keys__assert as assert_keys,
	keys__assert as assert__keys,
}
