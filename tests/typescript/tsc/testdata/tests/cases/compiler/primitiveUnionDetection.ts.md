__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Kind",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 31
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "one",
              "raw": "\"one\"",
              "start": 34,
              "end": 39
            },
            "start": 34,
            "end": 39
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "two",
              "raw": "\"two\"",
              "start": 42,
              "end": 47
            },
            "start": 42,
            "end": 47
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "three",
              "raw": "\"three\"",
              "start": 50,
              "end": 57
            },
            "start": 50,
            "end": 57
          }
        ],
        "start": 34,
        "end": 57
      },
      "declare": false,
      "start": 22,
      "end": 58
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getInterfaceFromString",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 99
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 100,
              "end": 101
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 114
              },
              "typeArguments": null,
              "start": 110,
              "end": 114
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 100,
            "end": 114
          }
        ],
        "start": 99,
        "end": 115
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 128,
                        "end": 132
                      },
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
                            "start": 135,
                            "end": 136
                          },
                          "typeArguments": null,
                          "start": 135,
                          "end": 136
                        },
                        "start": 133,
                        "end": 136
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 128,
                      "end": 136
                    }
                  ],
                  "start": 126,
                  "end": 138
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": true,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 147
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 150,
                            "end": 154
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 154
                        },
                        "start": 148,
                        "end": 154
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 143,
                      "end": 154
                    }
                  ],
                  "start": 141,
                  "end": 156
                }
              ],
              "start": 126,
              "end": 156
            },
            "start": 124,
            "end": 156
          },
          "start": 116,
          "end": 156
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
            "start": 159,
            "end": 160
          },
          "typeArguments": null,
          "start": 159,
          "end": 160
        },
        "start": 157,
        "end": 160
      },
      "body": null,
      "expression": false,
      "start": 60,
      "end": 161
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 169,
            "end": 175
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "getInterfaceFromString",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 200
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 203,
                      "end": 207
                    },
                    "value": {
                      "type": "Literal",
                      "value": "two",
                      "raw": "'two'",
                      "start": 209,
                      "end": 214
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 203,
                    "end": 214
                  }
                ],
                "start": 201,
                "end": 216
              }
            ],
            "optional": false,
            "start": 178,
            "end": 217
          },
          "definite": false,
          "start": 169,
          "end": 217
        }
      ],
      "declare": false,
      "start": 163,
      "end": 218
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 218
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 22,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 32,
    "end": 33
  },
  {
    "type": "String",
    "value": "\"one\"",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41
  },
  {
    "type": "String",
    "value": "\"two\"",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 48,
    "end": 49
  },
  {
    "type": "String",
    "value": "\"three\"",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 60,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 68,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "getInterfaceFromString",
    "start": 77,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 102,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 116,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 128,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 143,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "Kind",
    "start": 150,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 163,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 176,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "getInterfaceFromString",
    "start": 178,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 207,
    "end": 208
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 209,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 217,
    "end": 218
  }
]
```
