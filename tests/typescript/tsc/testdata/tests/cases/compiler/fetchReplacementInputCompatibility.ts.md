__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "fetchReplacement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 40,
                            "end": 46
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "URL",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 49,
                              "end": 52
                            },
                            "typeArguments": null,
                            "start": 49,
                            "end": 52
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Request",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 55,
                              "end": 62
                            },
                            "typeArguments": null,
                            "start": 55,
                            "end": 62
                          }
                        ],
                        "start": 40,
                        "end": 62
                      },
                      "start": 38,
                      "end": 62
                    },
                    "start": 33,
                    "end": 62
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "init",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "RequestInit",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 71,
                          "end": 82
                        },
                        "typeArguments": null,
                        "start": 71,
                        "end": 82
                      },
                      "start": 69,
                      "end": 82
                    },
                    "start": 64,
                    "end": 82
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 94
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Response",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 95,
                            "end": 103
                          },
                          "typeArguments": null,
                          "start": 95,
                          "end": 103
                        }
                      ],
                      "start": 94,
                      "end": 104
                    },
                    "start": 87,
                    "end": 104
                  },
                  "start": 84,
                  "end": 104
                },
                "start": 32,
                "end": 104
              },
              "start": 30,
              "end": 104
            },
            "start": 14,
            "end": 104
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 104
        }
      ],
      "declare": true,
      "start": 0,
      "end": 105
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
            "name": "replacement",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 137
                },
                "typeArguments": null,
                "start": 125,
                "end": 137
              },
              "start": 123,
              "end": 137
            },
            "start": 112,
            "end": 137
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "fetchReplacement",
            "optional": false,
            "typeAnnotation": null,
            "start": 140,
            "end": 156
          },
          "definite": false,
          "start": 112,
          "end": 156
        }
      ],
      "declare": false,
      "start": 106,
      "end": 157
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
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Parameters",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 190
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "fetch",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 203
                        },
                        "typeArguments": null,
                        "start": 191,
                        "end": 203
                      }
                    ],
                    "start": 190,
                    "end": 204
                  },
                  "start": 180,
                  "end": 204
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 205,
                    "end": 206
                  },
                  "start": 205,
                  "end": 206
                },
                "start": 180,
                "end": 207
              },
              "start": 178,
              "end": 207
            },
            "start": 173,
            "end": 207
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 207
        }
      ],
      "declare": true,
      "start": 159,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fetchReplacement",
          "optional": false,
          "typeAnnotation": null,
          "start": 209,
          "end": 225
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "input",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 231
          }
        ],
        "optional": false,
        "start": 209,
        "end": 232
      },
      "directive": null,
      "start": 209,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "fetchReplacement",
    "start": 14,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 33,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 40,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "URL",
    "start": 49,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "Request",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "init",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "RequestInit",
    "start": 71,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 84,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 87,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "Response",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "replacement",
    "start": 112,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "fetchReplacement",
    "start": 140,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 159,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 167,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 173,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "Parameters",
    "start": 180,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 190,
    "end": 191
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 191,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "fetch",
    "start": 198,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 204,
    "end": 205
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "fetchReplacement",
    "start": 209,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 232,
    "end": 233
  }
]
```
