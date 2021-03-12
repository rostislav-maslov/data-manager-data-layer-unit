import {Act{{prefixUpperFirst}}{{dataNameFirstUpper}}Set} from "./{{dataNameFirstUpper}}Actions";
import DataNameFirstUpperUseCase from "./{{dataNameFirstUpper}}UseCase";
import {{prefixUpperFirst}}, { {{prefixUpperFirst}}Init } from "../base/{{prefixUpperFirst}}";
import {ACT_{{dataNameFirstUpper}}_{{dataNameUpper}}_SET} from "./{{dataNameFirstUpper}}ActionsTypes";

export default function {{dataNameFirstUpper}}Reducer({{prefix}}:{{prefixUpperFirst}} = {{prefixUpperFirst}}Init, action: Act{{prefixUpperFirst}}{{dataNameFirstUpper}}Set):{{prefixUpperFirst}} {
    switch (action.type) {
        case ACT_{{dataNameFirstUpper}}_{{dataNameUpper}}_SET:
            return DataNameFirstUpperUseCase.set{{dataNameFirstUpper}}({{prefix}}, action)
        default:
            return {{prefix}}
    }
}
