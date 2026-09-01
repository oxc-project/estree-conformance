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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 13,
              "end": 14
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 23,
                "end": 26
              },
              "start": 23,
              "end": 28
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 28
          }
        ],
        "start": 12,
        "end": 29
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
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
                      "start": 41,
                      "end": 42
                    },
                    "constraint": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 53,
                            "end": 54
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 56,
                              "end": 62
                            },
                            "start": 54,
                            "end": 62
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 53,
                          "end": 62
                        }
                      ],
                      "start": 51,
                      "end": 64
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 41,
                    "end": 64
                  }
                ],
                "start": 40,
                "end": 65
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
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
                        "start": 69,
                        "end": 70
                      },
                      "typeArguments": null,
                      "start": 69,
                      "end": 70
                    },
                    "start": 67,
                    "end": 70
                  },
                  "start": 66,
                  "end": 70
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 79
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 82
                      },
                      "typeArguments": null,
                      "start": 81,
                      "end": 82
                    },
                    "start": 79,
                    "end": 82
                  },
                  "value": null,
                  "start": 72,
                  "end": 82
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 87,
                  "end": 93
                },
                "start": 84,
                "end": 93
              },
              "start": 40,
              "end": 93
            },
            "start": 38,
            "end": 93
          },
          "start": 35,
          "end": 93
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 96,
        "end": 99
      },
      "expression": false,
      "start": 0,
      "end": 99
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 104
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 106,
                "end": 107
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "u",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  },
                  "start": 110,
                  "end": 118
                },
                "start": 109,
                "end": 118
              }
            ],
            "returnType": null,
            "body": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 124
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 125,
                "end": 126
              },
              "optional": false,
              "computed": false,
              "start": 123,
              "end": 126
            },
            "id": null,
            "generator": false,
            "start": 105,
            "end": 126
          }
        ],
        "optional": false,
        "start": 101,
        "end": 127
      },
      "directive": null,
      "start": 101,
      "end": 127
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 127
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 9,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 13,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 15,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 35,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 41,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 43,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 72,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 81,
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
    "value": "number",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "type": "Identifier",
    "value": "foo",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "u",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 112,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 120,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127
  }
]
```
