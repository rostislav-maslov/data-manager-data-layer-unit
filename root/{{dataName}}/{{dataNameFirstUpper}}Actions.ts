import {{dataNameFirstUpper}} from "./{{dataNameFirstUpper}}";
import {ACT_{{prefixUpper}}_{{dataNameUpper}}_SET} from "./{{dataNameFirstUpper}}ActionsTypes";

export interface Act{{prefixUpperFirst}}{{dataNameFirstUpper}}Set {
    type: typeof ACT_{{prefixUpper}}_{{dataNameUpper}}_SET
    payload: {{dataNameFirstUpper}}
}

export const Set{{dataNameFirstUpper}}Func = ({{dataName}}: {{dataNameFirstUpper}}):Act{{prefixUpperFirst}}{{dataNameFirstUpper}}Set => ({
    type: ACT_{{prefixUpper}}_{{dataNameUpper}}_SET,
    payload: {{dataName}}
});
