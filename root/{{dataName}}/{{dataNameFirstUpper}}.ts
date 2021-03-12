
interface {{dataNameFirstUpper}}{
    {{#fields}}
    {{name}}: {{type1}},
    {{/fields}}
}

export const {{dataNameFirstUpper}}Init:{{dataNameFirstUpper}} = {
        {{#fields}}
        {{name}}: {{init1}},
        {{/fields}}
}

export default {{dataNameFirstUpper}};
