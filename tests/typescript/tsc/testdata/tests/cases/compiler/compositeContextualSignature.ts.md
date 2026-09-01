__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 31,
        "end": 32
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
              "start": 33,
              "end": 34
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 43,
                "end": 46
              },
              "start": 43,
              "end": 48
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 33,
            "end": 48
          }
        ],
        "start": 32,
        "end": 49
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReadonlyArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 53,
                "end": 66
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 68
                    },
                    "typeArguments": null,
                    "start": 67,
                    "end": 68
                  }
                ],
                "start": 66,
                "end": 69
              },
              "start": 53,
              "end": 69
            },
            "start": 51,
            "end": 69
          },
          "start": 50,
          "end": 69
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 71,
        "end": 74
      },
      "expression": false,
      "start": 22,
      "end": 74
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 77
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 103
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 119,
                      "end": 122
                    },
                    "id": null,
                    "generator": false,
                    "start": 113,
                    "end": 122
                  }
                ],
                "start": 84,
                "end": 129
              },
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 145,
                    "end": 146
                  },
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 176,
                                "end": 183
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 184,
                                "end": 187
                              },
                              "optional": false,
                              "computed": false,
                              "start": 176,
                              "end": 187
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "Hello",
                                "raw": "'Hello'",
                                "start": 188,
                                "end": 195
                              }
                            ],
                            "optional": false,
                            "start": 176,
                            "end": 196
                          },
                          "directive": null,
                          "start": 176,
                          "end": 196
                        }
                      ],
                      "start": 162,
                      "end": 206
                    },
                    "id": null,
                    "generator": false,
                    "start": 156,
                    "end": 206
                  }
                ],
                "start": 135,
                "end": 213
              }
            ],
            "start": 78,
            "end": 216
          }
        ],
        "optional": false,
        "start": 76,
        "end": 217
      },
      "directive": null,
      "start": 76,
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
    "type": "Keyword",
    "value": "function",
    "start": 22,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 33,
    "end": 34
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 35,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 43,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "ReadonlyArray",
    "start": 53,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 68,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 94,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 116,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 121,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 135,
    "end": 136
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 159,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "String",
    "value": "'Hello'",
    "start": 188,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 206,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "]",
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
