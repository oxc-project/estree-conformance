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
            "name": "styles",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Partial",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 29
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Pick",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 30,
                        "end": 34
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CSSStyleDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 35,
                              "end": 54
                            },
                            "typeArguments": null,
                            "start": 35,
                            "end": 54
                          },
                          {
                            "type": "TSIntersectionType",
                            "types": [
                              {
                                "type": "TSTypeOperator",
                                "operator": "keyof",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "CSSStyleDeclaration",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 62,
                                    "end": 81
                                  },
                                  "typeArguments": null,
                                  "start": 62,
                                  "end": 81
                                },
                                "start": 56,
                                "end": 81
                              },
                              {
                                "type": "TSSymbolKeyword",
                                "start": 84,
                                "end": 90
                              }
                            ],
                            "start": 56,
                            "end": 90
                          }
                        ],
                        "start": 34,
                        "end": 91
                      },
                      "start": 30,
                      "end": 91
                    }
                  ],
                  "start": 29,
                  "end": 92
                },
                "start": 22,
                "end": 92
              },
              "start": 20,
              "end": 92
            },
            "start": 14,
            "end": 92
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 92
        }
      ],
      "declare": true,
      "start": 0,
      "end": 93
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "element",
        "optional": false,
        "typeAnnotation": null,
        "start": 111,
        "end": 118
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "styles",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 127,
                "end": 134
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 135,
                      "end": 141
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "CSSStyleDeclaration",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 148,
                              "end": 167
                            },
                            "typeArguments": null,
                            "start": 148,
                            "end": 167
                          },
                          "start": 142,
                          "end": 167
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 169,
                          "end": 175
                        }
                      ],
                      "start": 141,
                      "end": 176
                    },
                    "start": 135,
                    "end": 176
                  }
                ],
                "start": 134,
                "end": 177
              },
              "start": 127,
              "end": 177
            },
            "start": 125,
            "end": 177
          },
          "start": 119,
          "end": 177
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 180,
          "end": 184
        },
        "start": 178,
        "end": 184
      },
      "body": null,
      "expression": false,
      "start": 94,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "element",
          "optional": false,
          "typeAnnotation": null,
          "start": 186,
          "end": 193
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "styles",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 200
          }
        ],
        "optional": false,
        "start": 186,
        "end": 201
      },
      "directive": null,
      "start": 186,
      "end": 202
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 202
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
    "value": "styles",
    "start": 14,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 22,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Pick",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 34,
    "end": 35
  },
  {
    "type": "Identifier",
    "value": "CSSStyleDeclaration",
    "start": 35,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 56,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "CSSStyleDeclaration",
    "start": 62,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 94,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 111,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 119,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 127,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 135,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 141,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "CSSStyleDeclaration",
    "start": 148,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 169,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 180,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 186,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "styles",
    "start": 194,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 201,
    "end": 202
  }
]
```
