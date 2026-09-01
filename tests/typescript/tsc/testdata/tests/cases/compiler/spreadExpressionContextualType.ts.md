__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Orange",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 38
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 49
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 58
          }
        ],
        "start": 39,
        "end": 60
      },
      "declare": false,
      "start": 22,
      "end": 60
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Apple",
        "optional": false,
        "typeAnnotation": null,
        "start": 72,
        "end": 77
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 84,
              "end": 88
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 90,
                "end": 96
              },
              "start": 88,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 84,
            "end": 97
          }
        ],
        "start": 78,
        "end": 99
      },
      "declare": false,
      "start": 62,
      "end": 99
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 114
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 116
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Apple",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 130
                  },
                  "typeArguments": null,
                  "start": 125,
                  "end": 130
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Orange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 133,
                    "end": 139
                  },
                  "typeArguments": null,
                  "start": 133,
                  "end": 139
                }
              ],
              "start": 125,
              "end": 139
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 115,
            "end": 139
          }
        ],
        "start": 114,
        "end": 140
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 148
              },
              "typeArguments": null,
              "start": 147,
              "end": 148
            },
            "start": 145,
            "end": 148
          },
          "start": 141,
          "end": 148
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 151,
            "end": 152
          },
          "typeArguments": null,
          "start": 151,
          "end": 152
        },
        "start": 149,
        "end": 152
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
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 171,
                    "end": 175
                  },
                  "start": 168,
                  "end": 175
                }
              ],
              "start": 166,
              "end": 177
            },
            "start": 159,
            "end": 178
          }
        ],
        "start": 153,
        "end": 180
      },
      "expression": false,
      "start": 101,
      "end": 180
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 191,
        "end": 196
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 197,
              "end": 198
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Apple",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 207,
                    "end": 212
                  },
                  "typeArguments": null,
                  "start": 207,
                  "end": 212
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Orange",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 215,
                    "end": 221
                  },
                  "typeArguments": null,
                  "start": 215,
                  "end": 221
                }
              ],
              "start": 207,
              "end": 221
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 197,
            "end": 221
          }
        ],
        "start": 196,
        "end": 222
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 230
              },
              "typeArguments": null,
              "start": 229,
              "end": 230
            },
            "start": 227,
            "end": 230
          },
          "start": 223,
          "end": 230
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 234
          },
          "typeArguments": null,
          "start": 233,
          "end": 234
        },
        "start": 231,
        "end": 234
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 248
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "SpreadElement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 256,
                        "end": 260
                      },
                      "start": 253,
                      "end": 260
                    }
                  ],
                  "start": 251,
                  "end": 262
                },
                "definite": false,
                "start": 247,
                "end": 262
              }
            ],
            "declare": false,
            "start": 241,
            "end": 263
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 276
            },
            "start": 268,
            "end": 277
          }
        ],
        "start": 235,
        "end": 279
      },
      "expression": false,
      "start": 182,
      "end": 279
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 279
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 22,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Orange",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 45,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 51,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 62,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "Apple",
    "start": 72,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 84,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 90,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 101,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 114,
    "end": 115
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 117,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Apple",
    "start": 125,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "Orange",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 141,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 159,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 182,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 199,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Apple",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "Orange",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 223,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 229,
    "end": 230
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 231,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 235,
    "end": 236
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 241,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 268,
    "end": 274
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  }
]
```
