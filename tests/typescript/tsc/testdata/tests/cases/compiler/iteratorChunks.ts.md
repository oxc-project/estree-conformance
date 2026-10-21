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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 9,
                    "end": 15
                  },
                  "start": 9,
                  "end": 17
                },
                "start": 9,
                "end": 19
              },
              "start": 7,
              "end": 19
            },
            "start": 6,
            "end": 19
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Iterator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 22,
                        "end": 30
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "from",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 31,
                        "end": 35
                      },
                      "optional": false,
                      "computed": false,
                      "start": 22,
                      "end": 35
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 37,
                            "end": 38
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 40,
                            "end": 41
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 43,
                            "end": 44
                          }
                        ],
                        "start": 36,
                        "end": 45
                      }
                    ],
                    "optional": false,
                    "start": 22,
                    "end": 46
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "chunks",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 53
                  },
                  "optional": false,
                  "computed": false,
                  "start": 22,
                  "end": 53
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 54,
                    "end": 55
                  }
                ],
                "optional": false,
                "start": 22,
                "end": 56
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "toArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 64
              },
              "optional": false,
              "computed": false,
              "start": 22,
              "end": 64
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 22,
            "end": 66
          },
          "definite": false,
          "start": 6,
          "end": 66
        }
      ],
      "declare": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 77
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "from",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 82
              },
              "optional": false,
              "computed": false,
              "start": 69,
              "end": 82
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 84,
                    "end": 85
                  },
                  {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 87,
                    "end": 88
                  },
                  {
                    "type": "Literal",
                    "value": 3,
                    "raw": "3",
                    "start": 90,
                    "end": 91
                  }
                ],
                "start": 83,
                "end": 92
              }
            ],
            "optional": false,
            "start": 69,
            "end": 93
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "chunks",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 100
          },
          "optional": false,
          "computed": false,
          "start": 69,
          "end": 100
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "2",
            "raw": "\"2\"",
            "start": 101,
            "end": 104
          }
        ],
        "optional": false,
        "start": 69,
        "end": 105
      },
      "directive": null,
      "start": 69,
      "end": 106
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 106
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 22,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 31,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 41,
    "end": 42
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "chunks",
    "start": 47,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 53,
    "end": 54
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "toArray",
    "start": 57,
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
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 69,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 78,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 83,
    "end": 84
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 85,
    "end": 86
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 88,
    "end": 89
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "chunks",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101
  },
  {
    "type": "String",
    "value": "\"2\"",
    "start": 101,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  }
]
```
