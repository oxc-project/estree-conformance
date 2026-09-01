__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SYMBOL",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 19
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 22,
                "end": 28
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 22,
              "end": 30
            },
            "definite": false,
            "start": 13,
            "end": 30
          }
        ],
        "declare": false,
        "start": 7,
        "end": 30
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 30
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Interface",
          "optional": false,
          "typeAnnotation": null,
          "start": 49,
          "end": 58
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SYMBOL",
                "optional": false,
                "typeAnnotation": null,
                "start": 73,
                "end": 79
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 82,
                  "end": 88
                },
                "start": 80,
                "end": 88
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 89
            }
          ],
          "start": 59,
          "end": 150
        },
        "declare": false,
        "start": 39,
        "end": 150
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 32,
      "end": 150
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "createInstance",
          "optional": false,
          "typeAnnotation": null,
          "start": 168,
          "end": 182
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Interface",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 195
            },
            "typeArguments": null,
            "start": 186,
            "end": 195
          },
          "start": 184,
          "end": 195
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SYMBOL",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 214,
                      "end": 220
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 223,
                      "end": 225
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 213,
                    "end": 225
                  }
                ],
                "start": 207,
                "end": 229
              },
              "start": 200,
              "end": 229
            }
          ],
          "start": 196,
          "end": 231
        },
        "expression": false,
        "start": 159,
        "end": 231
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 152,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 232
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "SYMBOL",
    "start": 13,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "Interface",
    "start": 49,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 63,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "SYMBOL",
    "start": 73,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 152,
    "end": 158
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 159,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 168,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "Interface",
    "start": 186,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 196,
    "end": 197
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 200,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "SYMBOL",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "String",
    "value": "''",
    "start": 223,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "createInstance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 23
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createInstance",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 23
          },
          "importKind": "value",
          "start": 9,
          "end": 23
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./bug",
        "raw": "'./bug'",
        "start": 31,
        "end": 38
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 38
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "spread",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 59
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "createInstance",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 83
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 69,
                    "end": 85
                  },
                  "start": 66,
                  "end": 85
                }
              ],
              "start": 62,
              "end": 88
            },
            "definite": false,
            "start": 53,
            "end": 88
          }
        ],
        "declare": false,
        "start": 47,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 9,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 26,
    "end": 30
  },
  {
    "type": "String",
    "value": "'./bug'",
    "start": 31,
    "end": 38
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 40,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "spread",
    "start": 53,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 66,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "createInstance",
    "start": 69,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 87,
    "end": 88
  }
]
```
