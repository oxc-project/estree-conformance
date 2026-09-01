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
        "start": 9,
        "end": 10
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
              "start": 11,
              "end": 12
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
                    "type": "Literal",
                    "value": "0",
                    "raw": "\"0\"",
                    "start": 23,
                    "end": 26
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 33,
                              "end": 39
                            },
                            "start": 31,
                            "end": 39
                          },
                          "start": 29,
                          "end": 39
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 44,
                          "end": 50
                        },
                        "start": 41,
                        "end": 50
                      },
                      "start": 28,
                      "end": 50
                    },
                    "start": 26,
                    "end": 50
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 23,
                  "end": 50
                }
              ],
              "start": 21,
              "end": 52
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 11,
            "end": 52
          }
        ],
        "start": 10,
        "end": 53
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "p",
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
                "start": 57,
                "end": 58
              },
              "typeArguments": null,
              "start": 57,
              "end": 58
            },
            "start": 55,
            "end": 58
          },
          "start": 54,
          "end": 58
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
            "start": 61,
            "end": 62
          },
          "typeArguments": null,
          "start": 61,
          "end": 62
        },
        "start": 59,
        "end": 62
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "start": 69,
            "end": 78
          }
        ],
        "start": 63,
        "end": 80
      },
      "expression": false,
      "start": 0,
      "end": 80
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 86,
            "end": 87
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 98,
                      "end": 99
                    },
                    "id": null,
                    "generator": false,
                    "start": 93,
                    "end": 99
                  }
                ],
                "start": 92,
                "end": 100
              }
            ],
            "optional": false,
            "start": 90,
            "end": 101
          },
          "definite": false,
          "start": 86,
          "end": 101
        }
      ],
      "declare": false,
      "start": 82,
      "end": 102
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 102
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
    "value": "f",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 11,
    "end": 12
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 13,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"0\"",
    "start": 23,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 29,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 33,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 41,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 44,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 63,
    "end": 64
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 69,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 82,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 95,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 100,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102
  }
]
```
