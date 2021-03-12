
interface {{dataNameFirstUpper}}{
    {{#fields}}
    {{name}}: {{type}},
    {{/fields}}
}

export const {{dataNameFirstUpper}}Init:{{dataNameFirstUpper}} = {
        {{#fields}}
        {{name}}: {{init}},
        {{/fields}}
}

export default {{dataNameFirstUpper}};
