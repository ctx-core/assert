export declare function keys__assert<
	Val extends unknown = unknown
>(
	obj:Record<string, Val>, _failure?:((value:any, key:string)=>false|string)
):void
export {
	keys__assert as assert_keys,
	keys__assert as assert__keys,
}
