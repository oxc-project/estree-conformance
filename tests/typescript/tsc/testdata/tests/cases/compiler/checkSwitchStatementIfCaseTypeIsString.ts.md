__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "use",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 24,
              "end": 27
            },
            "start": 22,
            "end": 27
          },
          "start": 21,
          "end": 27
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        },
        "start": 28,
        "end": 34
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 35
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 43,
        "end": 44
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doIt",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 55
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Array",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 59,
                        "end": 64
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 65,
                            "end": 71
                          }
                        ],
                        "start": 64,
                        "end": 72
                      },
                      "start": 59,
                      "end": 72
                    },
                    "start": 57,
                    "end": 72
                  },
                  "start": 56,
                  "end": 72
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 75,
                  "end": 79
                },
                "start": 73,
                "end": 79
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 90,
                          "end": 91
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "forEach",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 92,
                          "end": 99
                        },
                        "optional": false,
                        "computed": false,
                        "start": 90,
                        "end": 99
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 101,
                              "end": 102
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "SwitchStatement",
                                "discriminant": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "v",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 128,
                                  "end": 129
                                },
                                "cases": [
                                  {
                                    "type": "SwitchCase",
                                    "test": {
                                      "type": "Literal",
                                      "value": "test",
                                      "raw": "\"test\"",
                                      "start": 154,
                                      "end": 160
                                    },
                                    "consequent": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "CallExpression",
                                          "callee": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "use",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 162,
                                            "end": 165
                                          },
                                          "typeArguments": null,
                                          "arguments": [
                                            {
                                              "type": "ThisExpression",
                                              "start": 166,
                                              "end": 170
                                            }
                                          ],
                                          "optional": false,
                                          "start": 162,
                                          "end": 171
                                        },
                                        "directive": null,
                                        "start": 162,
                                        "end": 172
                                      }
                                    ],
                                    "start": 149,
                                    "end": 172
                                  }
                                ],
                                "start": 121,
                                "end": 186
                              }
                            ],
                            "start": 107,
                            "end": 196
                          },
                          "id": null,
                          "generator": false,
                          "start": 100,
                          "end": 196
                        }
                      ],
                      "optional": false,
                      "start": 90,
                      "end": 197
                    },
                    "directive": null,
                    "start": 90,
                    "end": 198
                  }
                ],
                "start": 80,
                "end": 204
              },
              "expression": false,
              "start": 55,
              "end": 204
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 51,
            "end": 204
          }
        ],
        "start": 45,
        "end": 206
      },
      "abstract": false,
      "declare": false,
      "start": 37,
      "end": 206
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 206
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 30,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 37,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "doIt",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 59,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "forEach",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 104,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 149,
    "end": 153
  },
  {
    "type": "String",
    "value": "\"test\"",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "use",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 166,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  }
]
```
