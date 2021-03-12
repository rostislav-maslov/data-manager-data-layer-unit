
import {Act{{prefixUpperFirst}}{{dataNameFirstUpper}}Set} from "./{{dataNameFirstUpper}}Actions";
import {{prefixUpperFirst}} from "../base/{{prefixUpperFirst}}";

export default class {{dataNameFirstUpper}}UseCase{
    static set{{dataNameFirstUpper}} = ({{prefix}}Data: {{prefixUpperFirst}}, action: Act{{prefixUpperFirst}}{{dataNameFirstUpper}}Set):{{prefixUpperFirst}} => {
        let next = action.payload

        todo: напиши тут логику

        return {{prefix}}Data
    }
}