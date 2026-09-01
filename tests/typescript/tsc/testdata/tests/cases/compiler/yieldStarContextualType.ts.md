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
            "name": "g",
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
                        "start": 18,
                        "end": 19
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 18,
                      "end": 19
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 21,
                        "end": 22
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 21,
                      "end": 22
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 24,
                        "end": 25
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 24,
                      "end": 25
                    }
                  ],
                  "start": 17,
                  "end": 26
                },
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Generator",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 41
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
                            "start": 42,
                            "end": 43
                          },
                          "typeArguments": null,
                          "start": 42,
                          "end": 43
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 45,
                            "end": 46
                          },
                          "typeArguments": null,
                          "start": 45,
                          "end": 46
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 48,
                            "end": 49
                          },
                          "typeArguments": null,
                          "start": 48,
                          "end": 49
                        }
                      ],
                      "start": 41,
                      "end": 50
                    },
                    "start": 32,
                    "end": 50
                  },
                  "start": 29,
                  "end": 50
                },
                "start": 17,
                "end": 50
              },
              "start": 15,
              "end": 50
            },
            "start": 14,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 64
      },
      "generator": true,
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
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 77
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 78,
                "end": 84
              },
              {
                "type": "TSVoidKeyword",
                "start": 86,
                "end": 90
              },
              {
                "type": "TSUnknownKeyword",
                "start": 92,
                "end": 99
              }
            ],
            "start": 77,
            "end": 100
          },
          "start": 68,
          "end": 100
        },
        "start": 66,
        "end": 100
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 115
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 125,
                      "end": 126
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 125,
                    "end": 128
                  },
                  "start": 118,
                  "end": 128
                },
                "definite": false,
                "start": 113,
                "end": 128
              }
            ],
            "declare": false,
            "start": 107,
            "end": 129
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
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 144,
                      "end": 150
                    },
                    "start": 142,
                    "end": 150
                  },
                  "start": 140,
                  "end": 150
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": true,
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 160,
                      "end": 161
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 160,
                    "end": 163
                  },
                  "start": 153,
                  "end": 163
                },
                "definite": false,
                "start": 140,
                "end": 163
              }
            ],
            "declare": false,
            "start": 134,
            "end": 164
          }
        ],
        "start": 101,
        "end": 166
      },
      "expression": false,
      "start": 53,
      "end": 166
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 166
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
    "value": "g",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 26,
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
    "value": "=>",
    "start": 29,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 32,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 41,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 42,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 53,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 68,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 78,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 86,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 92,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 101,
    "end": 102
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 107,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 113,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 116,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 118,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 140,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 144,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 153,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  }
]
```
