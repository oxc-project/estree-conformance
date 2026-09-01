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
              "name": "SYM",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 72
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null,
                "start": 75,
                "end": 81
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "a unique symbol",
                  "raw": "'a unique symbol'",
                  "start": 82,
                  "end": 99
                }
              ],
              "optional": false,
              "start": 75,
              "end": 100
            },
            "definite": false,
            "start": 69,
            "end": 100
          }
        ],
        "declare": false,
        "start": 63,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 56,
      "end": 101
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 121
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
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "SYM",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 130
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "sym",
                    "raw": "'sym'",
                    "start": 133,
                    "end": 138
                  },
                  "start": 133,
                  "end": 138
                },
                "start": 131,
                "end": 138
              },
              "accessibility": null,
              "static": false,
              "start": 126,
              "end": 139
            },
            {
              "type": "TSIndexSignature",
              "parameters": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 146,
                      "end": 152
                    },
                    "start": 144,
                    "end": 152
                  },
                  "start": 143,
                  "end": 152
                }
              ],
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "str",
                    "raw": "'str'",
                    "start": 155,
                    "end": 160
                  },
                  "start": 155,
                  "end": 160
                },
                "start": 153,
                "end": 160
              },
              "readonly": false,
              "static": false,
              "accessibility": null,
              "start": 142,
              "end": 161
            }
          ],
          "start": 122,
          "end": 163
        },
        "declare": false,
        "start": 110,
        "end": 163
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 103,
      "end": 163
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 172,
                  "end": 173
                },
                "typeArguments": null,
                "start": 172,
                "end": 173
              },
              "start": 170,
              "end": 173
            },
            "start": 169,
            "end": 173
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 178,
                  "end": 181
                },
                "value": {
                  "type": "Literal",
                  "value": "sym",
                  "raw": "'sym'",
                  "start": 184,
                  "end": 189
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 177,
                "end": 189
              }
            ],
            "start": 176,
            "end": 190
          },
          "definite": false,
          "start": 169,
          "end": 190
        }
      ],
      "declare": false,
      "start": 165,
      "end": 191
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 212,
                  "end": 213
                },
                "typeArguments": null,
                "start": 212,
                "end": 213
              },
              "start": 210,
              "end": 213
            },
            "start": 209,
            "end": 213
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SYM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 221
                },
                "value": {
                  "type": "Literal",
                  "value": "str",
                  "raw": "'str'",
                  "start": 224,
                  "end": 229
                },
                "method": false,
                "shorthand": false,
                "computed": true,
                "optional": false,
                "start": 217,
                "end": 229
              }
            ],
            "start": 216,
            "end": 230
          },
          "definite": false,
          "start": 209,
          "end": 230
        }
      ],
      "declare": false,
      "start": 205,
      "end": 231
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 247
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 56,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 63,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "SYM",
    "start": 69,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 75,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 81,
    "end": 82
  },
  {
    "type": "String",
    "value": "'a unique symbol'",
    "start": 82,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 103,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 110,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "SYM",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "String",
    "value": "'sym'",
    "start": 133,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 155,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 162,
    "end": 163
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 165,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "SYM",
    "start": 178,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "String",
    "value": "'sym'",
    "start": 184,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 205,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "SYM",
    "start": 218,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 222,
    "end": 223
  },
  {
    "type": "String",
    "value": "'str'",
    "start": 224,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231
  }
]
```
